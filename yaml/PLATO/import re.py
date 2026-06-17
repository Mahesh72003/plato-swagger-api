import re
import csv

input_file = r"C:\Users\mahes\Desktop\Trempplin\combined_sql_output.txt"  
output_file = r"C:\Users\mahes\Desktop\Trempplin\combined_sql_output.txt.csv"

schema = {}

# -----------------------------
# Datatype Mapping
# -----------------------------
def map_datatype(datatype):
    datatype = datatype.upper().strip()

    mapping = {
        "VARCHAR2": "STRING",
        "VARCHAR": "STRING",
        "CHAR": "STRING",
        "NCHAR": "STRING",
        "NVARCHAR2": "STRING",
        "CLOB": "STRING",
        "NCLOB": "STRING",
        "LONG": "STRING",

        "NUMBER": "NUMBER",
        "INTEGER": "NUMBER",
        "INT": "NUMBER",
        "FLOAT": "NUMBER",
        "DECIMAL": "NUMBER",
        "NUMERIC": "NUMBER",

        "DATE": "DATE",
        "TIMESTAMP": "DATE",
        "TIMESTAMP WITH TIME ZONE": "DATE",
        "TIMESTAMP WITH LOCAL TIME ZONE": "DATE",

        "BLOB": "BINARY",
        "RAW": "BINARY",
        "LONG RAW": "BINARY"
    }

    return mapping.get(datatype, datatype)


# -----------------------------
# Regex Patterns
# -----------------------------
create_table_pattern = re.compile(
    r'CREATE TABLE\s+([\w\.]+)\s*\((.*?)\);',
    re.S | re.I
)

alter_add_pattern = re.compile(
    r'ALTER TABLE\s+([\w\.]+)\s+ADD\s*\((.*?)\);',
    re.S | re.I
)

alter_modify_pattern = re.compile(
    r'ALTER TABLE\s+([\w\.]+)\s+MODIFY\s*\((.*?)\);',
    re.S | re.I
)

# Column pattern (supports multi-word datatypes + precision)
column_pattern = re.compile(
    r'(\w+)\s+([A-Z ]+)(?:\(([\d,\s]+)\))?\s*(NOT NULL)?',
    re.I
)


# -----------------------------
# Column Parser
# -----------------------------
def parse_columns(block):
    columns = []

    for col_match in column_pattern.finditer(block):
        col_name = col_match.group(1).upper()
        datatype_raw = col_match.group(2).strip()
        length = col_match.group(3).replace(" ", "") if col_match.group(3) else ""
        mandatory = "YES" if col_match.group(4) else "NO"

        datatype = map_datatype(datatype_raw)

        columns.append((col_name, datatype, length, mandatory))

    return columns


# -----------------------------
# Read File
# -----------------------------
print("📖 Reading file...")
with open(input_file, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()


# -----------------------------
# CREATE TABLE
# -----------------------------
print("🔍 Processing CREATE TABLE...")
for match in create_table_pattern.finditer(content):
    table = match.group(1).split('.')[-1].upper()
    cols_block = match.group(2)

    if table not in schema:
        schema[table] = {}

    for col_name, datatype, length, mandatory in parse_columns(cols_block):
        schema[table][col_name] = {
            "type": datatype,
            "length": length,
            "mandatory": mandatory
        }


# -----------------------------
# ALTER TABLE ADD
# -----------------------------
print("➕ Processing ALTER TABLE ADD...")
for match in alter_add_pattern.finditer(content):
    table = match.group(1).split('.')[-1].upper()
    cols_block = match.group(2)

    if table not in schema:
        schema[table] = {}

    for col_name, datatype, length, mandatory in parse_columns(cols_block):
        schema[table][col_name] = {
            "type": datatype,
            "length": length,
            "mandatory": mandatory
        }


# -----------------------------
# ALTER TABLE MODIFY
# -----------------------------
print("✏️ Processing ALTER TABLE MODIFY...")
for match in alter_modify_pattern.finditer(content):
    table = match.group(1).split('.')[-1].upper()
    cols_block = match.group(2)

    if table not in schema:
        continue

    for col_name, datatype, length, mandatory in parse_columns(cols_block):
        if col_name in schema[table]:
            schema[table][col_name]["type"] = datatype
            schema[table][col_name]["length"] = length
            schema[table][col_name]["mandatory"] = mandatory


# -----------------------------
# WRITE CSV
# -----------------------------
print("💾 Writing to CSV...")
with open(output_file, "w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["Table", "Column", "Type", "Length", "Mandatory"])

    for table, cols in schema.items():
        for col, details in cols.items():
            writer.writerow([
                table,
                col,
                details["type"],
                details["length"],
                details["mandatory"]
            ])

print("✅ Done! Output saved as:", output_file)
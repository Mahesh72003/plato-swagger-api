import os

# Root directory to search
root_dir = r"C:\Users\mahes\Desktop\Trempplin\obtfpm"

# Output file
output_file = r"C:\Users\mahes\Desktop\Trempplin\combined_sql_output.txt"

with open(output_file, 'w', encoding='utf-8') as outfile:
    # Walk through all directories and subdirectories
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.lower().endswith('.sql'):
                file_path = os.path.join(foldername, filename)
                
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as infile:
                        content = infile.read()
                        
                        # Write header info
                        outfile.write("=" * 80 + "\n")
                        outfile.write(f"FILE NAME: {filename}\n")
                        outfile.write(f"FULL PATH: {file_path}\n")
                        outfile.write("=" * 80 + "\n\n")
                        
                        # Write SQL content
                        outfile.write(content)
                        outfile.write("\n\n\n")
                
                except Exception as e:
                    print(f"Error reading file: {file_path}")
                    print(e)

print("All SQL files have been combined into:", output_file)

var basicIP = window.location.hostname;
var basicPort = window.location.port;
var protocol = window.location.protocol;
$(document).ready(function () {

    prod_name = "Swagger API";
    prod_fullForm = "Swagger API Documentation";
    product_element = document.createElement("div");
    product_element.setAttribute("class", "product-item");

    product_link = document.createElement("a");
    url=protocol+'//'+basicIP+':'+basicPort+'/plato-swagger-api/swaggerHomePage.html';
    product_link.setAttribute("href", url);

    product_name_div = document.createElement("div");
    product_name_div.setAttribute("class", "prod-item-title");
    prod_title = document.createTextNode(prod_name);
    product_name_div.appendChild(prod_title);

    product_name_description_div = document.createElement("div");
    product_name_description_div.setAttribute("class", "prod-item-description");
    prod_descri = document.createTextNode(prod_fullForm);
    product_name_description_div.appendChild(prod_descri);

    product_link.appendChild(product_name_div);
    product_link.appendChild(product_name_description_div);
    product_element.appendChild(product_link);

    document.getElementById('product-wrapper-id').appendChild(product_element);

    prod_name = "Async API";
    prod_fullForm = "Async API Documentation";
    product_element = document.createElement("div");
    product_element.setAttribute("class", "product-item");

    product_link = document.createElement("a");
    url=protocol+'//'+basicIP+':'+basicPort+'/plato-swagger-api/asyncHomePage.html';
    product_link.setAttribute("href", url);

    product_name_div = document.createElement("div");
    product_name_div.setAttribute("class", "prod-item-title");
    prod_title = document.createTextNode(prod_name);
    product_name_div.appendChild(prod_title);

    product_name_description_div = document.createElement("div");
    product_name_description_div.setAttribute("class", "prod-item-description");
    prod_descri = document.createTextNode(prod_fullForm);
    product_name_description_div.appendChild(prod_descri);

    product_link.appendChild(product_name_div);
    product_link.appendChild(product_name_description_div);
    product_element.appendChild(product_link);

    document.getElementById('product-wrapper-id').appendChild(product_element);

});
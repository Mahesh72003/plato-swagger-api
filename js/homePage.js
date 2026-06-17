$(document).ready(function(){
    var prod_array = products.product_list;
    prod_array.sort(function(a, b) {
        return (a.index) - (b.index);
    });
    for(var i=0;i<products.product_list.length;i++){
    prod_name= products.product_list[i].product_name;
    prod_fullForm= products.product_list[i].product_fullForm;
    product_element= document.createElement("div");
    product_element.setAttribute("class","product-item");

    product_link= document.createElement("a");
    url='welcome.html?product=' + encodeURIComponent(prod_name);
    product_link.setAttribute("href",url);

    product_name_div = document.createElement("div");
    product_name_div.setAttribute("class","prod-item-title");
    prod_title = document.createTextNode("");
    product_name_div.appendChild(prod_title);

    product_name_description_div = document.createElement("div");
    product_name_description_div.setAttribute("class", "prod-item-description");
    prod_descri= document.createTextNode(prod_fullForm);
    product_name_description_div.appendChild(prod_descri);

    product_link.appendChild(product_name_div);
    product_link.appendChild(product_name_description_div);
    product_element.appendChild(product_link);

    document.getElementById('product-wrapper-id').appendChild(product_element);
    }

    for(var j=0;j<4;j++){
    product_element_empty = document.createElement("div");
    product_element_empty.setAttribute("class","product-item prod-alignment-items");

    prod_element_span = document.createElement("span");
    product_element_empty.appendChild(prod_element_span);

    document.getElementById('product-wrapper-id').appendChild(product_element_empty);
    }

});	

$(document).ready(function(){
var headerHeight = $(".headTag").height();
    var mainHeight = $(".main-wrapper").height();
    var mainWindowHeight = $(window).height();
    //alert($(window).height());
    var mainWrapperHeight;
    var mainWrapperHeight =  mainWindowHeight - headerHeight - 20;

    $('.main-wrapper').height(mainWrapperHeight);

    $( window ).resize(function(){

    $('.main-wrapper').css('height', mainWrapperHeight);

    })
});

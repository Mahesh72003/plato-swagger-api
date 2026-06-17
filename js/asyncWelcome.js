function displayList(moduleName) {
    var slist = document.getElementById("slist_"+moduleName);
    var sort_array=[];
    for(var i=0;i<subCategories.list.length;i++){
        if(subCategories.list[i].parentcategory==moduleName){
            sort_array.push(subCategories.list[i]);
        }
    }	
    sort_array.sort(function(a, b) {
        return (a.index) - (b.index);
    });
    for(var i=0;i<sort_array.length;i++){		
        //item = document.createElement("div");
        itemContainer = createItemContainer();
        displayName = sort_array[i].displayName;
        link = createLink(sort_array[i].html,displayName);
        itemContainer.appendChild(link);
        desc = createItemDescription(sort_array[i].description);
        itemContainer.appendChild(desc);
        //item.appendChild(itemContainer);
        slist.appendChild(itemContainer);	
    }
}

function createLink(url,displayText) {
    link = document.createElement("a");
    link.setAttribute("href",url);
    text = document.createTextNode(displayText);
    link.appendChild(text);
    return link;
}
function createItemContainer() {
    div = document.createElement("li");
    div.setAttribute("class","Headings");
    return div
}

function createItemDescription(description) {
    descContainer = document.createElement("div");
    descPara = document.createElement("pre");
    descPara.setAttribute("class","BodyParagraph");
    desc = document.createTextNode(description)
    descPara.appendChild(desc);
    descContainer.appendChild(descPara);
    
    return descPara;
}
var loadLinks=true;
function loadcategories(moduleName,test){
    if(document.getElementById("slist_"+moduleName.currentTarget.firstChild.data).innerHTML!=''){
        //$(".showdata li").empty();
    }else{
        $(".showdata li").empty();
        displayList(moduleName.currentTarget.firstChild.data);
    }
}

function getleftList(){
    var sort_array=categories.mastercategories;
    sort_array.sort(function(a, b) {
        return (a.index) - (b.index);
    });
    for(var i=0;i<categories.mastercategories.length;i++){
        name=categories.mastercategories[i].name;
        index=categories.mastercategories[i].index;
        moduleheaderLink1=document.createElement("div");
        
        moduleheaderLink=document.createElement("a");
        moduleheaderLink.setAttribute("href","#item_"+index);
        moduleheaderSpan=document.createElement("span");
        moduleheaderSpan.setAttribute("class","icon icon-"+name.toLowerCase().trim().replace(' ', '-'));

        moduleheaderLink.appendChild(moduleheaderSpan);
        
        moduleheading = document.createTextNode(name);
        moduleheaderLink.appendChild(moduleheading);
        moduleheaderLink.onclick = loadcategories.bind(name);		
        moduleheaderLink1.appendChild(moduleheaderLink);
        document.getElementById('leftlist').appendChild(moduleheaderLink1);
        
        
    }

}


function getModules(){
    var sort_array=categories.mastercategories;
    sort_array.sort(function(a, b) {
        return (a.index) - (b.index);
    });
    for(var i=0;i<categories.mastercategories.length;i++){
        name=categories.mastercategories[i].name;
        desc=categories.mastercategories[i].description;
        index=categories.mastercategories[i].index;
        mastercategories=document.createElement("div");
        mastercategories.setAttribute("class","item");
        mastercategories.setAttribute("id","item_"+index);
        
        
        moduleheadertag=document.createElement("div");
        moduleheadertag.setAttribute("class","title");
        moduleheading = document.createTextNode(name);
        moduleheadertag.appendChild(moduleheading);
        moduleheadertag.onclick = loadcategories.bind(name);
        
        moduledescriptiontag=document.createElement("div");
        moduledescriptiontag.setAttribute("class","maindesc");
        
        
        
        modPreTag=document.createElement("pre");
        moduledesc=document.createTextNode(desc);
        
        modPreTag.appendChild(moduledesc);
        moduledescriptiontag.appendChild(modPreTag);
        
        //modulePtag=document.createElement("p");
        //moduledesc=document.createTextNode(desc);
        //modulePtag.setAttribute("class","BodyParagraph");
        //modulePtag.appendChild(moduledesc);				
        //moduleDescPreTag.appendChild(modulePtag);      			
        //moduledescriptiontag.appendChild(moduleDescPreTag);
        
        content=document.createElement("div");
        content.setAttribute("class","showdata");
        content.setAttribute("id","slist_"+name);

        mastercategories.appendChild(moduleheadertag);
        mastercategories.appendChild(moduledescriptiontag);
        mastercategories.appendChild(content);
        
        
        document.getElementById('moduleslist').appendChild(mastercategories);
        //document.getElementById('moduleslist').appendChild(moduleheadertag);
        //document.getElementById('moduleslist').appendChild(moduledescriptiontag);
        //document.getElementById('moduleslist').appendChild(content);
        //$("#item_"+name).append($("#moduleslist"));
        
        displayList(name);
    }
    getleftList();
}
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

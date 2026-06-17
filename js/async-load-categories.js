const urlParams = new URLSearchParams(window.location.search);
const productNameParam = urlParams.get('product');
const scriptLink= 'js/'+productNameParam+'/asyncCategories.js';
runTimeProductScript = document.createElement("script");
runTimeProductScript.setAttribute('src', scriptLink);
document.head.appendChild(runTimeProductScript);
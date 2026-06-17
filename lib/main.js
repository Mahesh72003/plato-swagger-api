window.addEventListener('load', function () {
  var props = document.querySelectorAll('.js-prop');
  for (let index = 0; index < props.length; index++) {
    const prop = props[index];
    prop.addEventListener('click', function (ev) {
      ev.stopPropagation();
      ev.currentTarget.parentElement.classList.toggle('is-open');
    });
  }
});

window.addEventListener('load', function () {
  var items = document.querySelectorAll('.js-menu-item');
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
      document.getElementById("burger-menu").checked = false;
    });
  }
});

// console.log('\'Allo \'Allo!');


// Vanilla JS
// document.getElementsByClassName('js-go-to')[0].addEventListener('click', function (event) {
//   console.log(event);
//
// });

(function () {
  const $root = $('html, body');

  // $('.js-promo').on('click', function (e) {
  //   alert('Hello!');
  // });

  $('.js-promo').on('click', '.js-go-to', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // alert('Clicked!');
    // console.log('js-go-to Clicked!');

    $root.animate({ scrollTop: $( $.attr(this, 'href') ).offset().top });

    // return false;
  });
}());

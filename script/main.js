$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    focusOnSelect: true
  });








  function outputUpdate(vol){
    var output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = vol - 100000 + 'px';
  }

  function OutputUpdate(vol){
    var output = document.querySelector('#volume-1');
    output.value = vol;
    output.style.left = vol - 100000 + 'px';
  }
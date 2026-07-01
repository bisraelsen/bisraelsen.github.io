$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  // if (window.location.hash && window.location.hash == 'blog/index.html') {
    // $('.panel-cover').addClass('panel-cover--collapsed')
  // }

  if (window.location.pathname !== '/' && window.location.pathname !== '//') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('[data-email-contact]').click(function (e) {
    e.preventDefault()
    var address = String.fromCharCode(
      98, 114, 101, 116, 116, 46, 105, 115, 114, 97, 101, 108, 115, 101,
      110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109
    )
    window.location.href = 'mailto:' + address
  })

})

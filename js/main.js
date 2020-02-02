const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(this).toggleClass("open");
  });

  $('input[type="checkbox"]').click(e => {
    if (e.target.checked) {
      document.documentElement.setAttribute("dark-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("dark-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

if (currentTheme) {
  document.documentElement.setAttribute("dark-theme", currentTheme);
  if (currentTheme === "light") {
    // document.querySelector('input[type="checkbox"]').checked = true;
    $('input[type="checkbox"]').prop("checked", true);
  }
}

$(document).ready(function() {
  $(".your-class").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  if ($(".your-class").slick("slickCurrentSlide") === 0) {
    $(".slick-prev").hide();
  }
  $(".your-class").on("init reinit afterChange", (e, slick) => {
    const currentSlide = $(".your-class").slick("slickCurrentSlide");
    const slidesScroll = slick.options.slidesToScroll;
    // console.log($('.your-class').slick('slickCurrentSlide'));
    // console.log(slick.slideCount,slick.options.slidesToScroll,slick);
    if (slidesScroll === 4) {
      if (currentSlide === 8) {
        $(".slick-next").hide();
      } else if (currentSlide === 0) {
        $(".slick-prev").hide();
      } else {
        $(".slick-next").show();
        $(".slick-prev").show();
      }
    } else {
      if (currentSlide === slick.slideCount - currentSlide) {
        $(".slick-next").hide();
        $(".slick-prev").show();
      } else {
        $(".slick-next").show();
        $(".slick-prev").show();
      }
      if (currentSlide === 0) {
        $(".slick-next").show();
        $(".slick-prev").hide();
      }
    }
  });
});

// $(window).scroll(function () {
//     const theme = localStorage.getItem('theme')?localStorage.getItem('theme'):null;
//     if ($(window).scrollTop() >= 10) {

//     if(theme){
//         if(theme === 'dark'){

//             $('.navbar').css('background','#141414');
//         }
//         if(theme === 'light'){
//             $('.navbar').css('background','#fff');

//         }
//     }
//     }else{
//         if(theme === 'dark'){

//             $('.navbar').css('background','rgba(0,0,0,.8)');
//         }
//         if(theme === 'light'){
//             $('.navbar').css('background','rgba(255,255,255,.8)');

//         }

//     }
//     });

//     function setTheCurrentTheme(){
//         const currentTheme = localStorage.getItem('theme')?localStorage.getItem('theme'):null;
// console.log(currentTheme);
// if(currentTheme){
//     if(currentTheme === 'dark' && $(window).scrollTop() <= 10){
//         $('.navbar').css('background','rgba(0,0,0,.8)');

//     }
//     if(currentTheme === 'light' && $(window).scrollTop() <= 10){
//         $('.navbar').css('background','rgba(255,255,255,.8)');

//     }
//     if(currentTheme === 'dark' && $(window).scrollTop() >= 10){
//         $('.navbar').css('background','#141414');

//     }
//     if(currentTheme === 'light' && $(window).scrollTop() >= 10){
//         $('.navbar').css('background','#fff');

//     }
// }

//     }
// setInterval(()=>setTheCurrentTheme(),100);
// clearInterval();

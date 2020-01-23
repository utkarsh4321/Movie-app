const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme'):null;
$(document).ready(function(){

    $('.navbar-toggler').click(function(){

        $(this).toggleClass('open');

    });

    $('input[type="checkbox"]').click((e)=>{
        if(e.target.checked){
document.documentElement.setAttribute('dark-theme','light');
localStorage.setItem('theme','light');
        }else{
document.documentElement.setAttribute('dark-theme','dark');
            localStorage.setItem('theme','dark');
        }
    })
})

if(currentTheme){
    document.documentElement.setAttribute('dark-theme',currentTheme);
    if(currentTheme === 'light'){
        // document.querySelector('input[type="checkbox"]').checked = true;
        $('input[type="checkbox"]').prop('checked',true);
    }

}

$(document).ready(function(){
    $('.your-class').slick();
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
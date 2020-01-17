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
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme'):null;

if(currentTheme){
    document.documentElement.setAttribute('dark-theme',currentTheme);
    if(currentTheme === 'light'){
        // document.querySelector('input[type="checkbox"]').checked = true;
        $('input[type="checkbox"]').prop('checked',true);
    }

}

$(window).scroll(function () {
    
    if ($(window).scrollTop() >= 10) {
    // switch(currentTheme){

    //    case currentTheme === 'light':
    //        console.log(currentTheme,'from light on scroll');
    //         $('.navbar').css('background','white');
    //         break;
    //    case currentTheme === 'dark':
    //     console.log(currentTheme,'from dark on scroll');

    //         $('.navbar').css('background','#141414');
    //         break;
    // }
    } else {
        // switch(currentTheme){
        //     case currentTheme === 'light':
        //         console.log(currentTheme,'from light on not scroll');

        //          $('.navbar').css('background','rgba(255,255,255,.5)');
        //          break;
        //     case currentTheme === 'dark':
        //         console.log(currentTheme,'from dark on  not scroll');

        //          $('.navbar').css('background','rgba(0,0,0,.5)');
        //          break;
        //  }
        $('.navbar').css('background','transparent');
    }
    });

$(document).ready(function(){
    $('.btn').click(function(){
    $('.nav-links').slideToggle(2000);
    
    $('.btn').toggleClass('change');
    })
   $(window).scroll(function(){
let position =$(window).scrollTop();
if (posotion>=100){
    $('nav, nav-container').addClass('navBackground')
}
else{
    $('nav, nav-container').RemoveClass('navBackground')
}
   })
})


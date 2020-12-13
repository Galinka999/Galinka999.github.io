alert('Привет, мир!');

console.log('Привет, мир!');

$('.btn-my').click(function(){
    // $('.article').slideToggle(3000);
    // $('.article').fadeToggle(2000);
    // $(this).parents('.portfolio').find('.portfolio').slideToggle(1000);
    $('.portfolio-right-blok').css({
        'opacity': 1,
        'transition': 2 + 's',
    });
});

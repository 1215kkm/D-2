
setInterval(function(){
    $('.slide ul').animate({left:'-100%'},1000, function(){
        $('.slide li').eq(0).appendTo($('.slide ul'))
        $('.slide ul').css({left:0})
    })
}, 3000)


/* popup */
$('.notice li').eq(0).click(function(){
    $('.modal').show()
})

$('.popup a').click(function(){
    $('.modal').hide()
})
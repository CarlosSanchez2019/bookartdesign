var contenedor = $('.contendor-artistas');
var prev = $('.prev');
var next = $('.next');

$('.contendor-artistas .contendor-slider:last').insertBefore('.contendor-artistas .contendor-slider:first');

contenedor.css('margin-left', '-'+100+'%');

prev.on('click', function(){
  contenedor.animate({
    marginLeft:'-'+200+'%'
  },700,function(){
    $('.contendor-artistas .contendor-slider:first').insertAfter('.contendor-artistas .contendor-slider:last');
    contenedor.css('margin-left', '-'+100+'%');
    
  });
});

next.on('click', function(){
  contenedor.animate({
    marginLeft:0
  },700, function(){
    $('.contendor-artistas .contendor-slider:last').insertBefore('.contendor-artistas .contendor-slider:first');
  contenedor.css('margin-left', '-'+100+'%');
  });
});

$(document.ready(){
  $(".draggable span").draggable();

  $(".draggable span").bind('click', function (event){
      var cursor = $('.draggable span').draggable('option', 'cursor');
      var cursorAt = $('.draggable span').draggable('option', 'cursorAt');
  })  alert('Cursor type - ' + cursor + ", cursorAt - " + cursorAt);
});
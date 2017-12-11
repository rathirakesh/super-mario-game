$(document).ready(function(){
  $(document).keypress(function(anything){
    var key_code = anything.keyCode;
    var current_position = $('.mario').css('left');
    console.log(current_position);
    if(key_code == 97) { //Left Movement - A
      if(current_position >= '0px'){
        $('.mario').css('left','calc(' + current_position + ' - 10px)');
      }
    } else if(key_code == 100) { //Right Movement - D
      //console.log('right');
      if(current_position < '590px'){
        $('.mario').css('left','calc(' + current_position + ' + 10px)');
      } else {console.log(current_position);}

    } else if(key_code == 119) { //Up Movement - W
      //console.log('up');
      $('.mario').addClass('jump');
    } else if(key_code == 115) { //Down Movement - S
      //console.log('down');

      //$('.mario').addClass('jump');
      $('.mario').removeClass('jump');
    }
  });
});

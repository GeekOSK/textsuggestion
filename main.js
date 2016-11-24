$(document).on('click', '.replacer', function(){
  //Variable Declarations
  var $this = $(this),
  $textbox = $('.input-group input'),
  $textboxOffset = $textbox.position(),
  $padding = {top: 0, left: 0};

  //Setting Absolute .replacer's position what it is
  $this.css({'position': 'absolute'});
  $this.css({
    top: $this.offset().top - $('.input-group').offset().top,
    left: $this.offset().left- $('.input-group').offset().left
  });
  //Changing the style of the input for smoothness in animation
  $textbox.addClass('textbox-mode');
    //time delay value = animation value
  setTimeout(function(){
    $textbox.val('');
    $textbox.removeClass('textbox-mode');
  }, 280);
  //Adding the class which changes .replacer's styles to input's styles
  $this.addClass('textbox-mode');
  //Setting its past offsets for later fast usage
  $this.attr('offsetTop', $this.offset().top - $('.input-group').offset().top);
  $this.attr('offsetLeft', $this.offset().left - $('.input-group').offset().left);
  //Setting .replacer's position to that of the textbox
  $this.css({
    top: $textboxOffset.top + $padding.top,
    left: $textboxOffset.left + $padding.left
  });
  //Timeout = animation time
  setTimeout(function(){
    //Setting textbox's value to that of the .replacer
    $textbox.val($this.html());
    setTimeout(function(){
      //Hiding the .replacer
      $this.addClass('hide');
    }, 1)
  }, 300);
});

$(document).on('click', '.reset-btn', function(){
  if($('.input-group input').val() == $('.replacer').html()){
    //Revive the opacity of the .replacer
    $('.replacer').css({'opacity': '1'});
    //Timeout for letting the css rule set up
    setTimeout(function(){
      //Setting the value of input to null
      $('input').val('');
      //Removing the hide class bcoz it's no use for us now
      $('.replacer').removeClass('hide');
      $('.replacer').css({
        'opacity': 'auto'
      });
    }, 4);
    setTimeout(function(){
      //Setting absolute .replacer to its early position
      $('.replacer').css({
        'top': $('a').attr('offsetTop'),
        'left': $('a').attr('offsetLeft'),
        'position': 'absolute'
      });
  //Removing the textbox-mode and making it normal again
      $('.replacer').removeClass('textbox-mode');
    }, 10)
    setTimeout(function(){
      $('.replacer').css({
        'top': 'auto',
        'left': 'auto',
        'position': 'relative'
      });
    }, 300);
  }
  else{
    $('.replacer').css({
      'top': 'auto',
      'left': 'auto',
      'opacity': '1'
    });
    $('.replacer').removeClass('textbox-mode');
    $('.replacer').removeClass('hide');
    $('input').val('');
  }
});

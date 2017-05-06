$(document).ready(function() {
  var display = '';
  var array = [];
  var chain = '';
  var regex = /(\+|\-|\+|\*)/g;
  var regexDec = /\./g;
  var answer = 0;
  var bool = false;
  var counter=0;
  
$('button').click(function(){
  
  if(counter<24){
    $('#top').html(lyrics[counter]);
    counter+=1;
  }
  else if(counter=>24){
    counter=0;
    $('#top').html(lyrics[counter]);
  }
});
  // after answer given, calc needs to reset if a number is pressed.
  $('.number').click(function() {
    if (bool == false) {
      display += this.value;
      if (display.length > 8) {
        display = '';
        chain = '';
      }

    } else {
      bool = false;
      display = this.value;
      chain = '';
      $('#equation').html(chain);
    }
    $('#entry').html(display);
  });

  $('.operator').click(function() {
    //handling a negative number at the start
    if (array.length === 0 && this.value === "-" && display == '') {
      display = this.value;
      $('#entry').html(display);
    }

    //normal operator behavior
    //  display is something, last char in display and arr is not op 
    else if (display.length > 0 && regex.test(display[-1]) == false && regex.test(array[-1]) == false) {
      // display += this.value;
      // array.push(display);
      array.push(display);
      array.push(this.value);
      display = '';
      chain = array.join('');
      $('#entry').html('0');

      //reset if chain too long
      if (chain.length > 22) {
        chain = '';
        array = [];
      }
      $('#equation').html(chain);
    } else {
      console.log('poop');
    }
  });

  $('#equal').click(function() {
    array.push(display);
    chain = array.join('');
    answer = eval(chain);
    answer = answer.toString();
    display = answer;
    bool = true;
    if (answer < 99999999 < 8 && chain.length < 22) {

      $('#equation').html(chain);
      $('#entry').html(display.substring(0, 8));
      array = [];
      display = answer.toString();
      chain = answer.toString();
      answer = 0;
    } else {
      display = '';
      array = [];
      chain = '';
      answer = 0;
      $('#equation').html(chain);
      $('#entry').html(answer);
    }
    console.log(answer);
    console.log(chain);
    console.log(array);

  });

  $('#ac').click(function() {
    array = [];
    display = '';
    chain = '';
    answer = 0;
    $('#entry').html(answer);
    $('#equation').html(chain);
  });

  $('#ce').click(function() {
    display = '';
    $('#entry').html('0');
  });

  $('.decimal').click(function() {
   if(bool==false){
    if (regexDec.test(display) == false) {
      display += this.value;
      $('#entry').html(display);
    } else {
      console.log('poop');
    }
   }
   else{
     bool=false;
     display=this.value
     chain='';
     $('#entry').html(display);
     $('#equation').html(chain);
   }
  });
  //end document ready  
  
  var lyrics=['I\'m the operator',
'With my pocket calculator',
'I\'m the operator',
'With my pocket calculator',

'I am adding',
'And subtracting',
'I\'m controlling',
'And composing',

'I\'m the operator',
'With my pocket calculator',
'I\'m the operator',
'With my pocket calculator',

'I am adding',
'And subtracting',
'I\'m controlling',
'And composing',

'By pressing down a special key',
'It plays a little melody',
'By pressing down a special key',
'It plays a little melody',

'I\'m the operator',
'With my pocket calculator',
'I\'m the operator',
'With my pocket calculator']
});
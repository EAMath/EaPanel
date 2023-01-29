



$('input').on('change, keyup', function() {
    var currentInput = $(this).val();
    var fixedInput = currentInput.replace(/[A-Za-z!@#$%^&*()|/üğıöçş "]/g, '');
    $(this).val(fixedInput);

});



function areAllInputsFull(x) {
  return $("input").filter(function(){
    // alert($.trim($(this).val()).length + "length");
    if($.trim($(this).val()).length > 0){
      this.style.boxShadow = "inset 0 -3px 0 0 green";
      return $.trim($(this).val()).length >= 1;
    }
    else{
      this.style.boxShadow = "inset 0 -3px 0 0 red";
    }
  }).length >= x;
}

function areAllInputsFullForDouble(x) {
  return $("input").filter(function(){
    // alert($.trim($(this).val()).length + "length");
    if($.trim($(this).val()).length > 2){
      this.style.boxShadow = "inset 0 -3px 0 0 green";
      return $.trim($(this).val()).length >= 1;
    }
    else{
      this.style.boxShadow = "inset 0 -3px 0 0 red";
    }
  }).length >= x;
}


//Make inputs Blank When clicked
$("#MyNumA").click(function(){
  document.getElementById("MyNumA").value = " ";
});
$("#MyNumB").click(function(){
  document.getElementById("MyNumB").value = " ";
});
$("#MyNumC").click(function(){
  document.getElementById("MyNumC").value = " ";
});




// Footer Text Animation

// function([string1, string2],target id,[color1,color2])
 consoleText(['Made By Emir Atasoy.', 'Thanks For using Ea Biology'], 'text',['white','#eaeaea']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

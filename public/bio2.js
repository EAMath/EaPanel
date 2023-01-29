
  $(document).ready(function () {
    nextSeq();
  });


  // a cross reference of area names to text to be shown for each area
  var xref = {
      beyincik: "<b>Beyincik</b> are actually the same as green peppers, they've just been left on " +
        "the vine longer. Delicious when fire-roasted.",
      pons: "<b>Pons</b> is a fascinating vegetable. Being mostly water, it actually takes your body " +
            "more calories to process it than it provides.",
      omurilikSoganı: "<b>Omurilik Soğanı</b> are delicious and may turn your skin orange!",
      omurilik: "<b>Omurilik</b> is one of the first vegetables of the spring. " +
          "Being a dark green, it's great for you, and has interesting side effects. Being a dark green, it's great for you, and has interesting side effects. Being a dark green, it's great for you, and has interesting side effects.",
      hipotalamus: "<b>Hipotalamus</b> is a winter vegetable, and not eaten raw too much. Is that really squash?",
      hipofiz: "<b>Hipofiz</b> Similar to red peppers, <b>yellow peppers</b> are sometimes sweeter.",
      talamus: "<b>Talamus</b> are cool.",
      epitalamus: "<b>Epitalamus</b> is like a forest of goodness in your mouth. And very good for you. " +
          "Eat lots of broccoli!",
      nasırlıCisim: "<b>Nasırlı Cisim</b> Everything here is good for you but this one. <b>Don't be a dip!</b>",
      hayatUcgeni: "<b>Hayat Üçgeni</b> Everything here is good for you but this one. <b>Don't be a dip!</b>",
      frontalLob: "<b>Frontal Lob</b> are actually the same as green peppers, they've just been left on " +
        "the vine longer. Delicious when fire-roasted.",
      paryetelLob: "<b>Paryetel Lob</b> are actually the same as green peppers, they've just been left on " +
        "the vine longer. Delicious when fire-roasted.",
      oksipitalLob: "<b>Oksipital Lob</b> are actually the same as green peppers, they've just been left on " +
        "the vine longer. Delicious when fire-roasted.",

  };


  var image = $('#brain');
  var smepart;
  var truecount=0;
  var falsecount=0;
  var correctAnswerAudio = new Audio("sounds/correct.mp3");
  var wrongAnswerAudio = new Audio("sounds/wrong.mp3");



  function nextSeq(){

  var brainParts = ["beyincik", "pons", "omurilikSoganı", "omurilik", "hipotalamus", "hipofiz", "talamus", "epitalamus", "nasırlıCisim", "hayatUcgeni", "frontalLob", "paryetelLob", "oksipitalLob"];
  $("#selections").attr("style", "background-color: #67b533");

  // update text depending on area selected
  var part = random(brainParts.length, brainParts);
  if(smepart != part){
    deleteUsedOne(brainParts, part);
    smepart = part;
  }else{
    part = random(brainParts.length, brainParts);
    if(smepart != part){
      deleteUsedOne(brainParts, part);
      smepart = part;
    }
  }

  $('#selections').html("<b>"+ capitalize(part)+"</b>");
  // $("#selections").width(getTextWidth(xref[e.key]));
  // $(this).animate({});



  image.mapster({
      fillOpacity: 0.4,
      fillColor: "DADDFC",
      stroke: true,
      strokeColor: "EAEAEA",
      strokeOpacity: 0.8,
      strokeWidth: 2,
      singleSelect: true,
      mapKey: 'name',
      listKey: 'name',
      onClick: function(e) {


        falseclickedOptions = {
          fill: true,
          fillColor: 'FF1700',
          stroke: true,
          strokeColor: 'eaeaea',
          strokeWidth: 2
      };

        if(part == e.key){
          //true
          $("#selections").attr("style", "background-color: #5584AC");
          truecount++;
          correctAnswerAudio.play();
          answertrue();
        }else{
          wrongAnswerAudio.play();
          $("#selections").attr("style", "background-color: #FF1700"); falsecount++;
          setTimeout(function(){$("#selections").attr("style", "background-color: #67b533");},500);}
          $('#selectionsTF').html("<b>("+ truecount +")Doğru ("+ falsecount +")Yanlış<b>");




      },
      showToolTip: true,
      toolTipClose: ["tooltip-click", "area-click"],
      areas: [{
          key: "epitalamus",
          fillColor: "F90716"
      }, {
          key: "hayatucgeni",
          fillColor: "FFCA03"
      }, {
          key: "frontallob",
          fillColor: "98BAE7"
      }, {
          key: "hipofiz",
          fillColor: "98BAE7"
        },{
          key: "paryetellob",
          fillColor: "F3950D"
      }, {
          key: "oksipitallob",
          fillColor: "F90716"
      }]
  });

}

  function capitalize(s)
  {return s[0].toUpperCase() + s.slice(1);}

  function random(length, parts){
    var randomNumber = Math.floor(Math.random() * length);
    var sellectetPart = parts[randomNumber];
    return sellectetPart;
  }

  function deleteUsedOne(ary, prt){
    var myIndex = ary.indexOf(prt);
    if (myIndex !== -1) {ary.splice(myIndex, 1);}
  }


  var samepart;

  function nextSequence() {
    var brainParts = ["beyincik", "pons", "omurilikSoganı", "omurilik", "hipotalamus", "hipofiz", "talamus", "epitalamus", "nasırlıCisim", "hayatUcgeni", "frontalLob", "paryetelLob", "oksipitalLob"]

    $(".selections").attr("style", "background-color: #67b533");
    //get Answer random part & delete the selected one
    var part1 = random(brainParts.length, brainParts);
    if(samepart != part1){
      deleteUsedOne(brainParts, part1);
      samepart = part1;
    }else{
      part1 = random(brainParts.length, brainParts);
      if(samepart != part1){
        deleteUsedOne(brainParts, part1);
        samepart = part1;
      }
    }

    //get random part & delete the selected one
    var part2 = random(brainParts.length, brainParts);
    deleteUsedOne(brainParts, part2);
    //get random part & delete the selected one
    var part3 = random(brainParts.length, brainParts);
    deleteUsedOne(brainParts, part3);
    //get random part & delete the selected one
    var part4 = random(brainParts.length, brainParts);
    deleteUsedOne(brainParts, part4);

    //highlight the area

    $('area[name=' + part1 + ']').mapster("set", true);
    //Modify the text first letter big case


    //Set Text to selected part
    var options = ["A","B","C","D"];
    //Select random option
    var answer = random(options.length, options);
    deleteUsedOne(options, answer);
    $('#selections' + answer).html("<b>"+ answer +")"+ part1 +"</b>");
    //Select random option
    var randomOption2 = random(options.length, options);
    deleteUsedOne(options, randomOption2);
    $('#selections' + randomOption2).html("<b>"+ randomOption2 +")"+ part2 +"</b>");
    //Select random option
    var randomOption3 = random(options.length, options);
    deleteUsedOne(options, randomOption3);
    $('#selections' + randomOption3).html("<b>"+ randomOption3 +")"+ part3 +"</b>");
    //Select random option
    var randomOption4 = random(options.length, options);
    deleteUsedOne(options, randomOption4);
    $('#selections' + randomOption4).html("<b>"+ randomOption4 +")"+ part4 +"</b>");

    $(".selections").on("click", function(){

      if(answer == this.attributes["name"].value){
          $('area[name=' + part1 + ']').mapster("set", false);
          answer = "e";
          $(this).attr("style", "background-color: #5584AC");
          truecount++;
          answertrue();
      }else if(answer != "e"){answerfalse(); $(this).attr("style", "background-color: #FF1700"); falsecount++;}
          $('#selectionsTF').html("<b>("+ truecount +")Doğru ("+ falsecount +")Yanlış<b>")
    });

  }

  function answertrue(){

    setTimeout(function(){nextSeq();},500);
  }

  function answerfalse(){

  }

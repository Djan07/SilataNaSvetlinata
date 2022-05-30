
// -----------------------------------------
// PLEASE DO NOT PROMOTE (IF CONSIDERED)!
// WAITING FOR CODEPEN TO OFFER .js 
// EXTENSION SUPPORT FOR PRIVATE PENS
// ----------------------------------------- 
var orileft;
var oritop;
$('.demo.droppable-consuming-parent .pep').pep({
  droppable: '.drop-target',
  overlapFunction: false,
  useCSSTranslation: false,
  start: function(ev, obj){
    obj.noCenter = false;
     orileft= obj.$el.position().left;
      oritop = obj.$el.position().top;
  },
  drag: function(ev, obj){
    var vel = obj.velocity();
    var rot = (vel.x)/5;
    rotate(obj.$el, rot)         
  },
  stop: function(ev, obj){
    rotate(obj.$el, 0)         
  },
  rest: handleCentering
}) 

var draggedTotal=0;
function handleCentering(ev, obj){
  if ( obj.activeDropRegions.length > 0 ) { 

       
    var dataafter = $("#"+obj.$el.context.offsetParent.id).html();  
    if($("#"+obj.activeDropRegions[0].context.id).find('.pep').length == 0)
    {
        
        $( ".drags" ).children("#"+obj.$el.context.offsetParent.id ).html(""); 
        
        draggedTotal++;
        
        $("#"+obj.activeDropRegions[0].context.id).children(".col-sm-3").css("width","65%");
        $("#"+obj.activeDropRegions[0].context.id).children(".col-sm-3").css("margin","10px");
        $("#"+obj.activeDropRegions[0].context.id).children(".col-sm-3").css("margin-left","15px");
        $("#"+obj.activeDropRegions[0].context.id).children(".heading").css("padding-left","5px");
        $("#"+obj.activeDropRegions[0].context.id).children(".col-sm-3").css("padding-left"," 0px");
        $("#"+obj.activeDropRegions[0].context.id).children(".col-sm-3").css("padding-right"," 0px");
        
        $("#"+obj.activeDropRegions[0].context.id).append(dataafter);
        $("#"+obj.activeDropRegions[0].context.id).find("div.pep").css("width","98%");
        $("#"+obj.activeDropRegions[0].context.id).find("div.pep").css("left","0px");
        $("#"+obj.activeDropRegions[0].context.id).find("div.pep").css("top","0px");
        $("#"+obj.activeDropRegions[0].context.id).find("div.pep").css("position","relative");

        centerWithin(obj);
    }
    else
    {
      obj.$el.animate({ top: oritop, left: orileft }, 100);
    }
         
    
  }  
  else
  {
      obj.$el.animate({ top: oritop, left: orileft }, 100);
  } 

}

function centerWithin(obj){
  var $parent = obj.activeDropRegions[0];
  var pTop    = $parent.position().top;
  var pLeft   = $parent.position().left;
  var pHeight = $parent.outerHeight();
  var pWidth  = $parent.outerWidth();

  var oTop    = obj.$el.position().top;
  var oLeft   = obj.$el.position().left;
  var oHeight = obj.$el.outerHeight();
  var oWidth  = obj.$el.outerWidth();

  var cTop    = pTop + (pHeight/2);
  var cLeft   = pLeft + (pWidth/2);

  if ( !obj.noCenter ) {
    if ( !obj.shouldUseCSSTranslation() ) {
      var moveTop = 0;
      var moveLeft = 0;
      obj.$el.animate({ top: moveTop, left: moveLeft }, 100);
    } else{
      var moveTop   = 0;
      var moveLeft  = 0;
      obj.moveToUsingTransforms( moveTop, moveLeft );
    }
    // console.log(draggedTotal)
    if(draggedTotal == 4)
    {
      $("#Butsubmit").removeClass("disabled");
      $("#Butsubmit").css("background-color","#337ab7");
      $("#Butsubmit").css("border-color","#2e6da4");
      
    }
// console.log(moveTop + "/ " + moveLeft)
    obj.noCenter = true;
    return;
  }
  

  obj.noCenter = false;
}

function rotate($obj, deg){

}



var chances = 3;
function checkAns()
{
var correctAnswer =false;
$("#resultHead").show();
  $("#result").show();
  if($('#div1').find('#drag1').length !== 0 && $('#div2').find('#drag2').length !== 0 && $('#div3').find('#drag3').length !== 0 && $('#div4').find('#drag4').length !== 0)
  {
    $("#resultHead").html("Резултат:");
         $("#result").html("Correct.");
         correctAnswer=true;
  }
  else
  {

    chances--;
    $("#resultHead").html("Резултат:");
    $("#result").html("Incorrect.");
    $("#chances").html("Оставащи опити : <b>"+chances+"</b>");
    //console.log(chances);
    $("#Butsubmit").addClass("disabled");
      $("#Butsubmit").css("background-color","#cccccc");
      $("#Butsubmit").css("border-color","#999999");

    $("#Butreset").removeClass("disabled");
    $("#Butreset").show();

      $("#Butreset").css("background-color","#337ab7");
      $("#Butreset").css("border-color","#2e6da4");
      $("#result").html("Грешка! Натисни нулиране, за да продължиш.");
      // alert("Incorrect! Please click reset to continue.");
  }

 if(chances == 0)
  {
     $("#resultHead").html("Грешка");
     $("#showAns").show();
       $("#Butreset").addClass("disabled");
      $("#Butreset").css("background-color","#cccccc");
      $("#Butreset").css("border-color","#999999");
  }
 
  if(correctAnswer == true)
  {
    $("#resultHead").html("Резултат:");
    $("#result").html("Поздравления!");
    // alert("Congratulations! You passed the Test.");
  }
}

function showAns()
{
        $("#showAns").addClass("disabled");
      $("#showAns").css("background-color","#cccccc");
      
      $("#result").html("Това са верните отговори.");
   
      $("#wrap").html();
      $("#wrap").html("<div class='row'><div class='col-sm-2 col-xs-2'><div id='div1' class='drop-target lt well'><span class='drag-column-header'><h2 class='heading'>АКО НАСОЧИМ УСПОРЕДЕН СНОП СВЕТЛИНА КЪМ ИЗПЪКНАЛО СФЕРИЧНО ОГЛЕДАЛО, СЛЕД ОТРАЖЕНИЕ ОТ ОГЛЕДАЛОТО СНОПЪТ СТАВА:</h2></span><div id='drag1' class='pep pep-active pep-ease' style='user-select: none; margin: 0px; position: relative; top: 0px; left: 0px; perspective: 1000px; backface-visibility: hidden; transition: all 100ms cubic-bezier(0.19, 1, 0.22, 1) 0s; width: 100%;'>Разходящ</div></div></div><div class='col-sm-2 col-xs-2'><div id='div2' class='drop-target lt well'><span class='drag-column-header'><h2 class='heading'>КАКВО ОГЛЕДАЛО ЩЕ ИЗПОЛЗВАТЕ, ЗА ДА ФОКУСИРАТЕ УСПОРЕДЕН СНОП СВЕТЛИНА В ЕДНА ТОЧКА?</h2></span><div id='drag2' class='pep pep-active pep-ease' style='user-select: none; margin: 0px; position: relative; top: 0px; left: 0px; perspective: 1000px; backface-visibility: hidden; transition: all 100ms cubic-bezier(0.19, 1, 0.22, 1) 0s; width: 100%;'>Вдлъбнато огледало</div></div></div><div class='col-sm-2 col-xs-2'><div id='div3' class='drop-target lt well'><span class='drag-column-header'><h2 class='heading'>ОТ КАКВО ОГЛЕДАЛО ВИНАГИ СЕ ПОЛУЧАВА УМАЛЕН НЕДЕЙСТВИТЕЛЕН ОБРАЗ?</h2></span><div id='drag3' class='pep pep-active pep-ease' style='user-select: none; margin: 0px; position: relative; top: 0px; left: 0px; perspective: 1000px; backface-visibility: hidden; transition: all 100ms cubic-bezier(0.19, 1, 0.22, 1) 0s; width: 100%;'>Изпъкнало огледало</div></div></div><div class='col-sm-2 col-xs-2'><div id='div4' class='drop-target lt well pep-dpa'><span class='drag-column-header'><h2 class='heading'>АКО НАСОЧИМ УСПОРЕДЕН СНОП СВЕТЛИНА КЪМ ВДЛЪБНАТО СФЕРИЧНО      ОГЛЕДАЛО, СЛЕД ОТРАЖЕНИЕ ОТ ОГЛЕДАЛОТО СНОПЪТ СТАВА:</h2></span><div id='drag4' class='pep pep-active pep-ease' style='user-select: none; margin: 0px; position: relative; top: 0px; left: 0px; perspective: 1000px; backface-visibility: hidden; transition: all 100ms cubic-bezier(0.19, 1, 0.22, 1) 0s; width: 100%;'>Сходящ</div></div></div><div class='col-sm-2 col-xs-2'></div></div>");
}

function reset()
{
  $("#resultHead").hide();
  $("#result").hide();
   if(chances == 0)
   {
    // alert("Please reload the page to try again!");
   }
   else
   {
        draggedTotal=0;
    $("#wrap").html();
      $("#wrap").html("<div class='row'><div class='col-sm-2 col-xs-2'><div id='div1' class='drop-target lt well'><span class='drag-column-header'><h2 class='heading'>АКО НАСОЧИМ УСПОРЕДЕН СНОП СВЕТЛИНА КЪМ ИЗПЪКНАЛО СФЕРИЧНО ОГЛЕДАЛО, СЛЕД ОТРАЖЕНИЕ ОТ ОГЛЕДАЛОТО СНОПЪТ СТАВА:</h2></span></div></div><div class='col-sm-2 col-xs-2'><div id='div2' class='drop-target lt well'><span class='drag-column-header'><h2 class='heading'>КАКВО ОГЛЕДАЛО ЩЕ ИЗПОЛЗВАТЕ, ЗА ДА ФОКУСИРАТЕ УСПОРЕДЕН СНОП СВЕТЛИНА В ЕДНА ТОЧКА?</h2></span></div></div><div class='col-sm-2 col-xs-2'><div id='div3' class='drop-target lt well'><span class='drag-column-header'><h2 class='heading'>ОТ КАКВО ОГЛЕДАЛО ВИНАГИ СЕ ПОЛУЧАВА УМАЛЕН НЕДЕЙСТВИТЕЛЕН ОБРАЗ?</h2></span></div></div><div class='col-sm-2 col-xs-2'><div id='div4' class='drop-target lt well'><span class='drag-column-header'><h2 class='heading'>АКО НАСОЧИМ УСПОРЕДЕН СНОП СВЕТЛИНА КЪМ ВДЛЪБНАТО СФЕРИЧНО ОГЛЕДАЛО, СЛЕД ОТРАЖЕНИЕ ОТ ОГЛЕДАЛОТО СНОПЪТ СТАВА:</h2></span></div></div><div class='col-sm-2 col-xs-2'></div></div><div class='row drags'><div class='col-sm-2 col-xs-2'></div><div id='drag1' class='col-sm-2 col-xs-2'><div id='drag1' class='pep' >Разходящ</div></div><div id='drag2' class='col-sm-2 col-xs-2'><div id='drag2' class='pep' >Вдлъбнато огледало</div></div><div id='drag3' class='col-sm-2 col-xs-2'><div id='drag3' class='pep' >Изпъкнало огледало</div></div><div id='drag4' class='col-sm-2 col-xs-2'><div id='drag4' class='pep' >Сходящ</div></div><div class='col-sm-2 col-xs-2'></div></div>");


      $("#Butreset").addClass("disabled");
      $("#Butreset").css("background-color","#cccccc");
      $("#Butreset").css("border-color","#999999");
      $("#Butreset").hide();

$('.demo.droppable-consuming-parent .pep').pep({
  droppable: '.drop-target',
  overlapFunction: false,
  useCSSTranslation: false,
  start: function(ev, obj){
    obj.noCenter = false;
     orileft= obj.$el.position().left;
      oritop = obj.$el.position().top;
  },
  drag: function(ev, obj){
    var vel = obj.velocity();
    var rot = (vel.x)/5;
    rotate(obj.$el, rot)         
  },
  stop: function(ev, obj){
    rotate(obj.$el, 0)         
  },
  rest: handleCentering
}) 
   }

}

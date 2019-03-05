$(document).ready(function(){
	//发生事件冒泡，点击btn2 button1的事件也被触发。
  	// $("button").click(function(){
  	// 	$("p").hide();
  	// });
  	$(".button1").click(function(){
  		$('.item2').toggle(1000);
  	});
  	$(".button2").click(function(){
  		$('#item3').hide();
  	});
    $(".button3").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle(3000);
      $("#div3").fadeToggle("fast");
    })
    $(".button4").click(function(){
      $("#div1").fadeTo(1000,0.6);
      $("#div2").fadeTo(1000,0.6);
      $("#div3").fadeTo(1000,0.6);
    })
    $("#flip").click(function(){
      $("#panel").slideToggle();
    })
 });
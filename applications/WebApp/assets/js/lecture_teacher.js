$(function(){
document.getElementById('hideButton').addEventListener(
  'click', function() {
  	console.log("hello world");
    document.getElementById("leftSide").classList.toggle('open-right');
    document.getElementById("feedList").classList.toggle('hide');
  });
});
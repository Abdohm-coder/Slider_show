var i = 0;
var slidesImage = ["img.png","img1.jpg"];

var slideShow = function(){
  document.sliderShow.src = slidesImage[i];
  if(i < slidesImage.length -1){
    i++;
  }else{
    i = 0;
  }
   setTimeout("slideShow()",2000);
}
slideShow();

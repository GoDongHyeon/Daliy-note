
Newimg = new Array(
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg'
);
  var imgNum = 0;
  var lock = false;
  var run;
  var imagePath = 'img/';
  var imgLength = Newimg.length - 1;
  var delay = 2000;

function chgimg(n){
  if(document.images){
    imgNum = imgNum + n;
    if(imgNum > imgLength){imgNum = 0;}
    if(imgNum < 0){imgNum = imgLength;}
    document.slideshow.src = imagePath+Newimg[imgNum];
  }//if End

  var dots = document.getElementsByClassName('dot');
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[imgNum].className += ' active';
}//function chgimg End

function auto(){
  if(lock == true){
    lock = false;
    window.clearInterval(run);
  }else if(lock == false){
    lock = true;
    run = setInterval('chgimg(1)', delay);
  }
}

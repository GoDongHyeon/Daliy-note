
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
  var chgbtn = document.getElementsByTagName('button');
  auto();

function chgimg(n) {
  if(document.images) {
    imgNum = imgNum + n;
    if(imgNum > imgLength) {imgNum = 0;}
    if(imgNum < 0) {imgNum = imgLength;}
    document.slideshow.src = imagePath+Newimg[imgNum];
  }//if End
    var dots = document.getElementsByClassName('dot');
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[imgNum].className += ' active';
}//chgimg function chgimg End


//dots 클릭시 해당 이미지로 넘어가는 기능
function index(n) {
  if(document.images){
    imgNum = n-1;
    if(imgNum > imgLength) {imgNum = 0;}
    if(imgNum < 0) {imgNum = imgLength;}
    document.slideshow.src = imagePath+Newimg[imgNum];
  }//if End

    var dots = document.getElementsByClassName('dot');
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[imgNum].className += ' active';

    lock = false;
    clearInterval(run);
    chgbtn[0].innerHTML = "Auto";
}//Index function chgimg End


//자동 넘김 시작/정지 function
function auto() {
  if(lock == true){
    lock = false;
    clearInterval(run);
    chgbtn[0].innerHTML = "Auto";
  } else if(lock == false) {
    lock = true;
    run = setInterval('chgimg(1)', delay);
    chgbtn[0].innerHTML = "Stop";
  }
}

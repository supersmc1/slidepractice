const arrowleft = document.querySelector('.arrowleft')
const arrowright = document.querySelector('.arrowright')

const slideimgbox = document.querySelector('.slideimgbox')
const slideimg = document.querySelectorAll('.slideimgbox li')

let i = 0
let count = slideimg.length
slideWidth = 50
console.log(count)

console.log(slideimg)

makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); 
//슬라이드 넓이와 위치값 초기화 함수
function makeClone() {
  let cloneSlide_first = slideimg[0].cloneNode(true);
  let cloneSlide_last = slideimgbox.lastElementChild.cloneNode(true);
  slideimgbox.append(cloneSlide_first);
  slideimgbox.insertBefore(cloneSlide_last, slideimgbox.firstElementChild);
}
function initfunction() {
  slideimgbox.style.width = slideWidth * (count + 2) + 'vw';
  slideimgbox.style.left = - slideWidth + 'vw';
}


arrowright.addEventListener('click',function(){
  if(i <= count -1 ){
    console.log('hello')
  slideimgbox.style.left =  -(i + 2) * slideWidth + 'vw';
  }
  if (i === count - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slideimgbox.style.left = - slideWidth + 'vw';
      slideimgbox.style.transition = `${0}s ease-out`;
    }, 500);
    i = -1;
  }
  i += 1;
})

arrowleft.addEventListener('click', function () {
  //이전 버튼 눌렀을때
  console.log(i);
  if (i >= 0) {
    slideimgbox.style.left = -i * slideWidth + 'vw';
    slideimgbox.style.transition = `${0.5}s ease-out`;
  }
  if (i === 0) {
    setTimeout(function () {
      slideimgbox.style.left = - count * slideWidth + 'vw';
      slideimgbox.style.transition = `${0}s ease-out`;
    }, 500);
    i = count;
  }
  i -= 1;
});

const arrowleft = document.querySelector('.arrowleft') //변수지정 왼쪽 꺽쇠
const arrowright = document.querySelector('.arrowright')//변수지정 오른쪽꺽쇠

const slideimgbox = document.querySelector('.slideimgbox')//변수지정 슬라이드 박스
const slideimg = document.querySelectorAll('.slideimgbox li')
const slideimgs = [slideimg[0],slideimg[1],slideimg[2],slideimg[3]]
console.log(slideimgs)
//배열메소드 테스트


let i = 0
let count = slideimgs.length //카운트 슬라이드 이미지 총길이값
let slidewidth = 50 //이미지 위스값

//콘솔로 확인해보자
console.log(slideimgs)
//배열메소드 테스트
console.log(arrowleft)
console.log(arrowright)
console.log(slideimgbox)
console.log(slideimg)

arrowright.addEventListener('click',function(){
  slideimgbox.style.left = - slidewidth + 'vw'
})
//확인 완료

//무한슬라이드 를위해서는 복제하는 트릭이 필요하다 
//복제하는 클론노드 펑션을 이용해보자



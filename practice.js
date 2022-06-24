const arrowleft = document.querySelector('.arrowleft') //변수지정 왼쪽 꺽쇠
const arrowright = document.querySelector('.arrowright')//변수지정 오른쪽꺽쇠

const slideimgbox = document.querySelector('.slideimgbox')//변수지정 슬라이드 박스
const slideimg = document.querySelectorAll('.slideimgbox li')
const slideimgs = [slideimg[0],slideimg[1],slideimg[2],slideimg[3]]
slideimgs.push(slideimg[0])
console.log(slideimgs)



let i = 0
let count = slideimg.length //카운트 슬라이드 이미지 총길이값
slidewidth = 50 //이미지 위스값

//콘솔로 확인해보자

console.log(arrowleft)
console.log(arrowright)
console.log(slideimgbox)
console.log(slideimg)

//확인 완료

//무한슬라이드 를위해서는 복제하는 트릭이 필요하다 
//복제하는 클론노드 펑션을 이용해보자

function makeboonsin(){
  let firstboonsin = slideimg[0].cloneNode(true) // 첫번쨰 이미지를 복제
  let lastboonsin = slideimgbox.lastElementChild.cloneNode(true) // 마지막 이미지 복제
  slideimgbox.append(firstboonsin) //슬라이드 박스에  처음이미지 를 복제한다
  slideimgbox.insertBefore(lastboonsin, slideimgbox.firstChild);//슬라이드 박스에 맨마지막 복제한 녀석을 첫번째 이미지 앞으로 이동하여 복제한다
}



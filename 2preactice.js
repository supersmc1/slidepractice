let pokemon = ['피카츄','라이츄','파이리','꼬부기','버터풀']
pokemon.push('피카츄')
pokemon.unshift('버터풀')
console.log(pokemon)
setInterval(function(){
  let i = -1
  let q = 6
  let timer = setInterval(function(){
    if( i < q){
      i++
      console.log(pokemon[i])
    }else{
      clearInterval(timer)
    }
  },1000)
},10000)

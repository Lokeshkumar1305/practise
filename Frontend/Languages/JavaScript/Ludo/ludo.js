 let total=[]
function randomp1(){
    let total1= document.getElementById('total')
    
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('random')
  ran.innerHTML=`${ num}`
  total.push(num)
  console.log(total)
  total1.innerHTML=total
  
}

let total2=[]
function randomp2(){
    let total3= document.getElementById('total2')
    
   let num2= Math.floor(Math.random()*6+1)
  let ran2= document.getElementById('random2')
  ran2.innerHTML=`${ num2}`
  total2.push(num2)
  console.log(total2)
  total3.innerHTML=total2

}
if(total>total2){
  document.querySelector('h1').innerHTML="player1 won :)";
}else if (total<total2){
  document.querySelector('h1').innerHTML="player2 won :)";
}else{
  document.querySelector('h1').iinerHTML="draw";
}


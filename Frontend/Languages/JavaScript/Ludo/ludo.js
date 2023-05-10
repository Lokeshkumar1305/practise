 let totalp1=[]
 let totalp2=[]
 let winner=document.getElementbyId("winnerAnnounce")
function randomp1(){
    let total1= document.getElementById('totalp1')
    
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('randomp1')
  ran.innerHTML=`${ num}`
  totalp1.push(num)
 /* let scoreP1=totalp1.reduce((a,b)=>a+b) */
  total1.innerHTML=scoreP1
  if(scoreP1>=50){
    winner.innerHTML="winner player1"
  }

  
}


function randomp2(){
    let total2= document.getElementById('totalp2')
    
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('randomp2')
  ran.innerHTML=`${ num}`
  totalp2.push(num)
  let scoreP2=totalp2.reduce((a,b)=>a+b)
  total2.innerHTML=scoreP2
  
  if(scoreP2>=50){
    winner.innerHTML="winnerplayer2"

}
}


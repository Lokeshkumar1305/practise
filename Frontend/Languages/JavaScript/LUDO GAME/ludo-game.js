let player1 = ['p1']
let current_player1 = 'p1'
let dies1 = {}
let winner_points = '50'

const start = ()=>{
    current_player1 = 'p1'
    dies1 = {}

    player1.forEach((player)=>{
        dies1[player] = []
    })
}

start()

let die1 = document.getElementById('die1')
die1.addEventListener('click',()=>{

    for(i=0; i<player1.length; i++){
        if (player1[i]==current_player1){

            roll1( document.getElementById(player1[i]) )

            if(i+1 == player1.length){
                current_player1 = player1[0]
            }
            else{
                current_player1 = player1[i+1]
            }

            break
        }
    }

})

const roll1 = (player)=>{

    let num= Math.floor(Math.random()*6+1)
    die1.textContent = num

    dies1[player.id].push(num)

    let total = dies1[player.id].reduce((sum,n)=>{
        return sum+n
    })

    if (total >= winner_points){
        setTimeout(()=>{
            player.innerHTML=total
            document.getElementById('winner_display').innerHTML = '<h1>'+'PLAYER '+(player.id).slice(1)+'</h1>'
            die1.style.display = 'none'
            document.getElementById('reset1').style.display = 'block'
        },1500)
    }
    else{
        setTimeout(()=>{
            die1.innerHTML = '<h2><i class="fa fa-cube"></i></h2>NEXT'
            player.innerHTML=total

            player1.forEach((player)=>{
                document.getElementById('name_'+player)
            })
            document.getElementById('name_'+current_player1)      
        },1500)
    }
}

const reset1 = ()=>{

    player1.forEach((player)=>{
        document.getElementById('name_'+player)
    })
    document.getElementById('name_p1')

    document.getElementById('winner_display').innerHTML = ''

    player1.forEach((player)=>{
        document.getElementById(player).innerHTML = '0'
    })

    die1.style.display = 'block'
    die1.innerHTML = '<h2><i class="fa fa-cube"></i></h2>ROLL'
    document.getElementById('reset1').style.display = 'none'

    start()
} 

let player2 = ['p2']
let current_player2 = 'p2'
let dies2= {}
let winner_point = '50'

const starts = ()=>{
    current_player2 = 'p2'
    dies2= {}

    player2.forEach((players)=>{
        dies2[players] = []
    })
}

starts()

let die2 = document.getElementById('die2')
die2.addEventListener('click',()=>{

    for(i=0; i<player2.length; i++){
        if (player2[i]==current_player2){

            roll2( document.getElementById(player2[i]) )

            if(i+1 == player2.length){
                current_player2 = player2[0]
            }
            else{
                current_player2 = player2[i+1]
            }

            break
        }
    }

})

const roll2 = (players)=>{

    let num= Math.floor(Math.random()*6+1)
    die2.textContent = num

    dies2[players.id].push(num)

    let total = dies2[players.id].reduce((sum,n)=>{
        return sum+n
    })

    if (total >= winner_point){
        setTimeout(()=>{
            players.innerHTML=total
            document.getElementById('winner_display').innerHTML = '<h1>'+'PLAYER '+(players.id).slice(1)+'</h1>'
            die1.style.display = 'none'
            document.getElementById('reset2').style.display = 'block'
        },1500)
    }
    else{
        setTimeout(()=>{
            die2.innerHTML = '<h2><i class="fa fa-cube"></i></h2>NEXT'
            players.innerHTML=total

            player2.forEach((players)=>{
                document.getElementById('name2_'+players)
            })
            document.getElementById('name2_'+current_player2)      
        },1500)
    }
}

const reset2 = ()=>{

    player2.forEach((players)=>{
        document.getElementById('name2kk_'+players)
    })
    document.getElementById('name_p2')

    document.getElementById('winner_display').innerHTML = ''

    player2.forEach((players)=>{
        document.getElementById(players).innerHTML = '0'
    })

    die2.style.display = 'block'
    die2.innerHTML = '<h2><i class="fa fa-cube"></i></h2>ROLL'
    document.getElementById('reset2').style.display = 'none'

    starts()
} 


let startButton = document.querySelector('#start_button');
startButton.addEventListener('click',startPlay);


function startPlay() {
    console.log('Start play');
    let score= document.querySelector('#counter');
    
    score.textContent=0;
    
    const fun = setInterval(play,1*1000);
    setTimeout(function () {
        clearInterval(fun);
        alert('Tiempo!')
    }, 30*1000);
    
}

function play (){
    
    let number = Math.floor(Math.random()*12+1);
    let circles = document.querySelectorAll('.mol__div');
    circles[number-1].classList.add('out');
    circles[number-1].addEventListener('click',function(){
        if(this.className.includes('out')){
            let n = document.querySelector('#counter');
            let score= Number(n.textContent);
            score+=1;
            n.textContent=score;
        } ;
    })
    setTimeout(function(){
        circles[number-1].classList.remove('out') ;
    },.7*1000);
    
}


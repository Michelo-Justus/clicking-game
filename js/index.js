let counter=0;

function count(){
    document.querySelector('button').innerHTML="Click Again";
    document.querySelector('h1').innerHTML=counter++;
    if (counter>0){
        document.querySelector('button').innerHTML="Click Faster!";
    }
}
function disable(){
    document.getElementById('btn').disabled = true;
    document.querySelector('button').innerHTML="Game Over";
    btn.style.backgroundColor = 'grey';
}

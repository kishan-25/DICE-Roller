function rollDie()
{
    const die=document.getElementById('die');
    const resultDisplay=document.getElementById('result');

    die.classList.add('rolling');
    setTimeout(()=>{
        const result=Math.floor(Math.random()*6)+1;
        die.innerText=result;
        resultDisplay.innerText=`Result: ${result}`;
        die.classList.remove('rolling');
    },1000);
}
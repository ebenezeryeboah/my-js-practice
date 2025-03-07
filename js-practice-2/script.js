const butt = document.getElementById('button')
let num = document.getElementById('num')


butt.addEventListener('click', function(){

    let newNum = parseInt(num.innerText) || 0
    newNum+=1
    num.innerText = newNum
})
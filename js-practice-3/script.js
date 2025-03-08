const butt = document.querySelector('#butt')


let num = document.querySelector('#num')

butt.addEventListener('click', function () {
    let firstNum = parseInt(num.value) || 0
    firstNum += 1
    num.value = firstNum


})
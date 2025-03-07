const but = document.getElementById('butt');

but.addEventListener('click', function () {
    let numberChange = document.getElementById('change'); // Get the paragraph element
    let newNum = parseInt(numberChange.innerText) || 0; // Use innerText instead of value
    newNum += 1;
    numberChange.innerText = newNum; // Update the text content of the <p> tag
});

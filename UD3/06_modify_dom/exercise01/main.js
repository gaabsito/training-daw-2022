window.onload = function(e) {
    console.log('documento cargado');

    const secondH2 = document.getElementsByTagName('h2')[1]; 
    secondH2.innerText = 'Nuevo título del segundo H2'; 

    const usernameInput = document.getElementById('username');
    console.log(usernameInput); 

    const firstParagraphs = document.querySelectorAll('article .first');
    firstParagraphs.forEach(p => {
        p.style.color = 'blue';
    });

    const listItems = document.querySelectorAll('li.item');
    listItems.forEach(item => {
        console.log(item); 
    });

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        console.log(button); 
    });

    const firstParagraph = document.querySelector('p');
    firstParagraph.style.backgroundColor = 'lightyellow'; 

    buttons.forEach(button => {
        button.style.color = 'white';
    });
};

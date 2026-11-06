
// esercizio 1 //

function modTitle() {
    const newTitle = document.querySelector('#page-title');
    newTitle.textContent = 'Benvenuti all\'Atelier du Parfum';
}

// esercizio 2 //

function changeBackgroundColor() {
    const newBackgroundColor = document.querySelector('body');
    newBackgroundColor.style.backgroundColor = 'lightblue';
}

// esercizio 3 //

function changeFooterAddress() {
    const footerAddress = document.querySelector('footer p');
    footerAddress.textContent = 'viva i biscotti';
}

// esercizio 4 //

function modToAmazonLinks() {
    const amazonLinks = document.querySelectorAll('a[target="_blank"]');
    amazonLinks.forEach(link => {
        link.textContent = 'Acquista su Amazon';
        link.style.textDecoration = 'none';
        link.style.color = 'red';
    })

};

// esercizio 5 //

function toggleImageVisibility() {
    const modImage = document.querySelectorAll('img');
    modImage.forEach(image => {
        image.style.display = 'none';
    })
}

// esercizio 6 //

function modPriceColor() {
    const priceElements = document.querySelectorAll('.price');
    priceElements.forEach(price => {
        price.style.color = 'blue';
    })
}

// extra exercise: reset all changes //

function ResetAll() {
    const newTitle = document.querySelector('#page-title');
    if (newTitle.textContent !== 'Atelier du Parfum') {
        newTitle.textContent = 'Atelier du Parfum';
    }
    const newBackgroundColor = document.querySelector('body');
    if (newBackgroundColor.style.backgroundColor !== '') {
        newBackgroundColor.style.backgroundColor = '';
    }
    const footerAddress = document.querySelector('footer p');
    if (footerAddress.textContent !== '© 2024 Atelier du Parfum. Via del Parfum, 123 - 12345 Città della Profumeria') {
        footerAddress.textContent = '© 2024 Atelier du Parfum. Via del Parfum, 123 - 12345 Città della Profumeria';
    }
    const amazonLinks = document.querySelectorAll('a[target="_blank"]');
    amazonLinks.forEach(link => {
        if (link.textContent !== 'Acquista ora') {
            link.textContent = 'Acquista ora';
            link.style.textDecoration = '';
            link.style.color = '';
        }
    });
    const priceElements = document.querySelectorAll('.price');
    priceElements.forEach(price => {
        if (price.style.color !== '') {
            price.style.color = '';
        }
    });
    const modImage = document.querySelectorAll('img');
    modImage.forEach(image => {
        if (image.style.display !== '') {
            image.style.display = '';
        }
    });
}

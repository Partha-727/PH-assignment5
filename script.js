// document.getElementById('heart-icon')
// .addEventListener('click', function(){
//     const heartElement = document.getElementById('heart-number')
//     const heart =parseInt(heartElement.innerText);
//     const heartNumber = heart + 1;
//     heartElement.innerText = heartNumber; 
// })

// Select all hearts
document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const heartElement = document.getElementById('heart-number');
        const heart = parseInt(heartElement.innerText) || 0;
        heartElement.innerText = heart + 1;
    });
});

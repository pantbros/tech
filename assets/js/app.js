let Btn = document.getElementById('closeBtn');
let offerStrip = document.querySelector('.offer-strip');


Btn.addEventListener('click', function () {
    offerStrip.classList.add('d-none');
});



{
    let logBtn = document.getElementById('logs');
    let logIdContainer = document.getElementById('logId');

    logBtn.addEventListener('click', function () {
        logIdContainer.classList.toggle('d-none');
    });
}
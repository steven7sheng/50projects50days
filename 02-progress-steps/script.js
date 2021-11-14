let actived = 1;
const CIRCLE_COUNT = 4;

const circles = document.querySelectorAll('.circle');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const progress = document.querySelector('#progress');

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', function (event) {
        const id = event.target.id;
        if (id === 'next' && actived < CIRCLE_COUNT) {
            actived++;
            circles[actived - 1].classList.add('active');
            event.target.disabled = (actived === CIRCLE_COUNT);
            btnPrev.disabled = false;
        } else if (id === 'prev' && actived > 1) {
            circles[actived - 1].classList.remove('active');
            actived--;
            event.target.disabled = (actived === 1);
            btnNext.disabled = false;
        }
        progress.style.width = (100 / (CIRCLE_COUNT - 1) * (actived - 1)).toFixed(2) + '%';
    });
});

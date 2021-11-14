let percent = 0;
document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', function (event) {
        const id = event.target.id;
        if (id === 'next' && percent < 3) {
            percent++;
            document.querySelectorAll('.circle')[percent].classList.add('active');
        } else if (id === 'prev' && percent > 0) {
            document.querySelectorAll('.circle')[percent].classList.remove('active');
            percent--;
        }
        document.querySelector('#progress').style.width = (33.33 * percent).toFixed(2) + '%';
    });
});

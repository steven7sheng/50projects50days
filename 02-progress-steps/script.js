let percent = 0;
document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', function (event) {
        const id = event.target.id;
        if (id === 'next' && percent < 3) {
            percent++
        } else if (id === 'prev' && percent > 0) {
            percent--;
        }
        console.log(percent);
        document.querySelector('#progress').style.width = (33.33 * percent).toFixed(2) + '%';
    });
});

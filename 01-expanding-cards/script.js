document.querySelector('.panel').onclick = function (event) {
    var panel = event.target;
    panel.classList.remove('active');
    panel.classList.add('active');
};



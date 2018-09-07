document.addEventListener('DOMContentLoaded', function () {


    var nextBtn = document.getElementById('nextPicture');

    var prevBtn = document.getElementById('prevPicture');

    var allList = document.querySelectorAll('.slider li');

    var indexImg = 0;

    allList[indexImg].classList.add('visible');

    nextBtn.addEventListener('click', function () {
        if (indexImg >= allList.length - 1) {
            indexImg = allList.length - 1;
        } else {
            allList[indexImg].classList.remove('visible');
            indexImg++;
            allList[indexImg].classList.add('visible');
        }
    });

    prevBtn.addEventListener('click', function () {
        if (indexImg <= 0) {
            indexImg = 0;
        } else {
            allList[indexImg].classList.remove('visible');
            indexImg--;
            allList[indexImg].classList.add('visible');
        }
    });

});
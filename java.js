const carouselSlide = document.querySelector('.carousel-slide');
        const images = document.querySelectorAll('.carousel-image');
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');
        const indicatorContainer = document.querySelector('.indicator-container');
        const closeBtn = document.querySelector('button');

        
        let counter = 0;
        const size = images[0].clientWidth;
        let autoPlay = true;
       let interval = setInterval(autoSlide, 3000);

        // 初始化指示器
        images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if(index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => jumpToSlide(index));
            indicatorContainer.appendChild(indicator);
        });

        // 自動輪播
        function autoSlide() {
            if(counter >= images.length - 1) {
                counter = -1;
            }
            counter++;
            updateSlide();
        }

        // 更新輪播位置和指示器
        function updateSlide() {
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
            document.querySelectorAll('.indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === counter);
            });
        }

        // 手動切換
        nextBtn.addEventListener('click', () => {
            counter = counter >= images.length - 1 ? 0 : counter + 1;
            resetInterval();
            updateSlide();
        });
 // 跳轉到指定幻燈片
 function jumpToSlide(index) {
    counter = index;
    resetInterval();
    updateSlide();
}

// 重置自動播放間隔
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000);
}

// 鼠標懸停暫停
carouselSlide.addEventListener('mouseover', () => {
    autoPlay = false;
    clearInterval(interval);
});

carouselSlide.addEventListener('mouseleave', () => {
    autoPlay = true;
    resetInterval();
});


function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

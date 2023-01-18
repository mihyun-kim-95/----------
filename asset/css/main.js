//언어 선택 
$('.btn-go').click(function(e){
    e.preventDefault();
    url = $('#language').val();
    window.open(url);
})

//메인슬라이드 타이틀 선택 
$('.sc-visual .title').click(function(e){
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active')

    if ($(this).parent().hasClass('.slide1')) {
        //주요뉴스
        slide1.autoplay.start();
        slide2.autoplay.stop();
    } else {
        //시민참여
        slide1.autoplay.stop();
        slide2.autoplay.start();
    }
})

//주요뉴스 스와이퍼
const slide1 = new Swiper(".slide1 .swiper", {
    loop: true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".slide1 .fraction",
        type: "fraction",
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

//시민참여 스와이퍼
const slide2 = new Swiper(".slide2 .swiper", {
    loop: true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".slide2 .fraction",
        type: "fraction",
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});
slide2.autoplay.stop();


//주요뉴스 자동재생
$('.slide1 .autoplay').click(function(e){
    e.preventDefault();

      // 클릭하려고 하는데 혹시 오토플레이가 있나요?
    if ($(this).hasClass('on')) {
        $('.autoplay').removeClass('on').attr('aria-label','자동재생 정지');
        slide1.autoplay.start();
    } else {
        // 없어여! 
        $('.autoplay').addClass('on').attr('aria-label','자동재생 적용');
        slide1.autoplay.stop();
    }
})


//시민참여 자동재생
$('.slide2 .autoplay').click(function(e){
    e.preventDefault();

      // 클릭하려고 하는데 혹시 오토플레이가 있나요?
    if ($(this).hasClass('on')) {
        $('.autoplay').removeClass('on').attr('aria-label','자동재생 정지');
        slide2.autoplay.start();
    } else {
        // 없어여! 
        $('.autoplay').addClass('on').attr('aria-label','자동재생 적용');
        slide2.autoplay.stop();
    }
})

//하단 배너 스와이퍼
const banner = new Swiper(".sc-banner3 .swiper", {
    slidesPerView:3,
    spaceBetween:43,
    loop: true,
    autoplay:{
        delay:1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".fraction",
        type: "fraction",
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

//하단 스와이퍼 자동재생 
$('.sc-banner3 .autoplay').click(function(e){
    e.preventDefault();

      // 클릭하려고 하는데 혹시 오토플레이가 있나요?
    if ($(this).hasClass('on')) {
        $('.autoplay').removeClass('on').attr('aria-label','자동재생 정지');
        banner.autoplay.start();
    } else {
        // 없어여! 
        $('.autoplay').addClass('on').attr('aria-label','자동재생 적용');
        banner.autoplay.stop();
    }
})

//아코디언 여닫기 
$('.link-related.rotate').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')) {
        $('.link-related.rotate').removeClass('on') //전체다 제거
        $('.sub-area').stop().slideUp();
    } else {
        $('.link-related.rotate').removeClass('on') //전체다 제거
        $(this).addClass('on') //개인제거

        $('.sub-area').stop().slideUp(); //전체닫기
        $(this).siblings('.sub-area').stop().slideDown();
    }
})

//상단으로 이동 
$('.btn-top').click(function(e){
    e.preventDefault();

    // window.scrollTo({top:0,behavior:'smooth'})

    $('html,body').animate({scrollTop:0},300)
})

//상단 이동 버튼 사라지기
$(window).scroll(function(){
    current = $(this).scrollTop();

    if (current < 500) {
        $('.btn-top').fadeOut();
    } else {
        $('.btn-top').fadeIn();
    }
})

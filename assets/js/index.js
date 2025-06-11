


// --------------- GSAP 공통 효과 --------------- 
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease:"none"
})
// --------------- GSAP 공통 효과 --------------- 





// --------------- 전체 부드러운 스크롤 --------------- 
// const lenis = new Lenis({
//     duration: 2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     wrapper: document.querySelector('.lenis-wrap'),
//     content: document.querySelector('.inner-lenis'),
// })
// lenis.on('scroll', ScrollTrigger.update)
// gsap.ticker.add((time)=>{
//   lenis.raf(time * 500)
// })
// gsap.ticker.lagSmoothing(0)
// --------------- 전체 부드러운 스크롤 --------------- 





// 서비스 문의 클릭시
// $('#goContact').on('click', function (e) {
//   e.preventDefault(); 
//   const targetOffset = $('#contact').offset().top;

//   $('html, body').animate({
//     scrollTop: targetOffset
//   }, 1000); 
// });





// --------------- 메인 앨범 무한 슬라이드 --------------- 
window.addEventListener('load', () => {
  document.querySelector('.marquee01').style.animationPlayState = 'running';
  document.querySelector('.marquee02').style.animationPlayState = 'running';
});
// --------------- 메인 앨범 무한 슬라이드 --------------- 





const steps = document.querySelectorAll('.steps li');
const images = document.querySelectorAll('.preview-img');

let currentIndex = -1;

const imageTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-how',
    start: 'top top',
    end: 'bottom bottom',
    // scroller: '.lenis-wrap',
    markers: true,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress; 
      const index = Math.floor(progress * steps.length);

      if (index !== currentIndex && index < steps.length) {
        currentIndex = index;
        activateStep(index);
      }
    },
  }
});

function activateStep(index) {
  steps.forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });

  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}




const visaulTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-how',
    start: 'bottom 80%',
    end: 'bottom top', // 약 100% 스크롤 거리 확보
    scrub: true,
    markers:true,
    // scroller: '.lenis-wrap',
  }
});

// const visaulTl = gsap.timeline({
//   scrollTrigger:{
//     trigger:'.sc-video .sticky-wrapper',
//     start:"50% 0%",
//     end:"100% 100%",
//     scrub: true,
//     scroller: '.lenis-wrap',
//   },
// })
visaulTl.fromTo(
  '.sc-video',
  { autoAlpha: 0 },
  { autoAlpha: 1 },
  0 // timeline 시작 위치
);
visaulTl.fromTo(
  '.sc-video .sticky-wrapper .sticky',
  {
    padding: "84px 40px",
    zIndex: 1
  },
  {
    padding: "0px",
    zIndex: 500
  },
  0 // 같은 시간에 시작
);
visaulTl.fromTo(
  '.sc-video .video-area .content',
  {
    width: "65%",
    height: "65%",
    borderRadius: "20px",
    zIndex: 1
  },
  {
    width: "100vw",
    height: "100vh",
    borderRadius: "0px",
    zIndex: 500
  },
  0 // 같은 시간에 시작
);



// const videos = document.querySelectorAll('.sc-video .content video');
// let current = 0;

// videos.forEach((video, index) => {
//   video.classList.remove('active'); 
// });
// videos[current].classList.add('active');
// videos[current].play();

// videos.forEach((video, index) => {
//   video.addEventListener('ended', () => {
//     video.currentTime = 0;
//     video.pause();

//     current = (index + 1) % videos.length;
//     const nextVideo = videos[current];
//     nextVideo.classList.add('active');
//     nextVideo.play();
//   });
// });

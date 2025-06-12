


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






// --------------- 메인 앨범 무한 슬라이드 --------------- 
function runBubblesLoop() {
  const bubbles = document.querySelectorAll('.speech-bubble');

  // 순차적으로 .show 추가
  bubbles.forEach((bubble, index) => {
    setTimeout(() => {
      bubble.classList.add('show');
    }, index * 100);
  });

  // 3초 애니메이션 + 2초 대기 후 .show 제거
  setTimeout(() => {
    bubbles.forEach(bubble => {
      bubble.classList.remove('show');
    });

    // 2초 대기 후 재실행
    setTimeout(runBubblesLoop, 2000);
  }, 3000); // 애니메이션 지속 시간만큼 기다림
}

window.addEventListener('DOMContentLoaded', runBubblesLoop);

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




// const rewardVideo = document.getElementById('rewardVideo');

const video = document.getElementById("rewardVideo");
video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});


const visaulTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-how',
    start: 'bottom 80%',
    end: 'bottom top', // 약 100% 스크롤 거리 확보
    scrub: true,
    // scroller: '.lenis-wrap',
    onEnter: () => {
      video.currentTime = 0; 
      video.play();         
    }
  }
});
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
    width: "50%",
    height: "50%",
    borderRadius: "80px",
    zIndex: 1
  },
  {
    width: "100%",
    height: "100%",
    borderRadius: "0px",
    zIndex: 500
  },
  0 // 같은 시간에 시작
);


// gsap.to(".hero .bubble1", { duration: 3, repeat: -1, yoyo: true});
// gsap.to(".hero .bubble2", { duration: 1, scale: 1.2, repeat: -1, yoyo: true});
// gsap.to(".hero .bubble3", { duration: 3, repeat: -1, yoyo: true});
// gsap.to(".hero .ico-star", { duration: 2.5, scale: 0.5, rotate: 720, repeat: -1, yoyo: true});
// gsap.to(".hero .ico-eye", { duration: 5, rotate: 720, repeat: -1});
// gsap.to(".hero .ico-arrow", { duration: 1.5, width: '100%', repeat: -1});



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

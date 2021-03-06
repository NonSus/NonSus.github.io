const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let motion = !reducedMotion.matches; // for reduced motion fellas

let header = document.getElementById("header");

if(motion) {

    window.addEventListener("scroll", function () {
        if (window.scrollY == 0) {
            header.style = "background-color: none; backdrop-filter: none; -webkit-backdrop-filter: none height: 13vh;";
        } else {
            header.style = "background-color: rgba(0,0,0,0.4) !important; -webkit-backdrop-filter: saturate(180%) blur(20px) !important; backdrop-filter: saturate(180%) blur(20px) !important; height: 10vh;";
        }
    });

    // gsap

    let hero = document.getElementById("Hero");
    let appearFromBottom = document.getElementsByClassName("appearFromBottom");

    for (let i = 0; i < appearFromBottom.length; i++) {
        i < 2 ?

            gsap.from(appearFromBottom.item(i), {
                y: appearFromBottom.item(i).offsetHeight > 100 ? appearFromBottom.item(i).offsetHeight : 100,
                duration: 1,
                ease: "circ.out"
            })

            :

            gsap.from(appearFromBottom.item(i), {

                scrollTrigger: {
                    trigger: appearFromBottom.item(i),
                    start: "top bottom"
                },
                y: appearFromBottom.item(i).offsetHeight > 100 ? appearFromBottom.item(i).offsetHeight : 100,
                duration: 1,
                ease: "circ.out"
            })
    }

    let leftBtnMain = document.getElementById("leftBtn");
    let leftBtn = document.getElementsByClassName("leftBtn");

    if (leftBtnMain) {
        gsap.from(leftBtnMain, {
            x: -leftBtnMain.offsetWidth * 5,
            duration: 1,
            ease: "back.out(0.5)",
            onComplete: () => {
                leftBtnMain.style = "transition: all 0.25s;"
            }
        });
    }

    for (let i = 0; i < leftBtn.length; i++) {
        gsap.from(leftBtn.item(i), {
            scrollTrigger: {
                trigger: leftBtn.item(i),
                start: "top bottom"
            },
            x: -600,
            duration: 1,
            ease: "circ.out",
            onComplete: () => {
                leftBtn.item(i).style = "transition: all 0.25s;"
            }
        });
    }

    let rightBtnMain = document.getElementById("rightBtn");
    let rightBtn = document.getElementsByClassName("rightBtn");

    if (rightBtnMain) {
        gsap.from(rightBtnMain, {
            x: rightBtnMain.offsetWidth * 5,
            duration: 1,
            ease: "back.out(0.5)",
            onComplete: () => {
                rightBtnMain.style = "transition: all 0.25s;"
            }
        });
    }

    for (let i = 0; i < rightBtn.length; i++) {
        gsap.from(rightBtn.item(i), {
            scrollTrigger: {
                trigger: rightBtn.item(i),
                start: "top bottom"
            },
            x: 600,
            duration: 1,
            ease: "circ.out",
            onComplete: () => {
                rightBtn.item(i).style = "transition: all 0.25s;"
            }
        });
    }

    gsap.from(header, {
        y: 0 - header.offsetHeight,
        duration: 1,
        ease: "circ.out"
    });

    let fadeIn = document.getElementsByClassName("fadeIn");

    for (i = 0; i < fadeIn.length; i++) {
        gsap.from(fadeIn.item(i), {
            scrollTrigger: {
                trigger: fadeIn.item(i),
                start: "top bottom"
            },
            opacity: 0,
            duration: 1,
            // ease: "circ.out"
        })
    }

    let appearDown = document.getElementsByClassName("appearDown");

    for (i = 0; i < appearDown.length; i++) {
        gsap.from(appearDown.item(i), {
            scrollTrigger: {
                trigger: appearDown.item(i),
                start: "top bottom"
            },
            y: appearDown.item(i).offsetHeight > 100 ? -appearDown.item(i).offsetHeight : -250,
            opacity: 0,
            duration: 1,
            ease: "circ.out"
        })
    }

    let roadMap = document.getElementById("roadMap");
    let cards = document.getElementsByClassName("item");
    let cardsAnim = gsap.timeline({
        scrollTrigger: {
            trigger: roadMap,
            start: "top bottom"
        },
    });

    cardsAnim.from(cards.item(0), {
        y: cards.item(0).offsetHeight,
        duration: 0.3,
        ease: "circ.out",
        onComplete: () => {
            cards.item(0).classList.add("seen"); // fallback for mobile
        }
    });
    cardsAnim.from(cards.item(1), {
        y: cards.item(1).offsetHeight,
        duration: 0.3,
        ease: "circ.out",
        onComplete: () => {
            cards.item(1).classList.add("seen"); // fallback for mobile
        }
    });
    cardsAnim.from(cards.item(2), {
        y: cards.item(2).offsetHeight,
        duration: 0.3,
        ease: "circ.out",
        onComplete: () => {
            cards.item(2).classList.add("seen"); // fallback for mobile
        }
    });
    cardsAnim.from(cards.item(3), {
        y: cards.item(3).offsetHeight,
        duration: 0.3,
        ease: "circ.out",
        onComplete: () => {
            cards.item(3).classList.add("seen"); // fallback for mobile
        }
    });
    if (cards.length > 4) {
        cardsAnim.from(cards.item(4), {
            y: cards.item(4).offsetHeight,
            duration: 0.3,
            ease: "circ.out"
        });
        cardsAnim.from(cards.item(5), {
            y: cards.item(5).offsetHeight,
            duration: 0.3,
            ease: "circ.out"
        });
    }

}

// Video workaround for mobile | original: https://stackoverflow.com/questions/15090782/youtube-autoplay-not-working-on-mobile-devices-with-embedded-html5-player

// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    videoId: '5r4h_4jscDU',
    playerVars: { 'autoplay': 1, 'playsinline': 1, 'playlist': "5r4h_4jscDU", 'loop': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady
    }

  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
   event.target.mute();
  event.target.playVideo();
    document.getElementById("player").tabIndex = -1;
}
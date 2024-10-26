function loco_scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco_scroll()
gsap.to("h3",{
    x:-90,
    filter: "blur(8px)",
  
 
    scrollTrigger:{
        trigger:"h3",
        scroller:".main",

        start:"top50%",
        scrub:2
    
    }
   
})
gsap.to("h4",{
    x:90,
    filter: "blur(8px)",
 
    scrollTrigger:{
        trigger:"h3",
        scroller:".main",
      
        start:"top50%",
        scrub:1
    
    }
})
gsap.from("h3",{
    y:100,
    opacity:0
})
gsap.from("h4",{
    y:100,
    opacity:0,
    delay:.3
})
gsap.to("video",{
   
 width:"90%",
    scrollTrigger:{
        trigger:"h4",
        scroller:".main",
      
        start:"top50%",
        scrub:1
    
   }})
   
   gsap.to(".main",{
    backgroundColor:"#fff",
    
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
    
        start:"top 90%",
        end:"top 70%",
       
     
        scrub:3
    }
  })
  gsap.from(".intro",{
      y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        
        start:"top 40%",
        end:"top 35%",
        scrub:2
    }
})

  gsap.from(".ronaldo img",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",

        start:"top 05%",
        end:"top 0%",
        scrub:2
    }
})
gsap.from(".ronaldo .h5",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",

        start:"top 05%",
        end:"top 0%",
        scrub:2
    }
})
gsap.from(".messi img",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",

         start:"top 0%",
         end:"top -95%",
        scrub:2
    }
})
gsap.from(".messi .h6",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",

        start:"top 0%",
        end:"top -95%",
        scrub:2
    }
})
gsap.from(".neymar img",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",

        start:"top -80%",
        end:"top -75%",
        scrub:2
    }
})
gsap.from(".neymar .h5",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
   
        start:"top -80%",
        end:"top -75%",
        scrub:2
    }
})
gsap.from(".pele img",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
     
        start:"top -50%",
        end:"top -45%",
        scrub:2
    }
})
gsap.from(".pele .h6",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
   
        start:"top -50%",
        end:"top -45%",
        scrub:2
    }
})
gsap.from(".ronaldio img",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",

        start:"top -30%",
        end:"top -25%",
        scrub:2
    }
})
gsap.from(".ronaldio .h5",{
    y:100,
    opacity:0,
    filter:"blur (8px)",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
    
        start:"top -30%",
        end:"top -25%",
        scrub:2
    }
})

gsap.to(".page2",{
    backgroundColor:"#0F0D0D",
    
    scrollTrigger:{
        trigger:".meradona",
        scroller:".main",
    
        start:"bottom 101%",
        end:"top -98%",
   
       
     
        scrub:true
    }
  })
gsap.to(".img1",{
    backgroundColor:"#0F0D0D",
    
    scrollTrigger:{
        trigger:".meradona",
        scroller:".main",
    
        start:"bottom 100%",
        end:"top -99",
   
       
     
        scrub:true
    }
  })
  gsap.to(".meradona .h6",{
    x:-200,
 
  
 
    scrollTrigger:{
        trigger:".ronaldio img",
        scroller:".main",
        start:"top -95%",
        end:"top -85%",
       
        scrub:2
    
   } })
  gsap.to(".meradona img",{
    x:300,
 
  
 
    scrollTrigger:{
        trigger:".ronaldio img",
        scroller:".main",
        start:"top -95%",
        end:"top -85%",
        
        scrub:2
    
   } })
   let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthitems = items.length - 1;

next.onclick = function() {
    if (active + 1 > lengthitems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadslider();
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthitems;
    } else {
        active = active - 1;
    }
    reloadslider();
}

let autoslide = setInterval(() => { next.click(); }, 3000);

function reloadslider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastactiveDot = document.querySelector('.slider .dots li.active');
    if (lastactiveDot) lastactiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadslider();
    })
})
gsap.from(".vd1p1 video",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".slider",
        start:"top -80%",
        end:"top -75%",

      
        scrub:3,
    }
})


gsap.from(".vd1p2",{
   y:200,
   fliter:"blur 8px",
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".slider",
        start:"top -80%",
        end:"top -75%",

      
        scrub:3,
    }
})
gsap.from(".vd2p1 video",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".slider",
        start:"top -75%",
        end:"top -70%",

      
        scrub:3,
    }
})
gsap.from(".vd2p2",{
   y:200,
   fliter:"blur 8px",
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".slider",
        start:"bottom -80%",
        end:"bottom -70%",

      
        scrub:3,
    }
})
gsap.from(".vd3p2",{
   y:200,
   fliter:"blur 8px",
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".vd1p2",
        start:"bottom 0%",
        end:"bottom -90%",

      
        scrub:3,
    }
})
gsap.from(".vd4p2",{
   y:200,
   fliter:"blur 8px",
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".vd2p2",
        start:"bottom 0%",
        end:"bottom -90%",

      
        scrub:3,
    }
})
gsap.from(".vd4p2 video",{
   scale:0,
   fliter:"blur 8px",
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".vd2p2",
        start:"bottom 0%",
        end:"bottom -90%",

      
        scrub:3,
    }
})

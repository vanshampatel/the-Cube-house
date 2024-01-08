function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
var page1 = gsap.timeline()
page1.from("#nav a",{
    scale:3,
    opacity:0,
    delay:0.5,
    duartion:1,
    stagger:0.2
})
page1.from("#nav h4",{
    y:"-50%",
    opacity:0,
})
var text = gsap.timeline()
text.from(".text-first h1",{
    y:"100%",
    opacity:0,
    duartion:3,
    delay:1,
})
text.from(".text-second h1",{
    x:"-50%",
    opacity:0,
    duartion:3,
})
text.from(".text-third h1",{
    x:"50%",
    opacity:0,
    duartion:3,
})
gsap.to("#circle",{
  scale:1900,
  duartion:2,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 0%",
    end:"top 30%",
    scrub:2,
    pin:true,
  }
})
gsap.from(".text-page2 h1",{
  // scale:0,
  stagger:5,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 74%",
    end:"top 74%",
    scrub:2,
    pin:true,
  }
})
var page4 = gsap.timeline()
page4.from("#page4 h1",{
  y:"100%",
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 50%",
    end:"top 60%",
    scrub:1,
    pin:true,
  }
})
page4.from(".columns",{
  scale:0.3,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top 50%",
      scrub:1,
      pin:true,
  }
})
var page5 = gsap.timeline()
page5.from("#page5 h2",{
  y:"-50%",
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    //  markers:true,
    start:"top 55%",
    end:"top 55%",
    scrub:1,
    pin:true,
  }
})
page5.from(".leftbox",{
  scale:0,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
    end:"top 50%",
    scrub:2,
    pin:true,
  }
})
page5.from(".charts",{
  scale:0,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
    end:"top 50%",
    scrub:2,
    pin:true,
  }
})
gsap.to("#page6 h1",{
  transform:"translateX(-100%)",
  duration:2,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 0%",
    end:"top -100%",
    scrub:1.5,
    pin:true,
  }
})
gsap.from("#page7 h1",{
  scale:0.2,
  opacity:1,
  y:"80%",
  duration:1,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
  }
})
var page9 = gsap.timeline()
page9.from(".left-box img",{
  opacity:0,
  y:"100%",
  scale:1,
  duration:1,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    start:"top 70%",
    end:"top 75%",
    scrub:2,
  }
})
page9.from(" .right-box1, .right-box2",{
  opacity:0,
  x:"100%",
  scale:1,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    start:"top 70%",
    end:"top 75%",
    scrub:2,
  }
})
gsap.from(".page10-box",{
  y:"100%",
  opacity:0,
  scale:2,
  duration:1,
  scrollTrigger:{
    trigger:"#page10",
    scroller:"#main",
    start:"top 50%",
  }
})
gsap.from("#page11 h1, #page11 button",{
  y:"70%",
  opacity:0,
  scale:1,
  duration:1.3,
  scrollTrigger:{
    trigger:"#page11",
    scroller:"#main",
    start:"top 50%",
  }
})


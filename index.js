function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init();
// gsap.to(".page",{
//     scrollTrigger:{
//         trigger:"h1:nth-child(1)",
//         scroller:".main",
//         start:"top 20%",
//         end:"top 0%",
        
        
//         // markers:true,
        
//         scrub:3,

//     }
// })

gsap.to(".page1 h1:nth-child(1)",{
    x:-100,
    duration:1,
      scrollTrigger:{
        trigger:"h1:nth-child(1)",
        scroller:".main",
        start:"top 0%",
        end:"top 0%",
        pin:true,
        
        // markers:true,
        
        scrub:3,

    }

})
gsap.to(".page1 h1:nth-child(2)",{
    x:100,
    duration:1,
      scrollTrigger:{
        trigger:"h1:nth-child(1)",
        scroller:".main",
        start:"top 0%",
        end:"top 0%",
        pin:true,
        
        // markers:true,
        
        scrub:4,

    }

},"anim")
gsap.to("#heading ",{
    filter:"blur(10px)",
    opacity:0,
    duration:1,
      scrollTrigger:{
        trigger:"#heading",
        scroller:".main",
        start:"top 20%",
        end:"top -10%",
       
        // markers:true,
        
        
        scrub:4,

    }

},"anim")
gsap.to("#vid ",{
    // width:90+"%",
    // 
    // x:-18+"%",
    scale:1.5,
    duration:1,

    transform: "translateY(-18.1vw)",
      scrollTrigger:{
        trigger:"#heading",
        scroller:".main",
        start:"top 10%",
        end:"top -20%",
        // markers:true,
        
        scrub:3,

    }

},)
gsap.to(".page2 ",{
   
    backgroundColor:"white",

  
      scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top 0%",
        end:"top -10%",
        // markers:true,
        
        scrub:3,

    }

},)
gsap.to(".main ",{
    
    backgroundColor:"white",
    

  
      scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        start:"top -250vh",
        end:"top -300vh",
        // markers:true,
        
        scrub:1,

    }

},)
gsap.to("#imc ",{
    
    y:-130,
    

  
      scrollTrigger:{
        trigger:"#imc",
        scroller:".main",
        start:"top 100%",
        end:"top 0 ",
        // markers:true,
        
        scrub:3,

    }

},)
gsap.to("#imagecontainer ",{
    
    y:-20,
    

  
      scrollTrigger:{
        trigger:"#imc",
        scroller:".main",
        start:"top 100%",
        end:"top 0 ",
        // markers:true,
        
        scrub:3,

    }

},)


var elam=document.querySelectorAll(".elam").forEach(function(val){
    gsap.to(val.querySelectorAll("h2"),{
       opacity:1,
    //    
    
    
       scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top 0",
        end:"top 0 ",
        // markers:true,
        
        scrub:3,
       }

    })

    


});

var tl = gsap.timeline();
gsap.to("#pg3h h1",{
    
    transform: "translateY(-2vw)",
    opacity:1,
    rotate:0,
    stagger: 0.15,

  
      scrollTrigger:{
        trigger:"#pg3h",
        scroller:".main",
        start:"top 100%",
        end:"top 0 ",
        // markers:true,
        
        scrub:3,

    }

},)

tl.from(".whole",{
    transform: "translateY(10vw)",
    opacity:1,
    rotate:0,
    stagger: 0.15,

  
      scrollTrigger:{
        trigger:".whole",
        scroller:".main",
        start:"top 100%",
        end:"top 50% ",
        // markers:true,
        
        scrub:3,

    }
})

tl.from(".who",{
    transform: "translateY(10vw)",
    opacity:1,
    rotate:0,
    stagger: 0.15,

  
      scrollTrigger:{
        trigger:".who",
        scroller:".main",
        start:"top 100%",
        end:"top 50% ",
        // markers:true,
        
        scrub:3,

    }
})

tl.from(".wh",{
    transform: "translateY(10vw)",
    opacity:1,
    rotate:0,
    stagger: 0.15,

  
      scrollTrigger:{
        trigger:".wh",
        scroller:".main",
        start:"top 100%",
        end:"top 80% ",
        // markers:true,
        
        scrub:3,

    }
})

tl.from(".wholee",{
    transform: "translateY(20vw)",
    opacity:1,
    rotate:0,
    
    

  
      scrollTrigger:{
        trigger:".wholee",
        scroller:".main",
        start:"top 100%",
        end:"top 80% ",
        // markers:true,
        
        scrub:3,

    }
})

tl.from("#le h4",{
    transform: "translateY(10vw)",
    opacity:0,
    rotate:0,
    
    

  
      scrollTrigger:{
        trigger:"#le",
        scroller:".main",
        start:"top 100%",
        end:"top 80% ",
        // markers:true,
        
        scrub:3,

    }
})
tl.from("#le p",{
    
    opacity:0,
    rotate:0,
    
    

  
      scrollTrigger:{
        trigger:"#le h4",
        scroller:".main",
        start:"top 100%",
        end:"top 80% ",
        // markers:true,
        
        scrub:3,

    }
})


    







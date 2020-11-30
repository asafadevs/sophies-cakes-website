const t1 = gsap.timeline({defaults:{ease: 'power.out'}});
t1.to(".transition", {y:"-110%", duration: 1.5, delay: 1});
t1.to(".nav-menu", {y:"0%", duration: 0.5});
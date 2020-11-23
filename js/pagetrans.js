const t1 = gsap.timeline({defaults:{ease: 'power.out'}});

t1.to(".transition", {x: "100%", duration: 1.5, delay: .5});
t1.fromTo(".transition", {opacity: 1}, {opacity: 0, duration: .1});
t1.to(".transition", {x: "-200%", duration: .1});
t1.to(".nav-menu", {y:"0%", duration: 0.5})
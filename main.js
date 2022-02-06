gsap.from("#landing_name", {
    opacity: 0,
    duration: 1.5,
    x: -200
});

gsap.from("#landing_lastname", {
    opacity: 0,
    duration: 1.5,
    x: 200
});

gsap.from("#about_me", {
    opacity: 0,
    duration: 1.5,
    y: -200,
});

gsap.from("#contact_me", {
    opacity: 0,
    duration: 1.5,
    y: 200
});

/* Disabled 
gsap.from("#landing_down_arrow", {
    y: -50,
    duration: 1,
    yoyo: true,
    repeat: -1
});
*/
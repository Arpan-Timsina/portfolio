

const timeline = gsap.timeline({default:{duration:1}})



timeline
    .from('.header',{
    duration:1,
    y:'-200%',
    ease: 'bounce'
})
    .to('.footer', {  ease: 'elastic', y:'0' ,opacity:100})
    .from('.image',{opacity:0})
    .from('.head',{opacity:0})
    
    
   
   document.querySelector('.image').addEventListener('click',()=>{
    CustomWiggle.create("funWiggle", {wiggles: 10, type: "anticipate"});
    gsap.to(".image", {duration: 2, rotation: 30, ease: "funWiggle"});
   }) 

const butt = document.querySelector('.imaz')

butt.addEventListener('click',()=>{
    timeline.timeScale(2);
    timeline.reverse();

})

    
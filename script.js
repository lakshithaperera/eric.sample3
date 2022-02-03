const menuBtn = document.querySelector('.menu-btn')
const navlink = document.querySelector('.nav-link')

menuBtn.addEventListener('click',()=>{
    navlink.classList.toggle('mobile-munu')
})


const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".new1");
var nawa = document.querySelectorAll(".nawa");
var nawp = document.querySelector(".logo");

const sectionOneOption = {};

const sectionOneObserver = new IntersectionObserver
(function(
   entries,
   sectionOneObserver
 ) {
   entries.forEach(entry => {
      if(!entry.isIntersecting) {
         nav.classList.add("nav-scrolled");

         nawp.style.color = '#f5f5f5';
            
            


         for( var i of nawa){
            i.style.color = '#f5f5f5';
        }
            
      }else{
         nav.classList.remove("nav-scrolled");
         
         nawp.style.color = '#0BDA51';
            
            


         for( var i of nawa){
            i.style.color = '#0BDA51';
        }
      }
      
   });
}, 
sectionOneOption);

sectionOneObserver.observe(sectionOne);

AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      });


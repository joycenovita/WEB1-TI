const el=document.querySelector(".navbar-sticky-top");const observer=new IntersectionObserver(([e])=>e.target.nextElementSibling.classList.toggle("is-sticky",e.intersectionRatio<1),{threshold:[1]});observer.observe(el);
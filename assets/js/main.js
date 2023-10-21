window.addEventListener('scroll',function(){
    var nav=this.document.querySelector("nav");
    nav.classList.toggle("navbar-fixed-top",window.scrollY>0)
    var hero=this.document.querySelector("#banner > .container");
    hero.classList.toggle("hero",window.scrollY>0)

})
 
 $('#rating-carousel').owlCarousel({
     loop:true,
     margin:15,
     nav:true,
     responsive:{
         0:{
             items:2
         },
         600:{
             items:3
         },
         1000:{
             items:4
         }
     }
 })


$('#logoCarouselOwl').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            
        },
        400:{
            items:2,
           
        },
        600:{
            items:3,
            
        },
        992:
        {
            items:5,
            autoplay:false
        }


    }
})


$(document).ready(function(){
    
    'use strict';


        // adjust-slider

        // //  alert("islam");
        //     var winH=$(window).height();
                
        //     // upperH=$(".upper-bar").innerHeight(),      //عشان يحسب الهوامش 

        //    var navH=$("#navbarSupportedContent").innerHeight();

        //  $("#topSlider, .carousel-item").height(winH-navH);



        // end adjust

         // adjust slider height
    
    
    
    
    var winH=$(window).height();
        
    // upperH=$(".upper-bar").innerHeight(),      //عشان يحسب الهوامش 

    // navH=$(".navbar").innerHeight();

$(".slider, .carousel-item").height(winH);



// end  slider height



// start slick 





// end slick 









    //    end  Featured Work

    //    trigerslider 


    $('.carousel').carousel(); 


    // end slider trager 
     
      
    $(".navbar-nav .nav-item ").on("click",function(){
        
        
        $(".navbar-nav .nav-item ").removeClass("active");
        
         $(this).addClass("active");
         
        //  alert("hello"); 
         
     })
    
    
    

    //  $(".navbar-nav .nav-item  ").on("click",function(){
        
        
    //     $(".navbar-nav .nav-item ").removeClass("active");
        
    //      $(this).addClass("active");
         
    //     //  alert("hello"); 
         
         
         
    //  });

  
  

   
    
    
    
// end j query 
});



 
function swap(sheet){
  
    // alert(sheet); 
    document.getElementById("style_s").setAttribute("href",sheet);

    var myLang=localStorage.getItem("language");

    window.location.reload();
   


 }


                  
                  
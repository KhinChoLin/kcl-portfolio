$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
    }else{
        $(".sticky").removeClass("stickyadd");
    }
    })

    var typed = new Typed(".element",{
      strings: ["KhinChoLin","a Developer"],
      smartBackspace:true,
      typedSpeed:100,
      backSpeed:100,
      loop:true,
      loopCount:Infinity,
      startDelay:1000

    });

    //progressbar
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style","width:70%; transition:1s all");
            p[1].setAttribute("style","width:70%; transition:1.5s all");
            p[2].setAttribute("style","width:50%; transition:1.7s all");
            p[3].setAttribute("style","width:60%; transition:2s all");
            p[4].setAttribute("style","width:50%; transition:2.3s all");
            p[5].setAttribute("style","width:50%; transition:2.5s all");
        },
        offset: '90%'
      })  
        
});



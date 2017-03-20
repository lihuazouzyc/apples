    
        $(".head div").mouseover(function(){
            // $(this).find("a").css("color","#ccc").parent("div").siblings("div").find("a").css("color","#fff");
            $(this).find("a").css("color","#ccc");
        });
        $(".head div").mouseout(function(){
            $(this).find("a").css("color","#fff");
        });
 // 标题

        var w=$(document).height();
        $(".carousel").css("height",w*0.8+"px");
        $(".carousel img").css("height",w*0.9+"px");
        $(".carousel-3 img").css("height",w*0.6+"px");
        
        var diaoyong=function(){
        var s=0;
        var time;   
        var ss=function(){
            s++;
            if (s==1){
                $(".carousel-2").css("z-index",3);
                $(".carousel-1").css("z-index",2);
                $(".carousel-3").css("z-index",1);
                // $(".carousel-1 img").animate({width:"40%",height:"60%",top:"20%"},1000)
                $(".carousel-2").animate({left:"0"},1000);
                $(".carousel-3").animate({left:"100%",width:"100%",height:"100%"},1000);
                $(".gundong-2 span").animate({width:"50px"},5000);
                
            }else if(s==2){
                $(".carousel-3").css("z-index",3);
                $(".carousel-2").css("z-index",2);
                $(".carousel-1").css("z-index",1);
                // $(".carousel-2 img").animate({width:"40%",height:"60%",top:"20%"},1000)
                $(".carousel-3").animate({left:"0"},1000)
                $(".carousel-1").animate({left:"100%",width:"100%",height:"100%"},1000)
                $(".gundong-3 span").animate({width:"50px"},5000);
            }else if(s==3){
                $(".carousel-3").css("z-index",2);
                $(".carousel-2").css("z-index",1);
                $(".carousel-1").css("z-index",3);
                // $(".carousel-3 img").animate({width:"40%",height:"60%",top:"20%"},1000)
                $(".carousel-1").animate({left:"0"},1000)
                $(".carousel-2").animate({left:"100%",width:"100%",height:"100%"},1000)
                $(".gundong div span").css("width","0")
                $(".gundong-1 span").animate({width:"50px"},5000);
                s=0;
            }

            time=setTimeout(ss, 5000)
            };ss()

        };setTimeout(diaoyong, 5000) 
        $(".gundong-1 span").animate({width:"50px"},5000);
    // 轮播

// onload=function(){
//         $(".gundong div").click(function(){

//             var as=$(this).index();
//             // alert(as)
//           $(".sss > div").eq(as).animate({left:"0"},1000).css("z-index",5).siblings("div").animate({left:"100%"},0).css("z-index",1);
//           $(".gundong div").eq(as).css("background","#222").siblings("div").css("background","#808080")
//         });
// }
// 主页

    var w=$(".pro-img img").height();
        $(".pro-img").css("height",w+"px");

        $(".picker div").click(function(){
            var i=$(this).index();
            $(this).css("border-bottom","2px solid #000").siblings("div").css("border-bottom","1px solid #999");
            $(".picker-t > div").eq(i).fadeIn(200).siblings("div").hide();
        });
          $(".picker1 div").click(function(){
            var i=$(this).index();
            $(this).css("border-bottom","2px solid #000").siblings("div").css("border-bottom","1px solid #999");
            $(".picker1-t > div").eq(i).fadeIn(200).siblings("div").hide();
        });

        var ww=$(".overview img").height();
        $(".overview").css("height",ww*0.8+"px");

// Mac

     var hs=$(".carousel1-1 > a").height();
        $
        (".carousel1-1").css("height",hs+"px");

        var ws=$(".AirPods").width();
        var ws1=(ws-58)/2;
        $(".AirPods > div").css("width",ws1+"px");

        var hss=$(".AirPods div:nth-child(2) > img").height();
        $(".AirPods > div").css("height",hss+"px");

        var ws1=$(".AirPodss").width();
        var ws11=(ws1-58)/2;
        $(".AirPodss > div").css("width",ws11+"px");

        var hss1=$(".AirPodss div:nth-child(2) > img").height();
        $(".AirPodss > div").css("height",hss1+100+"px");


// iPhone


        var ms1=$(".ms1 img").height();
        $(".ms1").css("height",ms1*0.9+"px");

        var ms2=$(".ms2 > div").height();
        $(".ms2").css("height",ms2+100+"px");

        var ms6=$(".ms6 div img").height();
        $(".ms6").css("height",ms6+50+"px");

        var ms10=$(".ms10 div img").height();
        $(".ms10").css("height",ms10+50+"px");

// Music
        

        
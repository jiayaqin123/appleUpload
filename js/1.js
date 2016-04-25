$(function(){
    var $btn=$(".nav .min-nav .btn");
   // console.log($btn);
    var $maxNav=$(".nav .max-nav");
    //console.log(($maxNav))
    var $btnOne=$(".min-nav .one");
    //console.log($btnOne);
    var $btnTwo=$(".min-nav .two");
    //console.log($btnTwo);
    var index=1;
    $btn.click(function(){
        index++;
        if(index==3){
            index=1;
        }
        if(index==1){
            $btnOne.css({display:"block"});
            $btnTwo.css({display:"none"});
        }else if(index==2){
            $btnTwo.css({display:"block"});
            $btnOne.css({display:"none"});
        }
        $maxNav.slideToggle(500);
    });




    //var $img=$(".wheel .imgBox a");
    ////console.log($img);
    //
    //var $imgL=$img.length;
    //var now=0;
    //var next=0;
    //var t=setInterval(move,2000);
    //function  move(){
    //    next++;
    //    if(next==$imgL){
    //        next=0;
    //    }
    //    //if(next==0){
    //    //    $img.eq(next).css({marginLeft:$img.width(),display:"inline-block"});
    //    //}else{
    //    //    $img.eq(next).css({marginLeft: 0, display: "inline-block"});
    //    //}
    //    $img.eq(next).css({marginLeft:0,display:"inline-block"});
    //    $img.eq(now).animate({marginLeft:-$img.width()},function(){
    //        $(this).css({display:"none"});
    //    });
    //    $img.eq(next).animate({marginLeft:0},function(){
    //
    //    });
    //    now=next;
    //
    //
    //}
    var $wheel=$(".wheel");
    var $imgItem=$(".wheel .imgItem");
    var $imgL=$imgItem.length;
    var $btnItem=$(".wheel .btnItem");
    //console.log($btnItem);
    var now=0;
    var next=0;
    $imgItem.css({left:"50%"}).eq(0).css({left:0});
    var t=setInterval(move,2000);
    function move(){
        next++;
        if(next==$imgL){
            next=0;
        }
        $imgItem.eq(next).css({left:"50%"});
        $imgItem.eq(now).animate({left:"-50%"});
        $imgItem.eq(next).animate({left:0});
        $btnItem.removeClass("btnItemHot");
        $btnItem.eq(next).addClass("btnItemHot");
        now=next;
    }
    $wheel.hover(
        function(){
            clearInterval(t);
        },
        function(){
            t=setInterval(move,2000);
        }
    );
    var $btnLeft=$(".wheel .btnLeft");
    var $btnRight=$(".wheel .btnRight");
    $btnRight.click(function(){
        move();
    })
    $btnLeft.click(function(){
        next--;
        if(next==-1){
            next=$imgL-1;
        }
        $imgItem.eq(next).css({left:"-50%"});
        $imgItem.eq(now).animate({left:"50%"});
        $imgItem.eq(next).animate({left:0});
        $btnItem.removeClass("btnItemHot");
        $btnItem.eq(next).addClass("btnItemHot");
        now=next;
    });
    $btnItem.click(function(i,obj){

        var index=$(this).index();
       // console.log(index);
        if(now<index){
            $imgItem.eq(index).css({left:"50%"});
            $imgItem.eq(now).animate({left:"-50%"});
            $imgItem.eq(index).animate({left:0});
        }else if(now>index){
            $imgItem.eq(index).css({left:"-50%"});
            $imgItem.eq(now).animate({left:"50%"});
            $imgItem.eq(index).animate({left:0});
        }
        $btnItem.removeClass("btnItemHot");
        $btnItem.eq(index).addClass("btnItemHot");
        now=next=index;
    });



    var footer1=$(".footer1");
    //console.log(footer1);
    var $foot1Title=$(".footer1 .title");
    //console.log($foot1Title);
    var $foot1Content=$(".footer1 .content");
   // console.log($foot1Content);
    /*$foot1Title.click(function(i,obj){
       // var index=$(this).index();
       // console.log(this);
        console.log($(this).index());
       // $foot1Content.eq(index).css({display:"block"});
    })*/
    //$foot1Title.click(function(){
    //    var index=$foot1Title.index($(this));
    //    //console.log(index);
    //    $foot1Title.css({borderBottom:"1px solid #e3e3e3"}).eq(index).css({borderBottom:"none"});
    //    $(this).css({border:"none"});
    //    $foot1Content.eq(index).slideToggle(500);
    //
    //
    //});
    var flag=true;
    $foot1Title.click(function(){
        var index=$foot1Title.index($(this));
        if(flag){
            flag=false;
            $foot1Title.eq(index).css({borderBottom:"none"});
            $foot1Content.eq(index).slideDown(500);
        }else {
            flag=true;
            $foot1Title.eq(index).css({borderBottom:"1px solid #e3e3e3"});
            $foot1Content.eq(index).slideUp(500);
        }

    })















});
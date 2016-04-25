$(function(){
    function stopDef(e) {
        if (e && e.preventDefault) e.preventDefault();
        else window.event.returnValue = false;
        return false;
    }

            //stopDef(e);



    var $btn=$(".nav .min-nav .btn");
   // console.log($btn);
    var $maxNav=$(".nav .max-nav");
    //console.log(($maxNav))
    var $btnOne=$(".min-nav .one");
    //console.log($btnOne);
    var $btnTwo=$(".min-nav .two");
    //console.log($btnTwo);
    var index=1;
    $btnOne.css({display:"block"});
    $btnTwo.css({display:"none"});
    $btn.click(function(e){
        stopDef(e);
        index++;
        if(index==3){
            index=1;
        }
        console.log(index);
        if(index==1){
            $btnOne.css({display:"block"});
            $btnTwo.css({display:"none"});
            $maxNav.slideUp(500);
        }else if(index==2){
            $btnTwo.css({display:"block"});
            $btnOne.css({display:"none"});
            $maxNav.slideDown(500);
        }
        //$maxNav.slideToggle(500);
    });



    var $wheel=$(".wheel");
    var $imgItem=$(".wheel .imgItem");
    var $imgL=$imgItem.length;
    var $btnItem=$(".wheel .btnItem");
    //console.log($btnItem);
    var now=0;
    var next=0;
    $imgItem.css({left:"50%"}).eq(0).css({left:0});
    var t=setInterval(move,2000);
    var MoveFlag=true;
    function move(){
        if(MoveFlag==false){
            return;
        }
        MoveFlag=false;
        next++;
        if(next==$imgL){
            next=0;
        }
        $imgItem.eq(next).css({left:"50%"});
        $imgItem.eq(now).animate({left:"-50%"},function(){
            MoveFlag=true;
        });
        $imgItem.eq(next).animate({left:0},function(){
            MoveFlag=true;
        });
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
    $btnRight.click(function(e){
        stopDef(e);
        move();

    });
    $btnLeft.click(function(e){
        stopDef(e);
        if(MoveFlag==false){
            return;
        }
        MoveFlag=false;
        next--;
        if(next==-1){
            next=$imgL-1;
        }
        $imgItem.eq(next).css({left:"-50%"},function(){
            MoveFlag=true;
        });
        $imgItem.eq(now).animate({left:"50%"},function(){
            MoveFlag=true;
        });
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
            $imgItem.eq(now).animate({left:"-50%"},function(){
                MoveFlag=true;
            });
            $imgItem.eq(index).animate({left:0},function(){
                MoveFlag=true;
            });
        }else if(now>index){
            $imgItem.eq(index).css({left:"-50%"});
            $imgItem.eq(now).animate({left:"50%"},function(){
                MoveFlag=true;
            });
            $imgItem.eq(index).animate({left:0},function(){
                MoveFlag=true;
            });
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
    $(window).resize();//必须提前执行一次
    $(window).resize(function(){
        console.log($(window).width());
        var flag=true;
       //注意把判断条件放在click 的里面，因为要清除的是click事件
            $foot1Title.click(function(){
                if($(window).width()>767){
                    return false;
                }else {
                    var index = $foot1Title.index($(this));
                        if (flag) {
                            flag = false;
                            $foot1Title.eq(index).css({borderBottom: "none"});
                            $foot1Content.eq(index).slideDown(500);
                        } else {
                            flag = true;
                            $foot1Title.eq(index).css({borderBottom: "1px solid #e3e3e3"});
                            $foot1Content.eq(index).slideUp(500);
                        }
                }

            });
    });
















});
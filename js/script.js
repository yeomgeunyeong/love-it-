$(function(){
    //fullpage
    $("#fullpage").fullpage({
        navigation:true,
        navigationPosition: "right",
        navigationTooltips: ["HOME","LOVE it","TICKET","MAP","LINEUP","COMMUNITY","CONTACT"],
        showActiveTooltip:true,
        slidesNavigation:true,
        menu:"#header",
        anchors:["menu01","menu02","menu03","menu04","menu05","menu06","menu07"],
    })


    //img slides
    $(document).ready(function(){
        $(".lineup_list.list1").slick({
            autoplay:true,
            autoplaySpeed: 4000,
            dots:true,
            arrows:true,
            slidesToShow: 3,
            slidesToScroll:3,
            responsive:[{
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    arrows:false
                }
            }]
        });
        $(".lineup_list.list2").slick({
            autoplay:true,
            autoPlaySpeed: 4000,
            dots:true,
            arrows:true,
            slidesToShow: 3,
            slidesToScroll:3,
            responsive:[{
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    arrows:false
                }
            }]
        });
    });


    //md탭
    $(".btn_tab").click(function(e){
        e.preventDefault();
        $(".btn_tab").removeClass("on");
        $(this).addClass("on");

        n=$(this).index();
        console.log(n);

        $(".shop_list_wrap > ul").removeClass("act");
        $(".shop_list_wrap > ul").eq(n).addClass("act")
    })//click



    //공지 tab
    $(".commu_tab").click(function(e){
        e.preventDefault();
        $(".commu_tab").removeClass("on2");
        $(this).addClass("on2");

        n=$(this).index();
        console.log(n);

        $(".noti_faq > ul").removeClass("act2");
        $(".noti_faq > ul").eq(n).addClass("act2")
    })//click



    //공지 하단 
    $(".faq_list").click(function(){

        var me=$(this).children("a") //펼침
        var frid=$(this).siblings().children("a") //닫힘

        if(me.hasClass("on")==true){
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();
        }else{
            me.addClass("on");
            me.prev().fadeIn();
            me.next().slideDown();

            frid.removeClass("on");
            frid.prev().fadeOut();
            frid.next().slideUp();
        }//if

    })//click




    //모바일
    //메뉴 모양 변경
    var menubutton=document.querySelector(".mo_menu_btn")
    var navigation=document.querySelector("mo_main")
    
    menubutton.addEventListener("click", togglenav);

    function togglenav(){
        menubutton.classList.toggle("active")
        navigation.classList.toggle("active")
    }


    //메뉴 
    $(".mo_nav").hide();
    $(".mo_menu_btn").click(function(){
        $(".mo_nav").toggle();
    })




})//
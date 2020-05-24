// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// = require jquery
// = require jquery_ujs



$(function(){
    //-------------Topの動画ここから--------------
    var vlength=$('.intro-geo-video').length;
    var vInterval;
    var toggle = true;
    
    function slideInterval(limTime){
        vInterval=setInterval(function(){
            {   
                $('.timebar').css('width','0'); 
                var slideIndex=$('.intro-geo-video').index($('.active-v')); //アクティブになっている番号を代入
                
                $('.intro-geo-video').removeClass('active-v'); //active-vクラスを取り除く
                $('.video-switch').removeClass('active-v'); 
                
                if(slideIndex==vlength-1){
                    $('.intro-geo-video').eq(0).addClass('active-v');
                    $('.video-switch').eq(0).addClass('active-v'); 
                }else{
                    
                    $('.intro-geo-video').eq(slideIndex+1).addClass('active-v');
                    $('.video-switch').eq(slideIndex+1).addClass('active-v'); 
                }//次の番号をアクティブにする
                
                $('.active-v').get(0).currentTime=0;
                $('.timebar').animate(
                    {'width':'90%'},
                    limTime-100,"linear"
                    );
                }
            },limTime);
        }
        
        function slideTimeout(limTime){
            vInterval=setTimeout(function(){
                {   
                    $('.timebar').css('width','0'); 
                    var slideIndex=$('.intro-geo-video').index($('.active-v')); //アクティブになっている番号を代入
                    
                    $('.intro-geo-video').removeClass('active-v'); //active-vクラスを取り除く
                    $('.video-switch').removeClass('active-v'); 
                    
                    if(slideIndex==vlength-1){
                        $('.intro-geo-video').eq(0).addClass('active-v');
                        $('.video-switch').eq(0).addClass('active-v'); 
                    }else{
                        
                        $('.intro-geo-video').eq(slideIndex+1).addClass('active-v');
                        $('.video-switch').eq(slideIndex+1).addClass('active-v'); 
                    }//次の番号をアクティブにする
                    
                    $('.active-v').get(0).currentTime=0;
                    $('.timebar').animate(
                        {'width':'90%'},
                        4500-100,"linear"
                        );
                    }
                },limTime);
            }
            
            //下の丸のクリック処理
            $('.video-switch').click(function(){
                $('.timebar').stop();
                $('.timebar').css('width','0'); 
                $('.timebar').animate(
                    {'width':'90%'},
                    4400,"linear"
                    );//タイムバーの処理
                    
                    $('.video-switch').removeClass('active-v'); 
                    $('.intro-geo-video').removeClass('active-v');
                    var slideIndex=$('.video-switch').index($(this));
                    $('.intro-geo-video').eq(slideIndex).addClass('active-v');
                    $('.video-switch').eq(slideIndex).addClass('active-v');
                    $('.active-v').get(0).currentTime=0;
                    clearInterval(vInterval);
                    slideInterval(4500);
                });
                
                // $('.intro-geo-video').click(function(){
                    //     var slideIndex=$('.intro-geo-video').index($(this));
                    //     var time=$('.active-v').get(0).currentTime;
                    
                    //     if(toggle==true){
                        //         clearInterval(vInterval);
                        //         clearTimeout(vInterval);
                        //         clearTimeout(resumeInterval);
                        //         $('.intro-geo-video').eq(slideIndex).get(0).pause();
                        //         $('.timebar').stop();
                        //     }else{
                            //         $('.intro-geo-video').eq(slideIndex).get(0).play();
                            //         $('.timebar').animate(
                                //             {'width':'100%'},
                                //             4490-time*1000,"linear"
                                //             );
                                //         slideTimeout(4500-time*1000);
                                //         var resumeInterval = setTimeout(function(){
                                    //             slideInterval(4500);
                                    //         },4500-time*1000);
                                    //     }
                                    //     toggle = !toggle;
                                    // });
                                    
                                    
$('.timebar').animate(
    {'width':'90%'},
    4400,"linear"
    );
    slideInterval(4500);
    
    //-------------Topの動画ここまで--------------
    
    //-------------TopのGeo体験レクチャー---------
    $('.intro-geo-exp-lec-btn').click(function() {
        var $displaySlide = $('.active-lec');
        $displaySlide.removeClass('active-lec');
        if ($(this).hasClass('next-btn')) {
            $displaySlide.next().addClass('active-lec');
        } else {
            $displaySlide.prev().addClass('active-lec');
        }
        
        var slideIndexLec = $('.intro-geo-exp-lec-txt').index($('.active-lec'));
        $('.intro-geo-exp-lec-btn').show();
        if(slideIndexLec==0){
            $('.prev-btn').hide();
        }else if(slideIndexLec==4){
            $('.next-btn').hide();
        }
    });
    //-------------TopのGeo体験レクチャーここまで--------------------------
    
    //------------Studyのレッスン選択画面アコーディオンここから------------
    $('.study-lesson-container').click(function(){
        var $container=$(this).find('.study-lesson-container');
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).parent().find('.study-lesson-list').slideUp();
            $(this).parent().find('.arrow').css({'transform':'rotate(225deg)','bottom':'5px'});
        }else{
            $(this).addClass('open');
            $(this).parent().find('.study-lesson-list').slideDown();
            $(this).parent().find('.arrow').css({'transform':'rotate(45deg)','bottom':'-6px'});
        }
    });
    //-----------Studyレッスン選択画面アコーディオンここまで----------------

    //-----------LessonModalダイアログ送りUI----------------------------------
    $('.lesson-modal-btn').click(function(){
        var $displaySlideF = $('.show').eq(0);
        var $displaySlideS = $('.show').eq(1);
        // $displaySlide.removeClass('show');
        var $prevSlide=$('.show').first().prev();
        var $firstSlide=$('.show').first();
        var $lastSlide=$('.show').last();
        var $nextSlide=$('.show').last().next();
        if ($(this).hasClass('lesson-next-btn')) {
            if($nextSlide.hasClass('lesson-modal-visualmedia')){
                $('.lesson-contents').find('.show').animate(
                    {height: "0", opacity: "0"},
                    "slow"
                    );
                $('.lesson-contents').find('.show').removeClass('show');
                $nextSlide.addClass('show');
                $nextSlide.animate(
                    {height: "100%", opacity: "1"},
                    "slow"
                    );
            }else if($lastSlide.hasClass('lesson-modal-visualmedia')){
                $lastSlide.animate(
                    {height: "0", opacity: "0"},
                    "slow"
                    );
                $lastSlide.removeClass('show');
                $nextSlide.addClass('show');
                $nextSlide.animate(
                    {height: "100%", opacity: "1"},
                    "slow"
                    );
            }else if($('.show').length==1){
            $displaySlideF.next().addClass('show');
            $displaySlideF.next().animate(
                {height: "180px", opacity: "1"},
                "slow"
                );
            }else{
            $displaySlideF.animate(
                {height: "0", opacity: "0"},
                "slow"
                );
                $displaySlideF.removeClass('show');
                $displaySlideS.next().addClass('show');
                $displaySlideS.next().animate(
                    {height: "180px", opacity: "1"},
                    "slow"
                    );
            }

        } else{
            if($prevSlide.hasClass('lesson-modal-visualmedia')){
                $('.lesson-contents').find('.show').animate(
                    {height: "0", opacity: "0"},
                    "slow"
                    );
                $('.lesson-contents').find('.show').removeClass('show');
                $prevSlide.addClass('show');
                $prevSlide.animate(
                    {height: "100%", opacity: "1"},
                    "slow"
                    );
            }else if($lastSlide.hasClass('lesson-modal-visualmedia')){
                $lastSlide.animate(
                    {height: "0", opacity: "0"},
                    "slow"
                    );
                $lastSlide.removeClass('show');
                $prevSlide.addClass('show');
                $prevSlide.animate(
                    {height: "100%", opacity: "1"},
                    "slow"
                    );
            }else{

                $displaySlideS.animate(
                    {height: "0", opacity: "0"},
                    "slow"
                    );
                    $displaySlideS.removeClass('show');
                    $displaySlideF.prev().addClass('show');
                    $displaySlideF.prev().animate(
                        {height: "180px", opacity: "1"},
                        "slow"
                        );
            }
        }
         var slideIndexLec = $('.lesson-modal-dialog').index($('.show').eq(-1));
        $('.lesson-modal-btn').show();
        $('.lesson-toex-btn').hide();

        if(slideIndexLec==0){
            $('.lesson-prev-btn').hide();
        }else if(slideIndexLec==$('.lesson-modal-dialog').length-1){
            $('.lesson-next-btn').hide();
            $('.lesson-toex-btn').show();
        }
    });

    $('.lesson-modal-close-btn').click(function(){
        $('.lesson-modal-wrapper').fadeOut();
    });

    $('.mission-hint').click(function(){
        $('.lesson-modal-wrapper').fadeIn();
    });

});
    
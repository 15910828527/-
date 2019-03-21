    layui.use(['element','carousel'], function(){
      var element = layui.element;
      var carousel = layui.carousel;
      carousel.render({
        elem: '#my-banner'
        ,width: '100%'
        ,height:'626px'
        ,arrow: 'always'
      });
      carousel.render({
        elem: '#mobbie-banner'
        ,width: '100%'
        ,height:'210px'
        ,arrow: 'none'
      });
    });

    $('.ourProject-con-li').hover(function(){
      $(this).animate({height:"330px"}).find('.img-con').animate({height:"235px"});
     },function(){
    $(this).animate({height:"314px"}).find('.img-con').animate({height:"220px"});
   });
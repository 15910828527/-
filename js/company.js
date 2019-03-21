    layui.use(['element','carousel'], function(){
      var element = layui.element;
      var carousel = layui.carousel;
      carousel.render({
        elem: '#my-banner'
        ,width: '100%'
        ,height:'626px'
        ,arrow: 'always'
      });
    });
      var points = [{
        id: 1,
        lng: 116.094447,
        lat: 43.953862,
        title: "高声科技有限公司",
        content: ["地址：锡林浩特市青年云创业孵化园", "电话：4008-888-888"]
         },
      ];
      new BaiduMap({
        id: "container2",
        level: 16,
        type: ["地图", "卫星"],
        width: 250,
        height: 70,
        titleClass: "title",
        contentClass: "content",
        mapStyle: "light",
        icon: {
          url: "../img/marker.png",
          width: 25,
          height: 25
        },
        centerPoint: { 
          lng: 116.094447,
          lat: 43.953862
        },
        index: 0,
        points: points
      });
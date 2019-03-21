    layui.use(['element','form','layer'], function(){
      var element = layui.element;
      var layer = layui.layer;

        var form = layui.form;
          form.verify({
            title: function(value){
              if(value.length < 1){
                return '姓名不能为空啊';
              }
            }
            ,cooMobbile: [
              /^1[23456789]\d{9}$/
              ,'手机格式不正确'
          
            ]
            ,cooMessage: function(value){
               if(value.length < 1){
                return '请填写您的需求';
              }
            }
          });
        form.on('submit(formDemo)', function(data){
           layer.msg('恭喜您提交成功', {icon: 1});
           $('.cooper-form-form')[0].reset();
　　         layui.form.render();
           return false;
        });
    });
   superplaceholder({
      el: cooName,
      sentences: [ '请输入您的姓名', '例如： 张三', '例如： TOM' ],
      options: {
        loop: true,
        letterDelay: 80,
        startOnFocus: false
      }
    })
   superplaceholder({
      el: cooEmail,
      sentences: [ '请填写你的Email地址', 'gaosheng@qq.com', 'gaosheng@163.com' ],
      options: {
        loop: true
      }
    })
    superplaceholder({
      el: cooMobbile,
      sentences: [ '请输入11位格式手机号', '15918888888', '16618888888', '13988888888' ],
      options: {
        loop: true

      }
    })
    superplaceholder({
      el: cooCompany,
      sentences: [ '请输入您的公司名称', '例如：高声科技有限公司'],
      options: {
        loop: true
      }
    })
    superplaceholder({
      el: cooMessage,
      sentences: [ '请输入您的需求', '我们会尽快联系您'],
      options: {
        loop: true
      }
    })
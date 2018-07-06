<template>
<div class="wrapper">
    <!--背景图片-->
    <!-- <div id="web_bg" >
     <img src="http://chuantu.biz/t6/339/1530845543x-1404793483.jpg" class="back" id="Background" />
    </div> -->

    <div class="body" id="Background">
      <div class="msg">{{sale_name}}{{msg}}</div>
      <button @click="getid">get</button>
    </div>
    <!--其他代码 ... -->
</div>
</template>

<script>
(function(){ 	("#Background").height($("#Background").height());
});
        
export default {
  name: 'mkt',
  data () {
    return {
      sale_name:'Harry',
      msg: '祝你大吉大利，今晚吃鸡'
    }
  },
  methods:{
    // getid(){
      //  window.location.href='https://open.weixin.qq.com/connect/qrconnect?' +
      //   'appid=wxeb2452c5baa880ac&redirect_uri=http%3A%2F%2Fwarmday.top%2F%23%2Fh5'+
      //   window.location.pathname.substr(1)+
      //   '&response_type=code&scope=snsapi_login&state=3d6be0a4035d839573b04816624a415e#wechat_redirect';
    //   window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxeb2452c5baa880ac&redirect_uri=http%3A%2F%2Fwarmday.top%2F%23%2Fh5&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg{
  position: absolute;
  top: 60%;
  left: 50%;
  margin-left: -109px;
}
.body{
width: 100%;
height: 100%;
position: relative;
position: fixed;
z-index: -10;
background-image: url(http://chuantu.biz/t6/339/1530845543x-1404793483.jpg);
background-repeat: no-repeat;
background-position: 0px 0px;
background-size: 100% 100%;
}
.back{
position: fixed;
width: 100%;
height: 100%;
display: block;
z-index: -100;	
}
</style>

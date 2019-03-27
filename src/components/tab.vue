<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      首页
    </router-link>
    <router-link to="/newCar">
      <i class="iconfont icon-cheliangguanli"></i>
      新车
    </router-link>
    <router-link to="/secondhandCar">
      <i class="iconfont icon-cheliang-"></i>
      二手车
    </router-link>
    <router-link to="/mine">
      <i class="iconfont icon-wo"></i>
      我的
    </router-link>

  </div>
</template>

<script>


  export default {
    name: "tab",

  }
</script>

<style scoped>
  /*
  display:flex;
  flex-directin:row/column;
  justify-content；center;垂直居中
  align-item：center;横向居中
  flex:1;每份占1
  */


  .circle {
    position: absolute;
    right: 114px;
    top: 3px;
    display: inline-block;
    width: 18px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid red;
    text-align: center;
    font-size: 12px;
    color: red;
  }

  .footer {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    border-top: 1px solid #dddddd;
    font-size: 25px;
  }

  .footer a {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #000;
  }

  a.router-link-active{
    color: red;
  }
</style>

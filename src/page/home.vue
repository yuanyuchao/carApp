<template>
  <div class="home">
    <div class="banner">
      <div class="acctive">活动规则</div>
    </div>
    <div class="text">
      <div class="people">
        <p>0人</p>
        <p>本月成功邀请</p>
      </div>
      <div class="detail">
        <p>
          点击查看
          <span>></span>
        </p>
        <p>我的邀请</p>
      </div>
    </div>
    <img src="../assets/mine.png" alt class="content">
    <div class="footer">
      <div class="button">立即邀请好友</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
body {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  padding-bottom: 100px;
}
* {
  margin: 0;
  padding: 0;
}
.banner {
  width: 750px;
  height: 360px;
  background: url("../assets/banner@2x.png") no-repeat;
  background-size: cover;
}

.acctive {
  width: 147px;
  height: 60px;
  background-color: #000;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  border-radius: 30px 0px 0px 30px;
  opacity: 0.5;
  float: right;
  margin-top: 70px;
}
.text {
  width: 750px;
  height: 140px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 28px 0;
  margin-bottom: 20px;
}
.people {
  width: 49%;
  display: inline-block;
  text-align: center;
  border-right: 1px solid #dedede;
}
.detail {
  width: 49%;
  display: inline-block;
  text-align: center;
}
.people > p:nth-of-type(1) {
  font-size: 32px;
  color: #333333;
  margin-bottom: 15px;
  font-weight: 400;
}
.people > p:nth-of-type(2) {
  font-size: 24px;
  color: #999999;
}
.detail > p:nth-of-type(1) {
  font-size: 28px;
  color: #ff5e33;
  margin-bottom: 15px;
}
.detail > p:nth-of-type(2) {
  font-size: 24px;
  color: #999999;
}
span {
  font-family: 黑体;
  margin-left: 5px;
}
.content {
  width: 750px;
  height: 980px;
  margin-bottom: 30px;
}
.footer {
  width: 750px;
  height: 140px;
  background-color: #fff;
  padding: 26px 0;
  box-sizing: border-box;
}
.button {
  width: 680px;
  height: 88px;
  background-color: #ff5735;
  font-size: 32px;
  color: #fff;
  text-align: center;
  line-height: 88px;
  margin: 0 auto;
  border-radius: 6px;
}
</style>



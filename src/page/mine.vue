<template>
  <div class="wrapper">
      <p>账号<input type="text" name="" id="" v-model="Account"></p>
      <p>密码<input type="password" name="" id="" v-model="Password"></p>
      <h1 @click="getData">login</h1>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';
import axios from 'axios';
export default {
  components:{},
  props:{},
  data(){
    return {
        Account: '',
        Password: '',
    }
  },
  watch:{},
  computed:{},
  methods:{
      getData:function(){
          axios.post('/Page/LoginCode',{
             Account:this.Account,
             Password:this.Password,
          }).then(res=>{
              console.log(res);
          }).catch(err=>{
               console.log(err)
          })

      },
       /*加密*/
      encrypt (name, value) {
        let encryptText = CryptoJS.AES.encrypt(value, CryptoJS.enc.Utf8.parse(this.key), {
          iv: CryptoJS.enc.Utf8.parse(this.iv),
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        })
        localStorage.setItem(name, encryptText)
      },
      /*解密*/
      decrypt (value) {
        let decryptText = CryptoJS.AES.decrypt(value || ' ', CryptoJS.enc.Utf8.parse(this.key), {
          iv: CryptoJS.enc.Utf8.parse(this.iv),
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8)
        return decryptText
      },
  },
  created(){},
  mounted(){}
}
</script>

<style scoped>
.wrapper {
    padding-top: 300px;
}
p,h1{
    text-align: center;
    margin: 20px;
}
</style>

<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" >
        <div class="manage_tip">
          <p>翔顺集团</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="userSign">
            <el-input v-model="loginForm.userSign" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="loginForm.pwd" type="password" placeholder="密码" ></el-input>
          </el-form-item>
          <el-form-item prop="validCode">
            <img @click="changeCode()" :src="loginForm.imgUrl" class="validCode">
            <el-input v-model="loginForm.validCode" type="text" placeholder="验证码" >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitLogin('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          userSign: '',
          pwd:'',
          validCode:'',
          imgUrl:'',
          uuid:'',
          source:'web'
        },
        rules:{
          username:[{required: true,message:' ',trigger: 'blur' }],
          password:[{required: true,message:' ',trigger: 'blur' }],
          validCode:[{required: true,message:' ',trigger: 'blur' }],
        },
      }
    },
    created:function () {
      this.changeCode()
    },
    methods:{
      changeCode(){
        this.api.getValidCode('',(res)=>{
          this.loginForm.imgUrl='data:image/png;base64,'+res.imgJson
          this.loginForm.uuid='data:image/png;base64,'+res.uuid
        })
      },
      submitLogin(formname){
        this.$refs[formname].validate((valid) => {
          if (valid) {
            this.api.login(this.loginForm,(res)=> {
              if(res.errcode==-1){
                this.$message({
                  type: 'error',
                  message: res.errmsg
                });
              }else{
                this.$message({
                  type: 'success',
                  message: '登录成功'
                });
                setTimeout(()=> {
                  this.$router.push({ path: 'home' })
                },500)
              }
            })
          } else {

          }
        });
      }

    }
  }
</script>
<style>
  .login_page{
    background: url("../assets/bg.jpg") no-repeat;
    background-size: cover;
  }
  .manage_tip {
    position: absolute;
    width: 100%;
    height: 55px;
    top:-55px;
    line-height: 55px;
    border-radius: 5px 5px 0px 0px;
    left: 0;
    background: #fff;
    color: #8eabbc;
  }
  p{
    font-size: 24px;
  }
  .form_contianer{
    width: 320px;
    height: 250px;
    position: absolute;
    top:40%;
    margin-top: -95px;
    right:450px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 10px 10px 5px #888888;
  }
  .submit_btn{
    width: 100%;
    font-size: 16px;
  }
  .validCode{
    position: absolute;
    top: 1px;
    right: 0px;
    z-index: 999;
    height: 38px;
    cursor: pointer;
  }
</style>

<template>
    <div id="login">
        <div class="wrapper">
            <div class="container">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                         class="login-container">
                    <h2>Runing Admin</h2>
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密　码" prop="password">
                        <el-input type="Password" v-model="ruleForm.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" plain @click="submitForm('ruleForm')">登　录</el-button>
                        <el-button plain @click="resetForm('ruleForm')">重　置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <ul class="bg-bubbles">
                <li v-for="item in 9"></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, trigger: 'blur', message: '用户名必填'}
                    ],
                    password: [
                        {required: true, trigger: 'blur', message: '密码必填'}
                    ]
                }
            };
        },
        methods: {
            ...mapActions([
                'loginHandle'
            ]),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.loginHandle({
                            ...this.ruleForm,
                            provider: this.$provider
                        }).then(result => {
                            this.$router.push({
                                name: 'adminMain'
                            })
                        })
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style scoped>
    h2 {
        text-align: center;
        color: #42b983;
    }
    #login {
        height: 100%;
    }
    .container{
        z-index: 9999;
    }
    .login-container {
        width: 350px;
        padding: 20px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -195px;
        border: 1px solid #eaeaea;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        opacity: .9;
        z-index: 999;
    }
    /*begin*/
    body ::-webkit-input-placeholder {
        /* WebKit browsers */
        font-family: 'Source Sans Pro', sans-serif;
        color: white;
        font-weight: 300;
    }

    body :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        font-family: 'Source Sans Pro', sans-serif;
        color: white;
        opacity: 1;
        font-weight: 300;
    }

    .wrapper {
        background: #50a3a2;
        background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
        background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*margin-top: -200px;*/
        overflow: hidden;

    }

    .bg-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .bg-bubbles li {
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        /*background-color: rgba(255, 255, 255, 0.15);*/
        bottom: -90px;
        -webkit-animation: square 15s infinite;
        animation: square 15s infinite;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
    }
    .bg-bubbles li:before,
    .bg-bubbles li:after{
        position: absolute;
        left:25px;
        top:0;
        content: '';
        width: 25px;
        height: 40px;
        /*background: rgba(255, 255, 255, 0.25);*/
        background: #53e3a6;
        border-radius: 40px 40px 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    .bg-bubbles li:after {
        content: '';
        left: 0;
        top:0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }

    .bg-bubbles li:nth-child(1) {
        left: 10%;
    }

    .bg-bubbles li:nth-child(2) {
        left: 20%;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 17s;
        animation-duration: 17s;
    }

    .bg-bubbles li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 4s;
        animation-delay: 4s;
    }

    .bg-bubbles li:nth-child(4) {
        left: 40%;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        /*background-color: rgba(255, 255, 255, 0.25);*/
    }

    .bg-bubbles li:nth-child(5) {
        left: 70%;
    }

    .bg-bubbles li:nth-child(6) {
        left: 80%;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
    }

    .bg-bubbles li:nth-child(7) {
        left: 32%;
        -webkit-animation-delay: 7s;
        animation-delay: 7s;
    }

    .bg-bubbles li:nth-child(8) {
        left: 55%;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }

    .bg-bubbles li:nth-child(9) {
        left: 25%;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }

    .bg-bubbles li:nth-child(10) {
        left: 90%;
        -webkit-animation-delay: 11s;
        animation-delay: 11s;
    }

    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-900px) rotate(600deg);
            transform: translateY(-900px) rotate(600deg);
        }
    }

    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-900px) rotate(600deg);
            transform: translateY(-900px) rotate(600deg);
        }
    }
</style>

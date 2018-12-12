<template>
    <el-main>
        <el-row :gutter="20">
            <el-col :span="12" :offset="10">
                <img src="../../img/logo.png" id="logo">
            </el-col>
            <el-col :span="12" :offset="6" v-loading="loading">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                         class="demo-ruleForm">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model.string="ruleForm2.email"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-main>
</template>

<style>
    #logo {
        text-align: center;
    }
    .el-header{
        text-align: center;
    }
</style>


<script>
    import {setCookie, getCookie} from '../../js/cookie.js'

    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            var validate = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('内容不能为空'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    email: '',
                    password: '',
                },
                rules2: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    email: [
                        {validator: validate, trigger: 'blur'}
                    ]
                },
                loading: false,
                visible: false
            };
        },
        mounted() {
            this.$emit('visible',true);
        },
        methods: {
            submitForm(formName) {
                this.loading= true,
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.$ajax.post('/api/auth/login',{
                                email:this.ruleForm2.email,
                                password:this.ruleForm2.password,
                            }).then(res=> {
                                console.log(res);
                                if(res.data.code == 1) {

                                    this.$message.success("登陆成功！");
                                    this.$emit('child-say',false);
                                    setCookie('username',this.ruleForm2.email,1000*60)
                                    setTimeout(function(){
                                        this.loading= false,
                                            this.$router.push('/')
                                    }.bind(this),1000)
                                }else{
                                    this.loading= false,
                                        this.$message.error("登陆失败！");
                                }
                            }).catch(error => {
                                this.loading= false,
                                    this.$message.error("登陆失败！");
                            });
                        } else {
                            this.loading= false,
                                console.log('error submit!!');
                            return false;
                        }
                    });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
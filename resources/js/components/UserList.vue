<template>
    <el-main>
        <el-row :gutter="20">
            <el-header>
                <el-row>
                    <el-col :span="24" style="margin-top: 15px;">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/UserList' }">系统中心</el-breadcrumb-item>
                            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                </el-row>
            </el-header>

            <el-main>
                <el-table
                        :data="userList"
                        style="width: 100%"
                        v-loading="loading">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="用户账号">
                                    <span>{{ props.row.name }}</span>
                                </el-form-item>
                                <el-form-item label="用户ID">
                                    <span>{{ props.row.id }}</span>
                                </el-form-item>
                                <el-form-item label="用户角色">
                                    <span>{{ props.row.role }}</span>
                                </el-form-item>
                                <el-form-item label="邮箱地址">
                                    <span>{{ props.row.email }}</span>
                                </el-form-item>
                                <el-form-item label="生成时间">
                                    <span>{{ props.row.creat_time }}</span>
                                </el-form-item>
                                <el-form-item label="修改时间">
                                    <span>{{ props.row.update_time }}</span>
                                </el-form-item>
                                <el-form-item label="描述">
                                    <span>{{ props.row.desc }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="ID"
                            prop="id">
                    </el-table-column>
                    <el-table-column
                            label="账号"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            label="创建时间"
                            prop="creat_time">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <!--<el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">
                                编辑
                            </el-button>-->
                            <el-button type="danger" size="mini" @click="open_DialogVisible(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>

              <!--  <el-dialog title="用户编辑" :visible.sync="dialogFormVisible">
                    <UserEdit  v-bind:user_id="user_id"></UserEdit>
                </el-dialog>-->

                <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose">
                    <span>是否确认冻结改用户</span>
                    <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="handleDelete()">确 定</el-button>
                            </span>
                </el-dialog>
            </el-main>

        </el-row>
    </el-main>
</template>


<script>
    /*引入公共样式*/
    import '../../css/UserList.css'
    //import UserEdit from './UserEdit.vue'

    export default {
        name: 'UserList',
     /*   components: {
            UserEdit
        },*/
        data() {
            return {
                userList: [],
                dialogFormVisible: false,
                formLabelWidth: '120px',
                dialogVisible: false,
                user_id:'',
                loading: false
            }
        },
        mounted:function(){
            this.userdata();

        },
        methods: {
            userdata(){
                this.loading=true
                this.userList=[]
                this.$ajax({
                    method: 'get',
                    url: '/api/auth/userList',
                }).then(response => {
                    var data =response.data
                    for (var i=0;i<data.length;i++)
                    {
                        this.userList.push({
                            'id':data[i].id,
                            'name':data[i].name,
                            'role':"管理员",
                            'email':data[i].email,
                            'creat_time':data[i].created_at,
                            'update_time':data[i].updated_at,
                            'desc':data[i].portrait
                        })
                    }
                    this.loading=false
                });
            },
            handleEdit(index, row) {
                this.user_id=row.id
                this.dialogFormVisible = true
            },
            handleDelete() {
                this.$ajax({
                    method: 'get',
                    url: '/api/auth/userDel?userid='+this.user_id,
                }).then(res=> {
                    this.$message.success("冻结成功！");
                }).catch(error => {
                    console.log(error);
                    this.$message.error(error);
                });
                this.dialogVisible = false
                this.userdata()
            },
            open_DialogVisible(index, row){
                this.dialogVisible=true
                this.user_id=row.id
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
        }
    }
</script>
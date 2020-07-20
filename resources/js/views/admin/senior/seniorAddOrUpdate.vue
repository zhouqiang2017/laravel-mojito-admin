<template>
    <el-dialog
        class="add-update"
        :title="!dataForm.id ? '新增' : '修改'"
        :close-on-click-modal="false"
        :visible.sync="visible"
    >
        <el-form
            :model="dataForm"
            :rules="dataRule"
            ref="dataForm"
            @keyup.enter.native="dataFormSubmit()"
            label-width="80px"
        >
            <el-form-item label="项目名" prop="name">
                <el-input v-model="dataForm.name" placeholder="项目名"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="intro">
                <el-input v-model="dataForm.intro" placeholder="简介"></el-input>
            </el-form-item>
            <el-form-item label="图片" prop="cover">
                <single-upload v-model="dataForm.cover" type="senior"></single-upload>
            </el-form-item>
            <el-form-item label="规则与方法" prop="regular">
                <el-input type="textarea" v-model="dataForm.regular"></el-input>
            </el-form-item>
            <el-form-item label="排序值" prop="sequence">
                <el-input v-model="dataForm.sequence" placeholder="排序值" type="number"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="status">
                <el-select v-model="dataForm.status" placeholder="请选择">
                    <el-option label="显示" value="1"></el-option>
                    <el-option label="隐藏" value="0"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="dataFormSubmit()" :loading="submitLoading">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import {addSenior, editSenior, getSenior} from "../../../api/senior"
    import SingleUpload from "../../../components/upload/singleUpload";
    import {addOrUpdateSuccess} from "../../../libs/tableDataHandle";

    export default {
        name: "SeniorAddOrUpdate",
        components: {SingleUpload},
        data() {
            return {
                visible: false,
                submitLoading: false,
                dataForm: {
                    id: 0,
                    name: "",
                    intro: "",
                    cover: "",
                    regular: "",
                    type: "1",
                    status: "1",
                    sequence: 0
                },
                dataRule: {
                    name:[{required: true, message: '项目名不能为空', trigger: 'blur'}],
                    intro: [{required: true, message: "简介不能为空", trigger: 'blur'}],
                    cover: [{required: true, message: "图片不能为空", trigger: 'blur'}],
                    regular: [{required: true, message: "规则与方法不能为空", trigger: 'blur'}],
                }
            }
        },
        methods: {
            init(id) {
                this.dataForm.id = id || 0;
                this.visible = true;
                this.$nextTick(() => {
                    this.$refs["dataForm"].resetFields();
                    if (this.dataForm.id) {
                        this.getData()
                    }
                })
            },
            getData() {
                const loading = this.$loading({
                    target: ".add-update",
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                getSenior(this.dataForm.id).then(response => {
                    this.dataForm.id = response.data.data.id
                    this.dataForm.name = response.data.data.name
                    this.dataForm.intro = response.data.data.intro
                    this.dataForm.cover = response.data.data.cover
                    this.dataForm.regular = response.data.data.regular
                    this.dataForm.sequence = response.data.data.sequence
                    this.dataForm.status = response.data.data.status.toString()
                    loading.close();
                })
            },
            dataFormSubmit() {
                const that = this
                this.$refs["dataForm"].validate(valid => {
                    if (valid) {
                        this.submitLoading = true
                        if (!this.dataForm.id) {
                            this.handleAdd()
                        }else{
                            this.handleEdit()
                        }
                    }
                })
            },
            handleAdd() {
                addSenior(this.dataForm).then(response => {
                    addOrUpdateSuccess(this, 'add')
                })
            },
            handleEdit(){
                editSenior(this.dataForm.id, this.dataForm).then(response => {
                    addOrUpdateSuccess(this, 'edit')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

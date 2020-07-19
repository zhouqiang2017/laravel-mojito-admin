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
            <el-form-item label="名称" prop="name">
                <el-input v-model="dataForm.name" placeholder="名称"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="intro">
                <el-input v-model="dataForm.intro" placeholder="简介"></el-input>
            </el-form-item>
            <el-form-item label="图片" prop="url">
                <single-upload v-model="dataForm.url" type="banner"></single-upload>
            </el-form-item>
            <el-form-item label="链接类型" prop="type">
                <el-select v-model="dataForm.type" placeholder="请选择">
                    <el-option label="内链" value="1"></el-option>
                    <el-option label="外链" value="2"></el-option>
                </el-select>
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
    import {addBanner, editBanner, getBanner} from "../../../api/banner"
    import SingleUpload from "../../../components/upload/singleUpload";
    import {addOrUpdateSuccess} from "../../../libs/tableDataHandle";

    export default {
        name: "BannerAddOrUpdate",
        components: {SingleUpload},
        data() {
            return {
                visible: false,
                submitLoading: false,
                dataForm: {
                    id: 0,
                    name: "",
                    intro: "",
                    url: "",
                    type: "1",
                    status: "1",
                    sequence: 0
                },
                dataRule: {
                    url: [{required: true, message: "图片不能为空"}],
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
                getBanner(this.dataForm.id).then(response => {
                    this.dataForm.id = response.data.data.id
                    this.dataForm.name = response.data.data.name
                    this.dataForm.intro = response.data.data.intro
                    this.dataForm.url = response.data.data.url
                    this.dataForm.sequence = response.data.data.sequence
                    this.dataForm.type = response.data.data.type.toString()
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
                addBanner(this.dataForm).then(response => {
                    addOrUpdateSuccess(this, 'add')
                })
            },
            handleEdit(){
                editBanner(this.dataForm.id, this.dataForm).then(response => {
                    addOrUpdateSuccess(this, 'edit')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

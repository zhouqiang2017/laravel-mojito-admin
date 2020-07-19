<template>
    <div>
        <el-upload
            :action="url"
            accept="image/jpeg,image/png,image/gif"
            list-type="picture"
            name="image"
            :multiple="false"
            :headers="headers"
            :show-file-list="showFileList"
            :file-list="fileList"
            :on-remove="handleRemove"
            :before-upload="handelBeforeUpload"
            :on-success="handleUploadSuccess"
            :on-preview="handlePreview"
            :on-progress="handleProgress"
            :data="imagData"
        >
            <el-button size="small" type="primary" :loading="uploading">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过10MB</div>
        </el-upload>
        <!-- 查看大图 -->
        <el-dialog :visible.sync="dialogVisible" append-to-body>
            <img width="100%" :src="fileList[0].url" alt/>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: "singleUpload",
        props: {
            value: String,
            type: String
        },
        computed: {
            imageUrl() {
                return this.value;
            },
            imageName() {
                if (this.value != null && this.value !== "") {
                    return this.value.substr(this.value.lastIndexOf("/") + 1);
                } else {
                    return null;
                }
            },
            fileList() {
                return [
                    {
                        name: this.imageName,
                        url: this.imageUrl
                    }
                ];
            },
            showFileList: {
                get: function () {
                    return (
                        this.value !== null && this.value !== "" && this.value !== undefined
                    );
                },
                set: function (newValue) {
                }
            }
        },
        data() {
            return {
                url: "",
                headers: {},
                imagData: {},
                dialogVisible: false,
                uploading: false
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                const token = this.$store.getters.token.token
                this.headers = {
                    Authorization: `Bearer ${token}`
                }
                this.imagData = {
                    type: this.type
                }
                this.url = '/api/image'
            },
            emitInput(val) {
                this.$emit("input", val);
            },
            handleRemove(file, fileList) {
                this.emitInput("");
            },
            handlePreview(file) {
                this.dialogVisible = true;
            },
            handelBeforeUpload(file) {
                this.uploading = true
            },
            handleUploadSuccess(res, file) {
                this.uploading = false
                this.showFileList = true;
                this.fileList.pop();
                this.fileList.push({
                    name: file.name,
                    url: file.response.data
                });
                this.emitInput(this.fileList[0].url);
            },
            handleProgress(event, file, fileList) {
                console.log('event', fileList)
            }
        }
    };
</script>

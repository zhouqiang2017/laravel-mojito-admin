<template>
    <div>
        <el-card class="box-card" v-if="info">
            <div>CPU：{{info.cpu}}</div>
            <div>内存：{{info.memory}}</div>
            <div>PHP版本：{{info.php}}</div>
            <div>mysql版本：{{info.mysql}}</div>
            <div>服务器：{{info.server}}</div>
        </el-card>
    </div>
</template>

<script>
    import {info} from "../../../api/dashboard"

    export default {
        name: 'adminDashboard',
        data() {
            return {
                info: null
            }
        },
        mounted() {
            this.requestData()
        },
        methods: {
            requestData() {
                info().then(response => {
                    this.info = response.data.data
                    console.log('adminDashboard', response)
                })
            }
        }
    }
</script>
<style lang="scss">
    .box-card {
        div {
            padding: 8px;
        }
    }

</style>

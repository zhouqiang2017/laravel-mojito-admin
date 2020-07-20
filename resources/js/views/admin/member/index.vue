<template>
    <div>
        <el-form :inline="true" :model="queryParams" size="mini" @keyup.enter.native="requestData">
            <el-form-item label="关键字">
                <el-input v-model="queryParams.keyword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="requestData" icon="el-icon-search">{{ $t('search') }}</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            v-loading="loading"
            border
            style="width: 100%">
            <el-table-column
                prop="nickname"
                label="昵称">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="联系电话">
            </el-table-column>
            <el-table-column prop="url" label="图片" align="center">
                <!-- 图片的显示 -->
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" min-width="70" height="70" alt=""/>
                </template>
            </el-table-column>
            <el-table-column prop="gender" label="性别" align="center" width="100px">
                <template slot-scope="scope">
                    <el-tag effect="plain" type="success" v-if="scope.row.gender==1">
                        <Icon class="el-icon-male"/>
                        男</el-tag>
                    <el-tag effect="plain" type="danger" v-else>
                        <Icon class="el-icon-female"/>女</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                prop="district"
                label="地区"
                align="center"
                width="100"
            >
            </el-table-column>
            <el-table-column
                prop="balance"
                label="余额"
                align="center"
                width="80"
            >
            </el-table-column>
            <el-table-column
                prop="cash"
                label="可提现"
                align="center"
                width="80"
            >
            </el-table-column>

            <el-table-column prop="is_coach" label="是否是教练" align="center" width="100px">
                <template slot-scope="scope">
                    <el-tag effect="plain" type="success" v-if="scope.row.is_coach==2">是</el-tag>
                    <el-tag effect="plain" type="success" v-else-if="scope.row.is_coach==1">已申请</el-tag>
                    <el-tag effect="plain" type="info" v-else>不是</el-tag>
                </template>
            </el-table-column>

            <el-table-column
                prop="created_at"
                label="创建时间">
            </el-table-column>
        </el-table>
        <el-pagination class="mo-page"
                       @current-change="requestData"
                       :current-page.sync="pagination.currentPage"
                       :page-size="pagination.pageSize"
                       layout="total, prev, pager, next, jumper"
                       :total="pagination.total">
        </el-pagination>
    </div>
</template>

<script>
    import {getMemberList} from "../../../api/member"
    import {responseDataFormat, tableDefaultData} from "../../../libs/tableDataHandle";
    import {queryParams} from "../../../mixins/queryParams";

    export default {
        name: "member",
        mixins: [queryParams],
        data() {
            return {
                ...tableDefaultData(),
            }
        },
        created() {
            this.requestData()
        },
        methods: {
            requestData() {
                this.loading = true
                getMemberList({...this.queryParams, page: this.queryPage}).then(response => {
                    responseDataFormat(response, this)
                })
            }
        }
    }
</script>

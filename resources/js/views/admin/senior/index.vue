<template>
    <div>
        <el-form :inline="true" :model="queryParams" size="mini" @keyup.enter.native="requestData">
            <el-form-item label="关键字">
                <el-input v-model="queryParams.keyword"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="queryParams.status" placeholder="请选择">
                    <el-option label="全部" value="">全部</el-option>
                    <el-option label="显示" value="1">显示</el-option>
                    <el-option label="隐藏" value="0">隐藏</el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="requestData" icon="el-icon-search">{{ $t('search') }}</el-button>
                <el-button type="primary" v-if="addSenior" @click="addOrUpdateHandle()" icon="el-icon-plus">{{
                    $t('add') }}
                </el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            v-loading="loading"
            border
            style="width: 100%">
            <el-table-column
                prop="name"
                :label="$t('name')">
            </el-table-column>
            <el-table-column
                prop="intro"
                show-overflow-tooltip
                label="简介">
            </el-table-column>
            <el-table-column prop="url" label="图片" align="center" width="300px">
                <!-- 图片的显示 -->
                <template slot-scope="scope">
                    <img :src="scope.row.cover" min-width="90" height="70" alt=""/>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" align="center" width="100px">
                <template slot-scope="scope">
                    <el-tag effect="plain" type="success" v-if="scope.row.status===1">显示</el-tag>
                    <el-tag effect="plain" type="info" v-else>隐藏</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                prop="sequence"
                label="排序值"
                align="center"
                width="80"
            >
            </el-table-column>

            <el-table-column
                width="180px"
                prop="created_at"
                label="创建时间">
            </el-table-column>
            <el-table-column
                align="center"
                fixed="right"
                width="180px"
                :label="$t('actions')"
            >
                <template slot-scope="scope">
                    <el-button
                        v-if="updateSenior"
                        size="mini"
                        @click="addOrUpdateHandle(scope.row.id)">{{ $t('edit') }}
                    </el-button>
                    <el-button
                        v-if="deleteSenior"
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">{{ $t('delete') }}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 弹窗, 新增 / 修改 -->
        <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="requestData"></add-or-update>
    </div>
</template>

<script>
    import {deleteSenior, getSeniorList} from "../../../api/senior"
    import {deleteSuccess, responseDataFormat, tableDefaultData} from "../../../libs/tableDataHandle";
    import {queryParams} from "../../../mixins/queryParams";
    import {hasPermission} from "../../../libs/permission";
    import AddOrUpdate from "./seniorAddOrUpdate";

    export default {
        name: "senior",
        mixins: [queryParams],
        computed: {
            addSenior() {
                return hasPermission('senior.store')
            },
            updateSenior() {
                return hasPermission('senior.update')
            },
            deleteSenior() {
                return hasPermission('senior.destroy')
            }
        },
        components: {AddOrUpdate},
        data() {
            return {
                ...tableDefaultData(),
                addOrUpdateVisible: false
            }
        },
        created() {
            this.requestData()
        },
        methods: {
            requestData() {
                this.loading = true
                getSeniorList({...this.queryParams, page: this.queryPage}).then(response => {
                    responseDataFormat(response, this)
                })
            },
            // 新增-修改
            addOrUpdateHandle(id) {
                this.addOrUpdateVisible = true;
                this.$nextTick(() => {
                    this.$refs.addOrUpdate.init(id);
                });
            },
            handleDelete(index, row) {
                const that = this
                this.$confirm(
                    "确定删除该条数据吗，删除后将无法找回？",
                    "提示",
                    {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }
                ).then(_ => {
                    deleteSenior(row.id).then(response => {
                        deleteSuccess(index, that)
                        that.requestData()
                    })
                })
            }
        }
    }
</script>

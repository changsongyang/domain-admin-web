<template>
  <div class="app-container">
    <!-- 操作按钮 -->
    <div class="flex justify-between">
      <el-button
        type="primary"
        @click="handleAddRow"
        ><el-icon><Plus /></el-icon>{{ $t('添加') }}</el-button
      >

      <el-input
        class="ml-sm"
        style="width: 260px"
        v-model="keyword"
        placeholder="输入域名"
        clearable
        @keypress.enter="handleSearch"
        @clear="handleSearch"
      >
        <template #append>
          <el-button @click="handleSearch">
            <el-icon><Search /></el-icon
          ></el-button>
        </template>
      </el-input>
    </div>

    <!-- 数据列表 -->
    <DataTable
      class="mt-md"
      v-loading="loading"
      :list="list"
      @on-success="resetData"
      @on-edit-row="handleEditRow"
      @on-row-update="handleRowUpdated"
      @on-sort-change="handleSortChange"
    />

    <!-- 翻页 -->
    <el-pagination
      class="mt-md justify-center"
      background
      layout="total, prev, pager, next"
      :total="total"
      v-model:page-size="size"
      v-model:current-page="page"
      @current-change="getData"
    />

    <!-- 编辑框 -->
    <DataFormDialog
      v-model:visible="dialogVisible"
      @on-success="handleAddSuccess"
    ></DataFormDialog>
  </div>
</template>

<script>
/**
 * created 2024-02-25
 */

import DataFormDialog from '@/components/certificate-edit/DataFormDialog.vue'
import DataTable from './DataTable.vue'

export default {
  name: 'certificate-list',

  props: {},

  components: {
    DataFormDialog,
    DataTable,
  },

  data() {
    return {
      list: [],
      total: 0,
      page: 1,
      size: 20,
      keyword: '',

      order_type: '',
      order_prop: '',

      loading: true,
      dialogVisible: false,
    }
  },

  computed: {},

  methods: {
    resetData() {
      this.page = 1
      this.getData()
    },

    async getData() {
      this.loading = true

      let params = {
        page: this.page,
        size: this.size,
        keyword: this.keyword,
        order_type: this.order_type,
        order_prop: this.order_prop,
      }

      try {
        const res = await this.$http.getCertificateList(params)

        if (res.code == 0) {
          this.list = res.data.list
          this.total = res.data.total
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },

    handleAddRow() {
      this.dialogVisible = true
    },

    handleAddSuccess() {
      this.resetData()
    },

    handleSearch() {
      this.resetData()
    },

    handleEditRow(row) {},

    async handleRowUpdated(row) {
      let params = {
        certificate_id: row.certificate_id,
      }

      const res = await this.$http.getCertificateById(params)

      if (res.ok) {
        this.list = this.list.map((item) => {
          if (item.certificate_id == res.data.certificate_id) {
            return res.data
          } else {
            return item
          }
        })
      }
    },

    handleSortChange({ column, prop, order }) {
      console.log(column, prop, order)

      // 先清空
      this.order_prop = ''
      this.order_type = ''

      // 如果有排序字段，再赋值
      if (order) {
        this.order_type = order == 'descending' ? 'desc' : 'asc'
        this.order_prop = prop
      }
 
      this.resetData()
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less"></style>

<style lang="less" scoped></style>

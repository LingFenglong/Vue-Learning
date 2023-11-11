<template>
  <div>
    <el-table
        :data="people"
        ref="singleTable"
        highlight-current-row
        style="width: 100%">
      <el-table-column
          type="index"
          width="50">
      </el-table-column>
      <el-table-column
          property="date"
          label="日期"
          width="120">
      </el-table-column>
      <el-table-column
          property="name"
          label="姓名"
          width="120">
      </el-table-column>
      <el-table-column
          property="address"
          label="地址">
      </el-table-column>
    </el-table>

    <hr/>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <hr/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        selectedDate: Date.now(),
        people: [
          {birthday: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {birthday: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {birthday: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {birthday: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {birthday: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'}
        ]
      }
    }
  }
</script>
<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" @change="changeAllCheck" :checked="isAllTodoItemDone"/> -->
      <input type="checkbox" v-model="isAllTodoItemDone"/>
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{total}} </span>
    <button class="btn btn-danger" @click="removeAllDone">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: 'none'
      }
    },
    methods: {
      // changeAllCheck(event) {
      //   this.changeAllTodoItemCheck(event.target.checked)
      // },
      removeAllDone() {
        this.removeAllTodoItemDone()
      }
    },
    computed: {
      doneTotal() {
        return this.todoList.reduce((pre, todoItem) => pre + (todoItem.done ? 1 : 0), 0);
      },
      total() {
        return this.todoList.length
      },
      isAllTodoItemDone: {
        get() {
          return this.doneTotal === this.total
        },
        set(val) {
          this.changeAllTodoItemCheck(val)
        }
      }
    },
    props: ['todoList', 'changeAllTodoItemCheck', 'removeAllTodoItemDone']
  };
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
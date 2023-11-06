<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodoItem="addTodoItem"/>
        <TodoList :todoList="todoList"/>
        <TodoFooter :todoList="todoList" @changeAllTodoItemCheck="changeAllTodoItemCheck" @removeAllTodoItemDone='removeAllTodoItemDone'/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      // || 左为null，取右值
      todoList: JSON.parse(localStorage.getItem('todoList')) || []
    }
  },
  methods: {
    addTodoItem(todoItem) {
      this.todoList.unshift(todoItem)
    },
    changeTodoItemCheck(todoItemId) {
      for (const todoItem of this.todoList) {
        if (todoItem.id === todoItemId) {
          todoItem.done = !todoItem.done
          return
        }
      }
    },
    removeTodoItem(todoItemId) {
      this.todoList = this.todoList.filter(todoItem => todoItem.id !== todoItemId)
    },
    changeAllTodoItemCheck(flag) {
      this.todoList.forEach(todoItem => todoItem.done = flag)
    },
    removeAllTodoItemDone() {
      this.todoList = this.todoList.filter(todoItem => !todoItem.done)
    },
    updateTodoItem(id, title) {
      for (const todoItem of this.todoList) {
        if (todoItem.id === id) {
          todoItem.title = title
          break
        }
      }
    }
  },
  watch: {
    todoList: {
      deep: true,
      handler() {
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
      }
    }
  },
  mounted() {
    this.$bus.$on('changeTodoItemCheck', this.changeTodoItemCheck)
    this.$bus.$on('removeTodoItem', this.removeTodoItem)
    this.$bus.$on('updateTodoItem', this.updateTodoItem)
  },
  beforeDestroy() {
    this.$bus.$off('changeTodoItemCheck')
    this.$bus.$off('removeTodoItem')
    this.$bus.$off('updateTodoItem')
  }
};
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-edit {
    color: #fff;
    background-color: orange;
    border: 1px solid darkorange;
    margin-right: 8px;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
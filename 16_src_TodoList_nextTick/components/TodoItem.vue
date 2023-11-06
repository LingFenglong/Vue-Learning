<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoItem.done" @change="changeCheck" />
      <span v-show="!todoItem.isEdit">{{todoItem.title}}</span>
      <input v-show="todoItem.isEdit" type="text" ref="input" :value="todoItem.title" @blur="update"/>
    </label>
    <button class="btn btn-danger" @click="remove">删除</button>
    <button class="btn btn-edit" v-show="!todoItem.isEdit" @click="edit">修改</button>
  </li>
</template>

<script>
  export default {
    props: ['todoItem'],
    methods: {
      changeCheck() {
        this.$bus.$emit('changeTodoItemCheck', this.todoItem.id)
      },
      remove() {
        if (confirm(`确定删除：${this.todoItem.title}？`)) {
          this.$bus.$emit('removeTodoItem', this.todoItem.id)
        }
      },
      update() {
        this.todoItem.isEdit = false
        this.$bus.$emit('updateTodoItem', this.todoItem.id, this.$refs.input.value)
      },
      edit() {
        if (!this.todoItem.hasOwnProperty('isEdit')) {
          this.$set(this.todoItem, 'isEdit', true)
        } else {
          this.todoItem.isEdit = true
        }

        this.$nextTick(() => this.$refs.input.focus())
      }
    }
  };
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #eee;
  }

  li:hover button {
		display: block;
	}
</style>
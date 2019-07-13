<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <h5>今日总任务：{{taskNum}}</h5>
    <div>
      <input 
        type="text" 
        v-model="inputValue"
        @keyup.enter="addNew"
      />
      <button @click="addNew">添加</button>
      <button @click="clear">清空</button>
    </div>
    <h3>未完成❎:{{todoNum}}</h3>
    <ul class="list">
      <li v-for="(todo,index) in todos" :key="todo.id">
        <div v-if="todo.isEditing === true">
          <input
            v-model="todo.value"
            @keyup.enter="change(todo)"
          />
          <button @click="change(todo)">修改</button>
          <button @click="cancel(todo)">取消</button>
        </div>
        <div v-else>
          <input
            type="checkbox"
            :checked="todo.isDone"
            @click="complete(index)"
          />
          <div class="todo-value">{{todo.value}}</div>
          <button @click="edit(todo)">编辑</button>
          <button @click="remove(index)">移除</button>
        </div>
      </li>
    </ul>
    <h3>已完成✅:{{doneNum}}</h3>
    <ul>
      <li v-for="done in dones" :key="done.id">
        {{done.value}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return  {
      todos: [],
      dones: [],
      inputValue: ""
    }
  },
  computed: {
    todoNum() {
      return this.todos.filter(item => !item.isDone).length
    },
    doneNum() {
      return this.dones.filter(item => !item.isDone).length
      //对应任务完成时没有及时更改值
    },
    taskNum() {
      return this.todoNum + this.doneNum
    }
  },
  methods: {
    addNew() {
      if (this.inputValue == "") {
        alert('不能为空！');
        return;
      }
      this.todos.push({
        value: this.inputValue,
        editValue: "",
        isDone: false,
        isEditing: false,
        id: Math.random().toString(36)
      })
      this.inputValue=''
    },
    complete(index) {
      //this.dones[index].isDone=!isDone;
      this.dones.push(this.todos.splice(index,1)[0])
    },
    remove(index) {
      this.todos.splice(index,1)
    },
    edit(item) {
      item.isEditing=!item.isEditing
      item.editValue=item.value
    },
    change(item) {
      item.isEditing=!item.isEditing
    },
    cancel(item) {
      item.value=item.editValue
      item.isEditing=!item.isEditing
    },
    clear() {
      this.todos=[]
      this.dones=[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
}
.todo-value {
  display: inline-block;
  width: 100px;
}
</style>

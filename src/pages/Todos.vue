//шаблон компонента
<template>
  <div class="container">
    <h1>ToDo list page</h1>
      <router-link to="/">Home Page</router-link>
      <hr>
      <div class="row lists">
        <div class="col-6 mainlist">

          <select v-model="filter">
            <option value="all">All</option>
            <option value="not-completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>

          <hr>
            <ToDoList
            v-if="filterlist.length"
            v-bind:todos ="filterlist"
            @remove-todo="removeTodo"
            />
            <p v-else>Taskboard is clear</p>

          <hr>
            <Addlist
            @add-todo="addTodo"
            />
        </div>

        <div class="col-6 childlist">
         <SubList
            v-if="subtasks.length"
            v-bind:subtasks ="subtasks"
            @remove-subtask="removeSubtask"
            />
            <p v-else>Taskboard is clear</p>

          <hr>
            <AddSubtask
            @add-subtask="addSubtask"
            />
        </div>
          </div>

      </div>

</template>

<script>    // экспортируем объект, представляющий весь функционал компонента
  import ToDoList from '@/components/Todolist'  //импортируем ToDoList в
                                          //родительский компонент для того, 
                                          //чтобы им воспользоваться.
  import Addlist from '@/components/Addtodo'  //подключаем Addtodo
  import SubList from '@/components/Subtasks/SubtaskList'
  import AddSubtask from '@/components/Subtasks/AddSubtask'
  export default {
    name: 'App',
    data() {  //Хранение данных, относящихся к приложению
      return {  //вернуть обЪект
        todos:  [{id: 1, title: 'qwe', completed: false}],
        filter: 'all',
        subtasks: [{id: 1, req: false, title: 'qwe1', completed: false, date: 11/10/2000}]
      }
    },

    _computed: {
      filterlist() {
        if(this.filter==="all") {
          return this.todos
        }
        if(this.filter==="not-completed") {
          return this.todos.filter(t => !t.completed)
        }
        if(this.filter==="completed") {
          return this.todos.filter(t => t.completed)
        }
      }
    },
  get computed() {
    return this._computed
  },
  set computed(value) {
    this._computed=value
  },

  methods: {
    removeTodo(id) {//удалеине элемента
    this.todos = this.todos.filter(t => t.id !== id)
    },
     addTodo(todo) {  //принимаем todo
    this.todos.push(todo)
     },//обращаемся к массиву и добавляем элемент
                        // в конец массива
    removeSubtask(id) {//удаление элемента
    this.subtasks = this.subtasks.filter(t => t.id !== id)
    },
     AddSubtask(subtask) {  //принимаем subtask
    this.subtasks.push(subtask)
    }
  },
  components: {
    ToDoList, Addlist, SubList, AddSubtask //регистрация компонентов
  }
}
</script>


<style scoped>
p {
  color: #ffffff;
  font-weight:bolder;
}

</style>

//шаблон компонента
<template>
  <div class="container">
    <h1>ToDo list page</h1>
      <router-link to="/">Home Page</router-link>
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

        <div class="col-6 childlist"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem ab, similique maxime obcaecati eveniet voluptatibus, incidunt sed laudantium optio, harum itaque. Sapiente consectetur excepturi laboriosam, corporis a odit unde?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem ab, similique maxime obcaecati eveniet voluptatibus, incidunt sed laudantium optio, harum itaque. Sapiente consectetur excepturi laboriosam, corporis a odit unde?</p></div>

      </div>
    </div>
</template>

<script>    // экспортируем объект, представляющий весь функционал компонента
  import ToDoList from '@/components/Todolist'  //импортируем ToDoList в
                                          //родительский компонент для того, 
                                          //чтобы им воспользоваться.
  import Addlist from '@/components/Addtodo'  //подключаем Addtodo
  export default {
    name: 'App',
    data() {  //Хранение данных, относящихся к приложению
      return {  //вернуть обЪект
        todos:  [],
        filter: 'all'
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
    this.todos.push(todo)//обращаемся к массиву и добавляем элемент
                        // в конец массива
    }
  },
  components: {
    ToDoList, Addlist    //регистрация компонентов
  }
}
</script>


<style scoped>
p {
  color: #ffffff;
  font-weight:bolder;
}
</style>

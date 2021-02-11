 <template>
 <form @submit.prevent="onSubmit">
     <input type="text" v-model="title" placeholder="some text">
     <button type="submit">Add</button>
 </form>
 </template>

 <script>
 export default {
     data() {
         return {
             title: ''
         }
     },
  methods: {
      onSubmit() {
if(this.title.trim()) {    //если в строке что-то есть, то создаётся объект todo
    const newTodo = {
        id: Date.now(),
        title: this.title,
        completed: false
    }
    this.$emit('add-todo', newTodo)//   сообщаем app компоненту о том, что создан add-todo
    this.title = '' //чистка input
}
      }
  }
 }
 </script>

 <style scoped>
 form {
     display:inline-grid;
     margin: 10px;
 }
 input {
     width: 200px;
     margin-bottom: 10px;
     border-radius: 5px;
     padding: 5px;
     border: 1px solid grey;
 }
 input:hover {
     border: 1px solid black;
 }
 button {
     width: 100px;
     margin: 0 auto;
     border-radius: 50px;
     padding: 5px;
     opacity: 80%;
 }
 button:hover {
     background-color: #06bb57;
     color:#ffffff;
     
 }
 </style>
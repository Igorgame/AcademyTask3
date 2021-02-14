<template>
 <form @submit.prevent="onSubmit">
     <div class="addels">
     <input type="text" v-model="title" placeholder="some text">
     <div class="chbx">
     <input type="checkbox" class="chbxinp">
     <label>Срочное</label>
     </div>
     <button type="submit">Add</button>
     </div>
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
    const newSubTodo = {
        id: Date.now(),
        req: this.req,
        title: this.title,
        completed: false,
        date: new Date().toISOString().substr(0, 10)
    }
        this.$emit('add-subtask', newSubTodo), //   сообщаем app компоненту о том, что создан add-subtask
        this.title = '' //чистка input
  }
      }
  }
 }
 </script>

 <style scoped>
 form {
     display:inline-flex;
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
 .chbx {
     display: inline-flex;
     margin: 0 auto;
     margin-right:20px
 }

 .chbxinp {
     width: 15px;
     height: 15px;
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
 .addels {
     padding-top: 100px;
 }
 </style>
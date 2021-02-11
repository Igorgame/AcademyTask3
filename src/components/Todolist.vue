//div - корневой элемент
//итерация массива todos с v-for
//передача элемента внутрь компонента  ToDoItem
//прослушка события remove-todo и названием метода remove-todo
//v-bind:index="i" - для вывода индекса элемента
<template>
<div>
    <ul>
        <ToDoItem class="el"
            v-for="(todo, i) in todos" :key="todo.id"
            v-bind:todo="todo"
            v-on:remove-todo="removeTodo"
            v-bind:index="i"
        />
    </ul>
</div>
</template>



// регистрируем в компоненте ToDoList
<script>
import ToDoItem from '@/components/Todoitem'    //импорт
export default {
    props: ['todos'],   //передаём элементы
    components: {
    ToDoItem    //регистрируем
    },
    methods: {
        removeTodo(id) {    //получаем id
        this.$emit('remove-todo', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: auto;
        padding: 0px;
        border-radius: 5px;
    }
    .el {
        word-break:break-all;
    }
</style>


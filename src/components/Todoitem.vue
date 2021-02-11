//динамический класс в span
//изменение условия checkbox
//кнопка для  удаления элемента (название, передаваемые данные)
//
<template>
    <li>
        <span v-bind:class="{done:todo.completed}">
            <input type="checkbox" v-on:change = "todo.completed = !todo.completed">
            {{index + 1}}
            {{todo.title}}
        </span>
        <button class="rm"  v-on:click="$emit('remove-todo',todo.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {    //валидируем входящие параметры
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>
    li {
        border: 1px solid grey;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        margin-bottom: 1rem;
        border-radius: 5px;
        color: #ffffff;
        width: auto;
    }
    li:hover {
        border: 1px solid black;
    }
    .rm {
       color: red;
       border: none;
       font-weight: bold;
       border-radius: 5px;
       width: 20px;
       height: 20px;
       padding-right: 5px;
    }
    .rm:hover {
        border:1px solid red;
    }
    .done {
        text-decoration: line-through #000000;
    }

    input {
        margin-right: 1rem;
    }

</style>
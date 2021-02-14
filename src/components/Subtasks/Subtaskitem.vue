<template>
    <li>
        <span v-bind:class="{done:subtask.completed}">
            <input type="checkbox" v-on:change = "subtask.completed = !subtask.completed">
            {{index + 1}}
            <label>{{subtask.req}}</label>
            {{subtask.title}}
            {{subtask.date}}

        </span>
        <button class="rms"  v-on:click="$emit('remove-subtask',subtask.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {    //валидируем входящие параметры
        subtask: {
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
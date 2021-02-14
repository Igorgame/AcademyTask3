<template>
<div>
    <ul>
        <SubtaskItem class="el"
            v-for="(subtask, i) in subtasks" :key="subtask.id"
            v-bind:subtask="subtask"
            v-on:remove-subtask="removeSubtask"
            v-bind:index="i"
        />
    </ul>
</div>
</template>



// регистрируем в компоненте SubtaskList
<script>
import SubtaskItem from '@/components/Subtasks/Subtaskitem'   //импорт
export default {
    props: ['subtasks'],   //передаём элементы
    components: {
    SubtaskItem    //регистрируем
    },
    methods: {
        removeSubtask(id) {    //получаем id
        this.$emit('remove-subtask', id)
        }
    }
}
</script>
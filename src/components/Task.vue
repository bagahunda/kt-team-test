<template>
  <div :class="['task', { 'task--done': task.done }]">
    <router-link tag="div" :to="`/task/${task.id}`" class="task__name"
      >{{ index }}) {{ task.name }}</router-link
    >
    <div class="task__actions">
      <unicon
        name="check"
        :fill="task.done ? '#00DC69' : '#818D97'"
        @click="toggleDone(task.id, task)"
      ></unicon>
      <unicon name="times" fill="#818D97" @click="onDelete(task.id)"></unicon>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "task",

  props: {
    task: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    }
  },

  methods: {
    ...mapActions({ onDelete: "deleteTask", updateTask: "updateTask" }),

    toggleDone(id, task) {
      const newTask = { ...task, done: !task.done };
      this.updateTask({ id, task: newTask });
    }
  }
};
</script>

<style lang="scss" scoped>
.task {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  border-bottom: 2px solid #afb7bd;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
}

.task__name {
  cursor: pointer;
}

.task--done .task__name {
  text-decoration: line-through;
}

.task__actions {
  cursor: pointer;
}
</style>

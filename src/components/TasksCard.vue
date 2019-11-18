<template>
  <div class="card">
    <div class="card__header">
      Задачи
      <unicon name="ellipsis-h" fill="#818D97"></unicon>
    </div>
    <new-task @taskAdded="onTaskAdded" />
    <div class="card__content">
      <preloader v-if="!tasks.length" />
      <task
        v-else
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index + 1"
      />
    </div>
  </div>
</template>

<script>
import NewTask from "./NewTask";
import Preloader from "./Preloader";
import Task from "./Task";
export default {
  name: "tasks-card",

  components: {
    NewTask,
    Preloader,
    Task
  },

  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  methods: {
    onTaskAdded() {
      this.$emit("taskAdded");
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 40px 24px;
  background-color: #e0e3e6;
  border-radius: 8px;
  color: #233748;
}

.card__header {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.5rem;
}

.card__content {
  position: relative;
}
</style>

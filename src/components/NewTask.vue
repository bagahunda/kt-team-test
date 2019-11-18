<template>
  <div class="add-form">
    <form class="form" @submit.prevent="onSubmit">
      <div class="form__row">
        <input
          type="text"
          placeholder="Enter a title for new task..."
          class="form__control"
          v-model="task.name"
        />
      </div>
      <div class="form__row">
        <button class="btn">Add task</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "new-task",

  data() {
    return {
      task: {
        name: "",
        description: ""
      }
    };
  },

  methods: {
    ...mapActions({ addTask: "addTask" }),

    onSubmit() {
      const createdAt = new Date();
      this.addTask({ ...this.task, createdAt })
        .then(() => {
          this.task.name = "";
          this.task.description = "";
          this.$emit("taskAdded");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

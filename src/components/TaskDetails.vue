<template>
  <div class="task-details" v-if="form">
    <div class="task-details__name">
      <editable v-model="form.name" @update="onUpdateTask" />
      <unicon name="times" fill="#818D97" @click="$router.push('/')"></unicon>
    </div>
  </div>
</template>

<script>
import Editable from "../components/Editable";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "task-details",

  components: {
    Editable
  },

  data() {
    return {
      form: {
        name: "",
        description: ""
      }
    };
  },

  created() {
    this.getTask(this.id).then(() => {
      this.form.name = this.task.name;
    });
  },

  computed: {
    ...mapGetters({ task: "getCurrentTask" }),

    id() {
      return this.$route.params.id;
    }
  },

  methods: {
    ...mapActions({ getTask: "getTask", updateTask: "updateTask" }),

    onUpdateTask() {
      const newTask = {
        ...this.task,
        name: this.form.name
      };
      this.updateTask({ id: this.id, task: newTask });
    }
  }
};
</script>

<style lang="scss" scoped>
.task-details {
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
}

.task-details__name {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
}
</style>

<template>
  <div class="home">
    <div class="task-section">
      <tasks-card :tasks="paginatedTasks" @taskAdded="onTaskAdded" />
    </div>
    <pagination
      :currentPage="currentPage"
      :perPage="perPage"
      :totalPages="totalPages"
      @nextPage="onNextPage"
      @prevPage="onPrevPage"
    />
    <div class="overlay" v-if="isTaskOpen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TasksCard from "@/components/TasksCard";
import Pagination from "@/components/Pagination";

export default {
  name: "home",

  components: {
    TasksCard,
    Pagination
  },

  data() {
    return {
      perPage: 10,
      currentPage: +this.$route.params.number || 0
    };
  },

  created() {
    // simple loop to add test data
    // for (let i = 1; i <= 20; i += 1) {
    //   const createdAt = new Date();
    //   this.addTask({
    //     name: `Задача ${i}`,
    //     done: false,
    //     createdAt
    //   });
    // }
    this.fetchTasks();
  },

  computed: {
    ...mapGetters({ tasks: "getTasks" }),

    paginatedTasks() {
      const start = this.currentPage * this.perPage;
      const end = start + this.perPage;
      return this.tasks.slice(start, end);
    },

    isTaskOpen() {
      return this.$route.name === "task";
    },

    totalPages() {
      return Math.ceil(this.tasks.length / this.perPage);
    }
  },

  methods: {
    ...mapActions(["fetchTasks", "addTask"]),

    onTaskAdded() {
      if (this.$route.params.number) {
        this.currentPage = 0;
        this.$router.push("/");
      }
    },

    onPrevPage() {
      this.currentPage -= 1;
      if (this.currentPage === 0) {
        this.$router.push("/");
      } else {
        this.$router.push(`/page/${this.currentPage}`);
      }
    },

    onNextPage() {
      this.currentPage += 1;
      this.$router.push(`/page/${this.currentPage}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 16px;
}

.task-section {
  max-width: 800px;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

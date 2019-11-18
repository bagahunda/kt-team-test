<template>
  <div class="pagination">
    <button class="btn" :disabled="!hasPrev" @click="$emit('prevPage')">
      Prev
    </button>
    <button class="btn" :disabled="!hasNext" @click="$emit('nextPage')">
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "pagination",

  props: {
    currentPage: {
      type: Number,
      required: true
    },

    perPage: {
      type: Number,
      default: 10
    },

    totalPages: {
      type: Number,
      required: true
    }
  },

  computed: {
    hasPrev() {
      return this.currentPage > 0;
    },

    hasNext() {
      return this.currentPage < this.totalPages - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  max-width: 300px;
  margin: 0 auto;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button:disabled {
  opacity: 0.5;
}
</style>

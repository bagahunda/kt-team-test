<template>
  <div class="editable">
    <div class="editable__label" v-if="label">{{ label }}:</div>
    <div class="editable__text" @click="activate" v-show="!editing">
      {{ value }} (click to edit)
    </div>
    <div editable__input v-show="editing">
      <input
        class="form__control"
        type="text"
        :value="value"
        ref="input"
        @input="$emit('input', $event.target.value)"
        @keydown.enter="onEnter"
        @blur="editing = false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "editable",

  props: {
    label: {
      type: String,
      required: false
    },

    value: {
      type: [String, Number],
      required: true
    }
  },

  data() {
    return {
      editing: false
    };
  },

  methods: {
    activate() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },

    onEnter($event) {
      this.editing = false;
      this.$emit("update", $event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.editable {
  display: flex;
  align-items: center;
}
</style>

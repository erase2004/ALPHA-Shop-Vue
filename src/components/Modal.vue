<template>
  <div class="modal-mask">
    <div
      class="modal-wrapper"
      @click.stop.prevent="closeModal"
    >
      <div
        class="modal-container"
        @click.stop.prevent=""
      >
        <div class="modal-body">
          <pre>{{ wholeData }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wholeData: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('modal-closed')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: var(--background-color);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-body {
  margin: 20px 0;
  pre {
    overflow-x: auto;
  }
}
</style>

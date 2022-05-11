<template>
  <div class="toasts">
    <div class="toast" v-for="toast in toasts" :class="toast.Class">
      <ui-icon class="toast__icon" :icon="toast.Icon" />
      <span>{{ toast.Message }}</span>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';


export default {
  name: 'TheToaster',

  data() {
    return {
      toasts: []
    };
  },

  components: { UiIcon },

  methods: {
    success(message) {
      this.addToast(message, "toast_success", "check-circle", 5000);
    },

    error(message) {
      this.addToast(message, "toast_error", "alert-circle", 5000);
    },

    addToast(message, className, icon, removingDelay) {
      this.toasts.push({ Message: message, Class: className, Icon: icon });
      this.clearToasts(this.toasts, removingDelay);
    },

    removeToast() {

    },

    clearToasts: (toasts, delay) => setTimeout(() => toasts.shift(), delay)
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>

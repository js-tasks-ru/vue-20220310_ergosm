<template>
  <div class="form-group" :class="inlineClass">
    <label class="form-group__label" v-if="label?.length > 0" >{{ label }}</label>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'UiFormGroup',

    computed: {
      inlineClass: function() {
        return this.inline ? "form-group_inline" : "";
      }
    },

    props: {
      inline: {
        type: Boolean,
        required: true,
        value: false
      },

      label: {
        type: String,
        required: false
      }
    }



  };

</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline + .form-group.form-group_inline {
  margin-left: 16px;
}

.form-group__label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}
</style>

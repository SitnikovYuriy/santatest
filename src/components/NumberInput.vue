<template>
  <div class="form-group">
    <label>{{ label }}:</label>
    <input
      v-currency="options"
      type="text"
      :value="value"
      @input="updateValue($event.target.value)"
      class="form-control"
    />
  </div>
</template>

<script>
import { CurrencyDirective, parseCurrency } from "vue-currency-input";

export default {
  name: "NumberInput",
  directives: {
    currency: CurrencyDirective
  },
  props: ["label", "value", "options"],
  methods: {
    updateValue: function(value) {
      this.$emit("input", parseCurrency(value, this.options));
    }
  }
};
</script>

<style scoped lang="scss"></style>

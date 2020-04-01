<template>
  <Calculator :title="$dict.simple" :strategy="strategy" />
</template>

<script>
import { SimpleStrategy } from "@/strategy.js";
import Calculator from "@/components/Calculator.vue";

export default {
  name: "First",
  components: {
    Calculator
  },
  data() {
    return {
      strategy: new SimpleStrategy()
    };
  }
};
</script>

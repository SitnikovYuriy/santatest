<template>
  <Calculator :title="$dict.averaging" :strategy="strategy" />
</template>

<script>
import { AveragingStrategy } from "@/strategy.js";
import Calculator from "@/components/Calculator.vue";

export default {
  name: "Second",
  components: {
    Calculator
  },
  data() {
    return {
      strategy: new AveragingStrategy()
    };
  }
};
</script>

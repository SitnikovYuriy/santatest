<template>
  <Calculator :title="$dict.arbitrage" :strategy="strategy" />
</template>

<script>
import { ArbitrageStrategy } from "@/strategy.js";
import Calculator from "@/components/Calculator.vue";

export default {
  name: "First",
  components: {
    Calculator
  },
  data() {
    return {
      strategy: new ArbitrageStrategy()
    };
  }
};
</script>

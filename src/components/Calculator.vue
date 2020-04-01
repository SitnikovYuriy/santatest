<template>
  <div class="card m-3">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      <form>
        <component
          v-for="(p, i) in strategy.params"
          :key="i"
          :is="params[i].component"
          :options="params[i].options"
          v-model="p.value"
          :label="$dict[p.name]"
        />
        <div class="form-group">
          <label>{{ $dict.result }}:</label>
          <input
            ref="inputResult"
            v-currency="currencyOptions"
            type="text"
            readonly
            class="form-control"
          />
        </div>
        <button type="button" class="btn btn-primary" :disabled="!isValid">
          {{ $dict.submit }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { CurrencyDirective, setValue } from "vue-currency-input";
import { InputParamTypes } from "@/strategy.js";
import NumberInput from "@/components/NumberInput.vue";

export default {
  name: "Calculator",
  directives: {
    currency: CurrencyDirective
  },
  components: {
    NumberInput
  },
  props: ["strategy", "title"],
  watch: {
    result(val) {
      setValue(this.$refs.inputResult, val);
    }
  },
  computed: {
    params() {
      return this.strategy.params.map(p => {
        return {
          component: this.getComponent(p.type),
          options: this.getOptions(p.type)
        };
      });
    },
    currencyOptions() {
      return this.getOptions(InputParamTypes.CURRENCY);
    },
    result() {
      return this.strategy.calculate();
    },
    isValid() {
      return (
        this.strategy.params.every(p => p.value !== null) && this.result > 0
      );
    }
  },
  methods: {
    getComponent(type) {
      switch (type) {
        case InputParamTypes.CURRENCY:
          return "number-input";
        case InputParamTypes.PERCENT:
          return "number-input";
        case InputParamTypes.INTEGER:
          return "number-input";
        default:
          throw new Error(
            `Component for InputParamType.${type} is not implemented`
          );
      }
    },
    getOptions(type) {
      switch (type) {
        case InputParamTypes.CURRENCY:
          return {
            locale: "en",
            currency: "USD",
            precision: { min: 0, max: 2 },
            allowNegative: false
          };
        case InputParamTypes.PERCENT:
          return {
            locale: "en",
            currency: { suffix: "%" },
            precision: { min: 0, max: 4 },
            allowNegative: false
          };
        case InputParamTypes.INTEGER:
          return {
            locale: "en",
            currency: null,
            precision: 0,
            allowNegative: false
          };
        default:
          throw new Error(
            `Options for InputParamType.${type} is not implemented`
          );
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>

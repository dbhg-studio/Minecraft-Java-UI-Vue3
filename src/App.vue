<script setup lang="ts">
import { McMessage } from './components/UI';
import { ref } from 'vue'

const a = ref('')

const b = () => {
  McMessage.show('Hello, world!', null, 8000);
}

</script>

<template>
  <div class="c">
    <div class="a">
      <mc-button @click="b"></mc-button>
    </div>
    <div class="a">
      <mc-input v-model:value="a"></mc-input>
    </div>
    <div class="a">

    </div>
  </div>
</template>

<style scoped lang="scss">
.c {
  .a {
    margin: 10px;
  }

  padding: 10px;
  background:#bbbbbb;
}
</style>

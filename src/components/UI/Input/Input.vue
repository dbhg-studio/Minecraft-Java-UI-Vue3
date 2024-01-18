<script lang="ts" setup>
defineProps({
    value: String,
    placeholder: String
});

const emit = defineEmits(['update:value']);

const update = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
        emit('update:value', target.value);
    }
}
</script>

<template>
    <input :value="value" @input="update" :placeholder="placeholder" class="input" />
</template>

<style scoped lang="scss">
.input {
    &:focus {
        outline: 3px solid #fff;
    }

    color: #fff;
    padding: 10px;
    width: 400px;
    height: 20px;
    border: none;
    outline: 3px solid #a0a0a0;
    background-color: #000;
}
</style>

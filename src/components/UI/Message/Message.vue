<template>
    <Transition name="message">
        <div v-show="visible" class="message" :class="type">{{ message }}</div>
    </Transition>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue';

const visible = ref(false);
const message = ref('');
const type = ref('info');
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const showMessage = (msg: string, msgType: string, timeout: number) => {
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
    }

    message.value = msg;
    type.value = msgType;
    visible.value = true;

    timeoutId = setTimeout(() => {
        nextTick(() => {
            visible.value = false
        })

    }, timeout);
}

onUnmounted(() => {
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
    }
});

defineExpose({ showMessage });
</script>

<style scoped>
.message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    padding: 10px;
    width: 400px;
    height: 20px;
    border: none;
    outline: 3px solid #555555;
    background-color: #212121;
    border-radius: 2px;
}



.message.info {
    box-shadow: inset 1px 1px rgba(255, 255, 255, 0.5),
        inset -1px -2px rgba(0, 0, 0, 0.25);
    background-color: #036a96;
}

.message.success {
    box-shadow: inset 1px 1px rgba(255, 255, 255, 0.5),
        inset -1px -2px rgba(0, 0, 0, 0.25);
    background-color: green;
}

.message.warning {
    box-shadow: inset 1px 1px rgba(255, 255, 255, 0.5),
        inset -1px -2px rgba(0, 0, 0, 0.25);
    background-color: #b98f2c;
}

.message.error {
    box-shadow: inset 1px 1px rgba(255, 255, 255, 0.5),
        inset -1px -2px rgba(0, 0, 0, 0.25);
    background-color: red;
}

.message-enter-active,
.message-leave-active {
    transition: top 0.3s ease;
}

.message-enter-from,
.message-leave-to {
    top: -50px;
}
</style>

<script lang="ts" setup>

export type version = 'old' | 'new'

const p = defineProps({
    version: {
        type: String as () => version,
        default: 'new'
    }
})

const GetFonts = () => {
    if (p.version == 'new') {
        return 'Minecraft_New'
    }
    return 'Minecraft'
}

</script>

<template>
    <div :style="`font-family:${GetFonts} ;`">
        <slot></slot>
    </div>
</template>
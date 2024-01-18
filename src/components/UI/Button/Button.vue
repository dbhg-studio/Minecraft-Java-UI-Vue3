<template>
    <div class="button">
        <span class="text">
            <slot>ABC123a Minecraft 单 我</slot>
        </span>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.button {
    .text {
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        border: 3px solid #fff;
    }

    font-size: 16pt;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAMAMMDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwX/xAAkEAACAgEEAQQDAAAAAAAAAAAAAREhMQISQVFhMnGBobHB8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDzuw/6BLmOCYUywD7LdV9BXpsJzXkBHMNe4WmcfQeH4InIFadXMfAahR+ybnElniFgAn2VtSml8EbCbWADU3Nk5jAWpw35GlzuT4AqcTOfYJ1V/Ivtk1OGsAV9P8CK7Qiw6rgA5wHlQZ3PfBp+kBcoXuxfuFehvmSQlPMdgVJrJOBM8ITKAqbdyLhOivSljwc9OptN+YA05bwDG99IAf/Z');
    background-size: cover;
    background-repeat: no-repeat;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    box-shadow: inset 2px 2px rgba(255, 255, 255, 0.5),
    inset -2px -3px rgba(0, 0, 0, 0.25);
    width: 600px;
    height: 50px;
    border: 3px solid #000;
}
</style>

<script setup>
const props = defineProps({
    id: String,
    code: String,
    image: String,
    isSelect: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['setCard'])

function onClick() {
    emit('setCard', props.id)
}
</script>

<template>
    <div
        :class="['card', { card_active: isSelect }]"
        @click="onClick">
        <img
            :src="image"
            alt=""
            width="200"
            height="200" />
    </div>
</template>

<style scoped>
.card {
    position: relative;
}

.card:not(.card_active)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(235, 172, 35);
    cursor: pointer;
}
</style>

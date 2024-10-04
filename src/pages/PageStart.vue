<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function start() {
    router.push({
        name: 'Game',
        params: {
            nickname: 'test'
        }
    })
}
</script>

<template>
    <label>
        <span>Введите ник</span>
        <input type="text" />
    </label>
    <button @click="start">Начать игру</button>
</template>

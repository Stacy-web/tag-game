<script setup>
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import axios from 'axios'
import { shuffleArray } from '@/help'

import CardGrid from '@cs/CardGrid.vue'

const shuffleCards = ref([])

onMounted(async () => {
    try {
        const { data: originalCards } = await axios.get('./src/seeders/rabbit.json')

        shuffleCards.value = shuffleArray(
            originalCards.reduce((acc, url, index) => {
                const card = { image: url, code: `rabbit_${index}` }
                return [...acc, { id: uuidv4(), ...card }, { id: uuidv4(), ...card }]
            }, [])
        )
    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="playing-area">
        <card-grid v-model="shuffleCards" />
    </div>
</template>

<style>
.playing-area {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(3, 200px);
    grid-gap: 10px;
}
</style>

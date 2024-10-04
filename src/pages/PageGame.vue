<script setup>
import { ref, onMounted, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import axios from 'axios'
import { shuffleArray } from '@/help'

import CardGrid from '@cs/CardGrid.vue'

const shuffleCards = ref([])
const rightSelectedCards = ref(0)

const props = defineProps({ nickname: String })

console.log(props.nickname)

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

// Конец игры
watch(rightSelectedCards, (current) => {
    if (current == shuffleCards.length / 2) {
    }
})
</script>

<template>
    {{ rightSelectedCards }}
    <div class="playing-area">
        <card-grid
            v-model="shuffleCards"
            v-model:score="rightSelectedCards" />
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

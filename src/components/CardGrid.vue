<script setup>
import { ref, watch } from 'vue'

import Card from '@cs/TheCard.vue'

const cards = defineModel()
const countSelectedCards = ref(0)
const rightSelectedCards = defineModel('score')
const countSteps = ref(0)

function setCurrentCard(id) {
    cards.value = cards.value.map((item) => {
        if (!item.isFlip && !item.isSelect && item.id === id) {
            return Object.assign(item, { isSelect: true })
        }
        return item
    })
    countSelectedCards.value++
}

watch(countSelectedCards, (current) => {
    if (current === 2) {
        const selectedCards = cards.value.filter((item) => item.isSelect && !item.isFlip)
        if (selectedCards[0].code === selectedCards[1].code) {
            cards.value = cards.value.map((item) => {
                if (item.code === selectedCards[0].code) {
                    return {
                        ...item,
                        isFlip: true
                    }
                }

                return item
            })

            rightSelectedCards.value++
        } else {
            setTimeout(() => {
                cards.value = cards.value.map((item) => {
                    if (!item.isFlip && item.isSelect) {
                        return {
                            ...item,
                            isSelect: false
                        }
                    }

                    return item
                })
            }, 600)
        }

        countSelectedCards.value = 0
        countSteps.value++
    }
})
</script>

<template>
    количество ходов: {{ countSteps }}
    <div class="card-grid">
        <card
            v-for="card in cards"
            :key="card.id"
            @set-card="setCurrentCard"
            :="card" />
    </div>
</template>

<style lang="scss" scoped>
.card-grid {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(3, 200px);
    grid-gap: 10px;
}
</style>

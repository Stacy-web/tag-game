<script setup>
import { ref, watch } from "vue";

import Card from "@components/TheCard.vue";

const originalCards = [
    {
        image: "https://img.freepik.com/free-vector/cute-rabbit-playing-golf-cartoon-vector-icon-illustration-animal-sport-icon-isolated-flat-vector_138676-12779.jpg?t=st=1722426522~exp=1722430122~hmac=74b33c2b0b1867c7d8e8500ba6604385d9670d16c48c07d4761053cc04496710&w=740",
        code: "001",
    },
    {
        image: "https://img.freepik.com/free-vector/cute-rabbit-stretching-cartoon-vector-icon-illustration-animal-sport-icon-isolated-flat-vector_138676-11389.jpg?t=st=1722426522~exp=1722430122~hmac=0fb69d6a1e9aafc6e19f97eab3cdc4de39ad9b3d6a4bbc592a5d5a939f705453&w=740",
        code: "002",
    },
    {
        image: "https://img.freepik.com/free-vector/cute-rabbit-playing-golf-cartoon-vector-icon-illustration-animal-sport-icon-isolated-flat-vector_138676-12783.jpg?t=st=1722426524~exp=1722430124~hmac=5c072eaed83da8b631ee84d88ad686c715420941e33f93d2c112073cef5fdd69&w=740",
        code: "003",
    },
    {
        image: "https://img.freepik.com/free-vector/cute-rabbit-sleepy-holding-coffee-cartoon-vector-icon-illustration-animal-drink-icon-isolated-flat_138676-12431.jpg?t=st=1722426525~exp=1722430125~hmac=a9787e3206aa41a3d2794981ffc1e96f27f9c43fc8afc2be421a039e9640c13e&w=740",
        code: "004",
    },
    {
        image: "https://img.freepik.com/free-vector/cute-rabbit-standing-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat-vector_138676-12851.jpg?t=st=1722426606~exp=1722430206~hmac=800f7ded1f518651624b190437941aed77ba9fcbf5288dd1298fa866e91a7e2e&w=740",
        code: "005",
    },
    {
        image: "https://img.freepik.com/free-vector/cute-rabbit-bite-carrot-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-7366.jpg?w=740&t=st=1722427011~exp=1722427611~hmac=9374aa4279009ea2e04c57873a118ea8347a79c1ed38c9bc1cb4c77196876373",
        code: "006",
    },
];

const duplicatedCards = [...originalCards, ...originalCards];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const shuffleCards = ref(shuffleArray(duplicatedCards));
const currentCards = ref([]);

function setCurrentCard(test) {
    console.log(test);
    // currentCards.value = currentCards.value.push(code);
}

// watch(
//     shuffleCards,
//     () => {
//         const length = currentCards.value.length;

//         if (length == 2) {
//             if (currentCards[0] === currentCards[1]) {
//                 shuffleCards.value = shuffleCards.value.map((card) => {
//                     if (currentCards.value.includes(card.code)) {
//                         card.freeze = true;
//                     }

//                     return card;
//                 });
//             }
//         } else {
//             setTimeout(() => {}, 1000);
//         }
//     },
//     { deep: true }
// );
</script>

<template>
    <div class="playing-area">
        <card
            v-for="card in shuffleCards"
            :key="card.code"
            @set-card="setCurrentCard"
            :="card"
        />
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

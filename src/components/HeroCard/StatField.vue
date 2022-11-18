<script setup>

const props = defineProps(['skill', 'value']);

const icon = computed (() => {

    switch(props.skill){

        case 'intelligence':

            return 'i-game-icons-brains';

        case 'strength':

            return 'dumbbell';

        case 'speed':

            return 'running';

        case 'durability':

            return '';

        case 'power':

            return 'i-game-icons-fist';

        case 'combat':

            return 'i-game-icons-crossed-swords';

        default:

            return 'question';

    }

})

</script>



<template>

    <div flex justify-between>

        <span> <i class="i-game-icons-crossed-swords" inline-block ></i>{{skill[0].toUpperCase() +skill.substring(1, skill.length)}}</span>

        <span>{{value}}</span>

    </div>

</template>
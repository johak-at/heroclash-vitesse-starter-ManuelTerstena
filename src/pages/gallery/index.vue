<script setup>

const heroCards = ref([])
const hero = ref('')

onMounted(async () => {
  console.log('Gallery geladen!')
  let response = await fetch('https://hcpb.seiwald.club/api/collections/heroes/records?perPage=999&page=1')
  let data = await response.json()
  heroCards.value.push(...data.items)
})
</script>

<template>
  <HeroCard :hero="hero" />
</template>
<script lang="ts" setup>
import EmbedCard from '../EmbedCard.vue'
import { useEmbeds } from '~/composables/content'

// Fetching embed data
const { data: embeds } = await useEmbeds()
</script>

<template>
  <div class="embed-list space-y-10">
    <div v-if="embeds && embeds.body.length">
      <h2 class="text-2xl font-bold">Embeds</h2>
      <div v-for="(embed, index) in embeds.body" :key="index">
        <EmbedCard :embed="embed" />
      </div>
    </div>
    <div v-else>
      <p>No embeds available.</p>
    </div>
  </div>
</template>

<style scoped>
.embed-list {
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>

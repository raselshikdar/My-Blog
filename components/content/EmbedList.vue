<script lang="ts" setup>
import EmbedCard from '../EmbedCard.vue'

// Mock data fetching, replace this with your actual data fetching logic
const categories = ref([
  {
    name: 'Media Embeds',
    embeds: [
      { title: 'Sample YouTube Video', url: 'https://www.youtube.com/watch?v=abc123' },
      { title: 'Sample Facebook Video', url: 'https://www.facebook.com/watch?v=xyz456' },
      { title: 'Sample m3u8 Stream', url: 'https://example.com/stream.m3u8' },
    ],
  },
  // Add more categories as needed
])
</script>

<template>
  <div class="space-y-10">
    <div v-for="(category, cKey) in categories" :key="cKey">
      <h2 class="text-2xl font-bold">{{ category.name }}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EmbedCard
          v-for="(embed, eKey) in category.embeds"
          :key="eKey"
          :embed="embed"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}
</style>

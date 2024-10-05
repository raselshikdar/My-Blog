<script lang="ts" setup>
import type { PropType } from 'vue'

// Define the embed prop interface
interface Embed {
  type: 'youtube' | 'facebook' | 'm3u8'
  url: string
}

// Define props for the embed card
defineProps({
  embed: Object as PropType<Embed>,
})

// Function to render the embed based on its type
const renderEmbed = (embed: Embed) => {
  switch (embed.type) {
    case 'youtube':
      return `<iframe width="100%" height="315" src="${embed.url}" frameborder="0" allowfullscreen></iframe>`;
    case 'facebook':
      return `<iframe src="${embed.url}" width="100%" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`;
    case 'm3u8':
      return `<video controls width="100%"><source src="${embed.url}" type="application/x-mpegURL">Your browser does not support the video tag.</video>`;
    default:
      return '';
  }
}
</script>

<template>
  <div class="embed-card mb-4">
    <div v-html="renderEmbed(embed)" />
  </div>
</template>

<style scoped>
.embed-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}
</style>

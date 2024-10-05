<script lang="ts" setup>
import { ref, computed } from 'vue'

interface Embed {
  title: string
  url: string
}

// Props for the embed card
defineProps({
  embed: Object as PropType<Embed>,
})

// Determine the platform (YouTube, Facebook, m3u8) based on the URL
const platform = computed(() => {
  if (embed.url.includes('youtube.com') || embed.url.includes('youtu.be')) {
    return 'youtube'
  } else if (embed.url.includes('facebook.com')) {
    return 'facebook'
  } else if (embed.url.endsWith('.m3u8')) {
    return 'm3u8'
  }
  return 'unknown'
})
</script>

<template>
  <div class="relative flex flex-col p-4 rounded border-2 border-gray-200/50 dark:border-gray-800/30 transition-all">
    <h2 class="text-lg font-bold mb-4">{{ embed.title }}</h2>

    <!-- Player Wrapper -->
    <div v-if="platform !== 'unknown'" class="relative w-full h-0 pb-9/16"> <!-- Aspect ratio 16:9 -->
      <!-- YouTube Embed -->
      <iframe v-if="platform === 'youtube'"
              :src="`https://www.youtube.com/embed/${new URL(embed.url).searchParams.get('v')}`"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0"
              allowfullscreen></iframe>

      <!-- Facebook Embed -->
      <iframe v-if="platform === 'facebook'"
              :src="`https://www.facebook.com/plugins/video.php?href=${embed.url}`"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0"
              allowfullscreen></iframe>

      <!-- m3u8 Player -->
      <video v-if="platform === 'm3u8'"
             controls
             class="absolute top-0 left-0 w-full h-full">
        <source :src="embed.url" type="application/vnd.apple.mpegurl">
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Fallback for unknown URLs -->
    <p v-else class="text-red-500">Unsupported embed URL</p>
  </div>
</template>

<style scoped>
/* Aspect ratio handling */
.pb-9/16 {
  padding-bottom: 56.25%;
}
</style>

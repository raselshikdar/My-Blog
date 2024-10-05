<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
  embed: {
    type: Object as PropType<{ title: string; url: string }>,
    required: true,
  },
})

const embedSource = ref('')
const platform = computed(() => {
  if (props.embed.url.includes('youtube.com') || props.embed.url.includes('youtu.be')) {
    embedSource.value = `https://www.youtube.com/embed/${new URL(props.embed.url).searchParams.get('v')}`
    return 'youtube'
  } else if (props.embed.url.includes('facebook.com')) {
    embedSource.value = `https://www.facebook.com/plugins/video.php?href=${props.embed.url}&show_text=false&width=auto`
    return 'facebook'
  } else if (props.embed.url.endsWith('.m3u8')) {
    embedSource.value = props.embed.url
    return 'm3u8'
  }
  return 'unknown'
})

const isVideo = computed(() => platform.value !== 'unknown' && platform.value !== 'm3u8')
</script>

<template>
  <div class="relative flex flex-col p-4 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
    <h2 class="text-lg font-semibold mb-4">{{ embed.title }}</h2>

    <!-- Embed Container -->
    <div class="embed-container">
      <iframe
        v-if="isVideo"
        :src="embedSource"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="embed-iframe"
      ></iframe>

      <video
        v-if="platform === 'm3u8'"
        controls
        preload="auto"
        class="embed-video"
      >
        <source :src="embedSource" type="application/vnd.apple.mpegurl" />
        Your browser does not support m3u8 streams.
      </video>

      <p v-if="platform === 'unknown'" class="text-red-500">Unsupported embed type</p>
    </div>
  </div>
</template>

<style scoped>
.embed-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
}
.embed-iframe, .embed-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  object-fit: cover;
}
</style>

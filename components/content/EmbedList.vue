<script lang="ts" setup>
import EmbedCard from '../EmbedCard.vue' // Ensure the path is correct
import type { Embed } from '~/types'

const { data: categories } = await useEmbeds() // Fetching embed data
</script>

<template>
  <div class="space-y-10">
    <div v-for="(category, cKey) in categories.body" :key="cKey">
      <SubTitle>{{ category.name }}</SubTitle>
      <div class="grid md:grid-cols-2 gap-5">
        <EmbedCard
          v-for="(embed, eKey) in category.embeds" 
          :key="eKey" 
          :embed="embed" 
        />
      </div>
    </div>
  </div>
  <NuxtLink class="font-mono no-underline opacity-70 mt-8" :to="$route.path.split('/').slice(0, -1).join('/') || '/'">
    cd ..
  </NuxtLink>
</template>

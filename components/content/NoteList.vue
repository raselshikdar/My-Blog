<script lang="ts" setup>
import { useNotes } from '~/composables/content'
import NoteCard from './NoteCard.vue'

const { data: categories } = await useNotes() // Fetch notes data using the custom composable
</script>

<template>
  <div class="space-y-10">
    <div v-for="(category, cKey) in categories.body" :key="cKey">
      <SubTitle>{{ category.name }}</SubTitle>
      <div class="grid md:grid-cols-2 gap-5">
        <NoteCard v-for="(note, nKey) in category.notes" :key="nKey" :note="note" />
      </div>
    </div>
  </div>
  <NuxtLink class="font-mono no-underline opacity-70 mt-8" :to="$route.path.split('/').slice(0, -1).join('/') || '/'">
    cd ..
  </NuxtLink>
</template>

<template>
  <div>
    <!-- Twitter Link -->
    <NuxtLink target="_blank" href="https://twitter.com/raselshikdar_" title="Visit my Twitter" class="group">
      <i-line-md-twitter class="icon icon--off" alt="Twitter Logo" />
      <i-line-md-twitter-twotone class="icon icon--on" alt="Twitter Logo" />
    </NuxtLink>

    <!-- GitHub Link -->
    <NuxtLink target="_blank" href="https://github.com/raselshikdar" title="Visit my GitHub" class="group">
      <i-line-md-github class="icon icon--off" alt="Github Logo" />
      <i-line-md-github-loop class="icon icon--on" alt="Github Logo" />
    </NuxtLink>

    <!-- New Telegram Link (Replaces Facebook) -->
    <NuxtLink target="_blank" href="https://t.me/rasel597" title="Visit my Telegram" class="group">
      <i-line-md-telegram class="icon icon--off" alt="Telegram Logo" />
      <i-line-md-telegram class="icon icon--on" alt="Telegram Logo" />
    </NuxtLink>

    <!-- Email Link -->
    <NuxtLink target="_blank" href="mailto:raselshikdar597@gmail.com" title="Contact my Email" class="group">
      <i-line-md-email class="icon icon--off" alt="Email Logo" />
      <i-line-md-email-twotone class="icon icon--on" alt="Email Logo" />
    </NuxtLink>

    <!-- Website Link -->
    <NuxtLink target="_blank" href="https://rasel.us.kg" title="Visit my Website" class="group">
      <i-line-md-external-link-rounded class="icon icon--off" alt="Website Logo" />
      <i-line-md-external-link class="icon icon--on" alt="Website Logo" />
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply hover:text-gray-700 dark:hover:text-gray-300 p-2;
}
</style>

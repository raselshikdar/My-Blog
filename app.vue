<script lang="ts" setup>
const siteMeta = useSiteMeta()
</script>

<template>
  <Html :lang="siteMeta.lang" dir="ltr">
    <Head>
      <Meta property="og:image" :content="`${siteMeta.host}/cover.png`" />
      <SchemaOrgPerson
        :name="siteMeta.name"
        image="https://res.cloudinary.com/dl6o1xpyq/image/upload/f_jpg,q_auto:best,dpr_auto,w_240,h_240/images/harlan-wilton"
        :same-as="siteMeta.sameAs"
      />
      <SchemaOrgWebSite
        :name="siteMeta.name"
        :image="siteMeta.image"
        :description="siteMeta.description"
      />
      <SchemaOrgWebPage />
    </Head>
    <Body class="text-gray-700 dark:text-gray-200 antialiased">
      <Header />
      <main class=" lg:(px-0) md:(max-w-700px pb-20 px-8) sm:(pb-16 px-6) mx-auto max-w-full px-7 py-10 pb-10 pt-24 l">
        <NuxtPage />
      </main>
      <footer class="px-5 sm:px-7 md:px-10 text-center text-gray-400 text-sm my-5">
        <div class="flex justify-center mb-3">
          <SocialIcons />
        </div>
        <p class="mb-3">
          © 2024 Rasel Shikdar. All rights reserved.
        </p>
      </footer>
    </Body>
  </Html>
</template>

<template>
  <main class="bg-[#F6F7F9] text-gray-800 min-h-screen flex justify-center pt-8 md:pt-24">
    <section class="w-[496px] max-w-full px-4 mx-auto relative">
      <ul class="absolute right-4 top-0 cursor-pointer">
        <li v-if="$i18n.locale === 'en'" @click="$i18n.locale = 'tr'">TR</li>
        <li v-if="$i18n.locale === 'tr'" @click="$i18n.locale = 'en'">EN</li>
      </ul>
      <app-tabs />
    </section>
  </main>
</template>

<script setup>
import AppTabs from '@/components/tabs/AppTabs.vue'
</script>

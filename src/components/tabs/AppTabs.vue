<template>
  <div>
    <ul class="flex flex-wrap mb-8 gap-8">
      <li
        class="font-semibold text-xl text-gray-500 border-b-2 cursor-pointer"
        v-for="(title, index) in tabsTitle"
        :key="index"
        @click.prevent="selectedTab = index"
        :class="selectedTab === index ? 'text-[#11559E] border-[#11559E]' : 'border-transparent'"
      >
        {{ title }}
      </li>
    </ul>
    <component :is="tabsContent[selectedTab]"></component>
  </div>
</template>

<script setup>
import AppForm from './form/AppForm.vue'
import AppList from './list/AppList.vue'

import { ref } from 'vue'

const tabsTitle = ['Ekle', 'Listele']
const tabsContent = [AppForm, AppList]
const selectedTab = ref(0)
</script>

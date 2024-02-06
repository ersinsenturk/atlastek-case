<template>
  <div>
    <ul class="flex flex-wrap mb-8 gap-8">
      <li
        class="font-semibold text-xl border-b-2 cursor-pointer"
        v-for="(title, index) in tabsTitle"
        :key="index"
        @click.prevent="selectedTab = index"
        :class="
          selectedTab === index
            ? 'text-[#11559E] border-[#11559E]'
            : 'text-gray-500 border-transparent'
        "
      >
        {{ title }}
      </li>
    </ul>

    <keep-alive>
      <component :is="tabsContent[selectedTab]"></component>
    </keep-alive>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppForm from './form/AppForm.vue'
import AppList from './list/AppList.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const addTabTitle = computed(() => t('tab.add'))
const listTabTitle = computed(() => t('tab.list'))

const tabsTitle = computed(() => [addTabTitle.value, listTabTitle.value])
const tabsContent = [AppForm, AppList]
const selectedTab = ref(0)
</script>

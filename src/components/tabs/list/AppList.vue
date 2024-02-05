<template>
  <div>
    <div class="bg-[#DEDEDE] text-sm font-semibold flex justify-between p-4 rounded-2xl">
      <div>Başlık & Açıklama</div>
      <div>İşlemler</div>
    </div>
    <div class="max-h-96 overflow-auto" v-if="list.length > 0">
      <app-list-item
        v-for="item in list"
        :key="item.id"
        :item="item"
        @handleDelete="deleteItemFromList"
        :pending="pending"
      />
    </div>
    <p class="p-4" v-else-if="pending">Yükleniyor...</p>
    <p class="p-4" v-else>Henüz listelenecek açıklama girilmedi.</p>
  </div>
</template>

<script setup>
import AppListItem from './AppListItem.vue'
import { onMounted } from 'vue'
import { useListStore } from '@/stores/list'
import { storeToRefs } from 'pinia'
const { fetchList, deleteItemFromList } = useListStore()
const store = useListStore()
const { list, pending } = storeToRefs(store)

onMounted(() => {
  fetchList()
})
</script>

<style lang="scss" scoped></style>

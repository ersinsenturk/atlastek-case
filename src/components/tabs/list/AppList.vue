<template>
  <div>
    <div class="bg-[#DEDEDE] text-sm font-semibold flex justify-between p-4 rounded-2xl">
      <div>Başlık & Açıklama</div>
      <div>İşlemler</div>
    </div>
    <app-list-item />
  </div>
</template>

<script setup>
import AppListItem from './AppListItem.vue'
</script>

<style lang="scss" scoped></style>

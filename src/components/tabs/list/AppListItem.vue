<template>
  <div class="flex justify-between px-4 py-2 border-b border-gray-200">
    <div class="flex-1">
      <p>Lorem Ipsum</p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
    </div>
    <div class="basis-12 flex justify-center items-center">
      <button class="transition-all duration-300 hover:scale-110">
        <delete-icon />
      </button>
    </div>
  </div>
</template>

<script setup>
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
</script>

<style lang="scss" scoped></style>

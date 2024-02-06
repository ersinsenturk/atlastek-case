<template>
  <div
    class="flex justify-between px-4 py-2 border-b border-gray-200"
    :class="{ 'opacity-30': pending }"
  >
    <div class="flex-1">
      <p>{{ item.title }}</p>
      <p>
        {{ item.description }}
      </p>
      <p>
        {{ $d(item.createdAt, 'long') }}
      </p>
    </div>
    <div class="basis-12 flex justify-center items-center">
      <button
        class="transition-all duration-300 hover:scale-110"
        @click="emits('handleDelete', item.id)"
        :disabled="pending"
      >
        <delete-icon />
      </button>
    </div>
  </div>
</template>

<script setup>
import DeleteIcon from '@/components/icons/DeleteIcon.vue'

const { item, pending } = defineProps({ item: Object, pending: Boolean })
const emits = defineEmits(['handleDelete'])
</script>

<style lang="scss" scoped></style>

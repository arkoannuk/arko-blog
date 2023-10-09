<template>
  <div class="mt-3 hstack gap-4">
    <div v-for="tag in tagSet" :key="tag">
      <RouterLink
        class="text-decoration-none text-primary"
        active-class="text-secondary"
        :to="{ name: 'Tag', params: { tag: tag } }"
      >
        #{{ tag }}
      </RouterLink>
    </div>
  </div>
  <hr />
</template>

<script setup>
const { posts } = defineProps(['posts'])
const tagSet = [...new Set(posts.flatMap((post) => post.tags))]
</script>

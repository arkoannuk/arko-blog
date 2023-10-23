<template>
  <div class="row">
    <div class="col-12 mt-5">
      <RouterLink
        v-for="tag in tagSet"
        :key="tag"
        class="text-decoration-none text-primary pe-2"
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

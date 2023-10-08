<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" class="my-5" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import SinglePost from './SinglePost.vue'

const { posts } = defineProps(['posts'])
</script>

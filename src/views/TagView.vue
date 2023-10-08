<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="posts.length">
    <TagCloud :posts="posts" />
    <PostList :posts="postsWithTag" />
  </div>
  <div v-else>
    <Spinner class="mt-5" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import getPosts from '../composables/getPosts.js'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'
import TagCloud from '../components/TagCloud.vue'

const route = useRoute()
const { posts, error, load } = getPosts()

load()

const postsWithTag = computed(() => {
  return posts.value.filter((p) => p.tags.includes(route.params.tag))
})
</script>

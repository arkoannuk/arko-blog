<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="posts.length">
    <TagCloud :posts="posts" />
    <PostList :posts="posts" />
  </div>
  <div v-else>
    <Spinner class="mt-5" />
  </div>
</template>

<script setup>
import getPosts from '../composables/getPosts.js'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

const { posts, error, load } = getPosts()
load()
</script>

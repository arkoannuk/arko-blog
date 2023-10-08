<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="post" class="mt-5">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner class="mt-5" />
  </div>
</template>

<script setup>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
// import { useRoute } from 'vue-router'

const props = defineProps({
  id: String
})

// const route = useRoute()
// const { post, error, load } = getPost(route.params.id)

const { post, error, load } = getPost(props.id)
load()
</script>

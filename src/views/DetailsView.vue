<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="post" class="mt-5">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <button @click="handleClick" class="btn btn-sm btn-primary">Delete Post</button>
  </div>
  <div v-else>
    <Spinner class="mt-5" />
  </div>
</template>

<script setup>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { projectFirestore } from '../firebase/config'
import { useRouter } from 'vue-router'
const router = useRouter()
// const route = useRoute()
// const { post, error, load } = getPost(route.params.id)

const props = defineProps({
  id: String
})

async function handleClick() {
  await projectFirestore.collection('posts').doc(props.id).delete()
  router.push({ name: 'Home' })
}

const { post, error, load } = getPost(props.id)
load()
</script>

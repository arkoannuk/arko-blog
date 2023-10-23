<template>
  <h1>Real-Time Data</h1>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import PostList from '../components/PostList.vue'

const posts = ref([])

projectFirestore
  .collection('posts')
  .orderBy('createdAt', 'desc')
  .onSnapshot((snap) => {
    let docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
    posts.value = docs
  })

//   posts.value = res.docs.map((doc) => {
//         return { ...doc.data(), id: doc.id }
//       })
</script>

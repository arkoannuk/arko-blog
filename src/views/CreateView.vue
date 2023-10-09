<template>
  <h2 class="mt-5">Create Post</h2>

  <form ref="postForm" @submit.prevent="handleSubmit">
    <label class="form-label mt-3">Title</label>
    <input v-model="title" required type="text" class="form-control" />

    <label class="form-label mt-3">Content</label>
    <textarea v-model="body" class="form-control" required rows="3"></textarea>

    <label class="form-label mt-3">Tags (hit enter to add a tag)</label>
    <input
      @keydown.enter.prevent="handleKeyDown"
      v-model="tag"
      type="text"
      class="form-control"
    />
    <div class="form-text">
      <span v-for="tag in tags" :key="tag" class="px-1">#{{ tag }}</span>
    </div>

    <div class="hstack gap-3">
      <button type="submit" class="btn btn-primary mt-3">Add Post</button>

      <div v-if="dataSending">
        <Spinner class="mt-3" />
      </div>

      <div v-if="error" class="mt-3">{{ error }}</div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import Spinner from '../components/Spinner.vue'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

const postForm = ref(null)
const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])
const error = ref(null)
const dataSending = ref(false)
const router = useRouter()

function handleSubmit() {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: timestamp()
  }

  dataSending.value = true

  async function upload(post) {
    try {
      const res = await projectFirestore.collection('posts').add(post)
      // if (!res) {
      //   throw Error('Data not sent')
      // }
      dataSending.value = false
      router.push({ name: 'Home' })
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  upload(post)
}

function handleKeyDown() {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, '') // removes all whitespace
    tags.value.push(tag.value)
  }
  tag.value = ''
}
</script>

<template>
  <div>
    <RouterLink
      class="text-decoration-none text-primary"
      :to="{ name: 'Details', params: { id: post.id } }"
    >
      <h3>{{ post.title }}</h3>
    </RouterLink>
    <p>{{ snippet }}</p>
    <div class="form-text hstack px-1 gap-2">
      <div role="button" @click="goTag($event)" v-for="tag in post.tags" :key="tag">
        #{{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  post: Object
})

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + '...'
})

function goTag(e) {
  const tagName = e.target.innerText.slice(1)
  router.push({ name: 'Tag', params: { tag: tagName } })
}
</script>

import { ref } from 'vue'

function getPosts() {
  const posts = ref([])
  const error = ref(null)

  async function load() {
    try {
      // Simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 1000)
      // })

      const data = await fetch('http://localhost:3000/posts')
      if (!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { posts, error, load }
}
export default getPosts

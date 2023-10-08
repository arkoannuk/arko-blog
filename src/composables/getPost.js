import { ref } from 'vue'

function getPost(id) {
  const post = ref(null)
  const error = ref(null)

  async function load() {
    try {
      // Simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 1000)
      // })

      const data = await fetch('http://localhost:3000/posts/' + id)
      if (!data.ok) {
        throw Error('no data available')
      }
      post.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { post, error, load }
}
export default getPost

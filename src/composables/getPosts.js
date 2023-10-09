import { ref } from 'vue'
import { projectFirestore, timestamp } from '../firebase/config'

function getPosts() {
  const posts = ref([])
  const error = ref(null)

  async function load() {
    try {
      const res = await projectFirestore.collection('posts').orderBy('createdAt').get()

      // if (!res) {
      //   throw Error('Data does not exist')
      // }
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { posts, error, load }
}
export default getPosts

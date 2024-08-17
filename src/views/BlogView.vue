<template>
  <section>
    <div class="row justify-content-between mt-4">
      <div v-for="blog in blogs" :key="blog.id" class="card mb-3">
        <img :src="blog.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-title text-uppercase">{{ blog.title }}</p>
          <p class="card-text">{{ blog.currency }} {{ blog.price }}</p>
          <select v-for="varian in blog.plain_varian" :key="varian.id">
            <option class="dropdown-item" :value="varian.value" @click="varianSelectChange">
              {{ varian.value }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      blogs: [
        {
          id: 395,
          img: 'https://via.placeholder.com/350x150',
          title: 'article test judul 2',
          slug: 'article-test-judul-2',
          body: '\n<p>test</p>',
          status: 'published',
          type: 'page',
          posted: '05 November 2023',
          by: 'sample'
        },
        {
          id: 394,
          img: 'https://via.placeholder.com/350x150',
          title: 'article test judul',
          slug: 'article-test-judul',
          body: '\n    <p>\n        <b>\n            <b>TEST</b></b></p>',
          status: 'published',
          type: 'page',
          posted: '05 November 2023',
          by: 'sample'
        }
      ]
    }
  }
  //   async beforeMount() {
  //     try {
  //       const data = await axios.get('demo.sistemtoko.com/demo/blog')
  //       this.blog = data
  //     } catch (error) {
  //       console.error(error)
  //     }
  //     console.log(this.blog)
  //   }
}
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 30% 30% 30%;
}
.card-title {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  color: rgb(37, 35, 35);
}
</style>

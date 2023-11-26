<template>
  <div>
    <Header></Header>
  </div>
  <!-- signup page stuff here--> 
  <div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'signup',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>

</style>
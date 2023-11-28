<template class="signupmain">
  <div class="container">
    <Header></Header>
    <Signup></Signup>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Signup from '@/components/SignUp.vue'

export default {
  name: 'signup',
  components: {
    Header, Signup, Footer
  },
}
</script>

<style scoped>
  .container {
    height: 100vh;
    margin: 0px;
  }
</style>
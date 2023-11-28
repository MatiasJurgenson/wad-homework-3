<template>
  <Header></Header>
  <Signup></Signup>
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
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  @media (max-width: 1000px) {
    .footer {
      position: relative;
      padding-bottom: 10vh;
    }    
  }
</style>
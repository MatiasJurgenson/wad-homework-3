<template>
  <div>
    <Header></Header>
  </div>
  <section class="flex-container">
        <div class="sides"></div>

           <div> 
            <Posts></Posts>

          
            <button id="setZeroButton" v-on:click="setZero"> Reset Likes </button>
          </div>
           

        <div class="sides"></div>
    </section>
  <div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Posts from '@/components/Posts.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'

export default {
  name: 'Main',
  components: {
    Header, Posts, Footer
  },
  methods:{

setZero: function() {
    this.$store.dispatch("setZeroAct")
    }
}
}


</script>



<style scoped>

#setZeroButton {
    margin:0 auto;
    display:block;
}

@media (min-width: 1000px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: row;
        justify-content: space-between;
    }
    
}

@media (max-width: 1000px){
    .logo {
        display: none;
    }
    .sides {
        display: none;
    }
    .mid {
        min-width: 100%;
    }

}
.mid {
    width: 40%;
    border-radius: 5px;
    height: 100%;
    
}

section {
    padding: 10px 15px;
    margin: 10px;
    display: block;
}
.flex-container {
    display: flex;
    width: 97%;

    flex-direction: row;
    justify-content: space-between;
    align-items: stretch; 
}

.flex-container p {
    margin: 1em;
    color: var(--light-text)
}

.sides {
    min-height: 100%;
    width: 200%;
    background-color: var(--primary-color);
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    
    
}

</style>
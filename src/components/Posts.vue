<template>
    <div id= "mid">
        <div class="post" v-for="post in posts" :key="post.id">
            <div class="pfptext">
                <a class="logopost"> 
                    <img class="logoimage" src="@/assets/pfp.png">
                </a>

                <span> {{post.date}} </span>
            </div>
            <img class="postImage" v-bind:src="post.picture" v-bind:alt="post.alt">
            <p> {{ post.text }} </p>
            <span> Likes: {{post.likes}} </span>
            <a>
                <img class="logoimage" src="@/assets/thumbs-up.png" :class="{ 'liked': isLiked}" v-on:click="IncreaseLike(post.id)">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Posts",
    props: {
    post: {
        type: Object,
    },
},

computed: {
    posts () {
        return this.$store.state.Posts
    }


},
data() {
    return {
        isLiked: false,
    };
},
methods: {
  IncreaseLike: function (id) {
    console.log("method")
    console.log(id)
    //this.$store.dispatch("TestAct")
    this.isLiked = !this.isLiked;
    this.$store.dispatch("IncreaseLikeAct", id)

    setTimeout(() => {
        this.isLiked = !this.isLiked;
    }, 200);
  }, 

  IncreaseLike2: function () {
    console.log("2method")
    this.$store.dispatch("IncreaseLike2Act")
  }
}
}

</script>

<style scoped>

.post { /*<a href="https://www.flaticon.com/free-icons/thumbs-up" title="thumbs up icons">Thumbs up icons created by vectorspoint - Flaticon</a>*/
    background-color: var(--primary-color);
    border: 1px solid var(--accent-color);

    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0);
    transition: box-shadow 0.4s ease, transform 0.3s ease;
    z-index: 2;
    padding: 10px;
}

.post:hover {
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
}

a + span  {
    justify-content:right;
    display: block;
    text-align: right;
    color: #ffffff;
}

.pfptext {
    display: flex;
    align-items:center;
}

.logopost {
    margin-right: 10px;
    font-size: 1.1em;
    padding: 1em;

}

.postImage{
    object-fit: contain;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.logoimage {
    width: 50px;
    height: 50px;
    cursor: pointer;
    size: 100%;
    transition: transform 0.3s ease;
}

.liked {
    transform: scale(1.2);
    transition: transform 0.2s ease;
}

</style>
import { createStore } from 'vuex'

export default createStore({
  strict: true,

  state: {
    Posts:[
      { userId: 1, id: 1, date: "Oct 6, 2023", picture: require("@/assets/TownHall.jpg"), alt: "My picture", text: "Tartu 2022", likes: 0 },
      { userId: 2, id: 2, date: "Oct 6, 2023", picture: null, alt: null, text: "Anyone knows in which room is the lab today?", likes: 0 },
      { userId: 3, id: 3, date: "Oct 6, 2023", picture: require("@/assets/catInSand.png"), alt: "My picture", text: "Fun in sand :D", likes: 0 },
      { userId: 4, id: 4, date: "Oct 6, 2023", picture: require("@/assets/catNod.gif"), alt: "My picture", text: "Yes, cats are great", likes: 0 },
      { userId: 5, id: 5, date: "Oct 6, 2023", picture: require("@/assets/hello-hi.gif"), alt: "My picture", text: null, likes: 0 },
      { userId: 6, id: 6, date: "Oct 28, 2023", picture: require("@/assets/Ascendance_of_a_Bookworm_light_novel_volume_1_cover.jpg"), alt: "My picture", text: "Going to start reading this new series today!", likes: 0 },
      { userId: 6, id: 7, date: "Oct 28, 2023", picture: require("@/assets/exited.gif"), alt: "My picture", text: "Finised reading that book and... IT WAS SO GOOD!", likes: 0 },
      { userId: 8, id: 8, date: "Oct 28, 2023", picture: null, alt: null, text: "Cats or Dogs?", likes: 0 },
      { userId: 9, id: 9, date: "Oct 28, 2023", picture: require("@/assets/doggo.png"), alt: "My picture", text: "Dogs of course", likes: 0 },
      { userId: 10, id: 10, date: "Oct 28, 2023", picture: require("@/assets/catto.jpg"), alt: "My picture", text: "Cats of course", likes: 0 }
    ]
  },
  getters: {
  },
  mutations: {
    IncreaseLikeMut: (state, postId) => {
      console.log("mutation")
      const post = state.Posts.find(p => p.id === postId)
      if (post) {
        post.likes += 1;
      }
    }, 

    setZeroMut: state => {
      state.Posts.forEach(post => {
        post.likes = 0;
      })
    },

    IncreaseLike2Mut: state => {
      console.log("2mutation")
      state.Posts.forEach(post => {
        post.likes += 1;
      })
    }, 
  },
  actions: {
    IncreaseLikeAct: (act, postId) => {
      console.log("act")
      console.log(postId)
      
      setTimeout(function() {
        act.commit("IncreaseLikeMut", postId)
      }, 1000)
    },

    setZeroAct: act => {
      setTimeout(function() {
        act.commit("setZeroMut")
    }, 1000)
    },

    testAct: act => {
      console.log("testAct")
    },

    IncreaseLike2Act: act => {
      console.log("2act")

      setTimeout(function() {
        act.commit("IncreaseLike2Mut")
      }, 1000)
    }
  }, 



  modules: {
  }
})

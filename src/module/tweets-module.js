import axios from 'axios'
const state = { 
    tweets: []
};
const getters = { 
     tweetsList: state => state.tweets
};

const actions = { 
    async fetchTweets({commit}){
      const response = await axios.get("http://localhost:3000/tweets");
      commit("setTweets", response.data)
      console.log(response.data)
    },
    async addTweets({commit}, tweets){
      const response = await axios.post("http://localhost:3000/tweets", tweets);
      commit("addNewTweets", response.data)
    }
};
const mutations = { 
     setTweets: (state, tweets) => (
        state.tweets = tweets
    ),
    addNewTweets: (state, tweets) => state.tweets.unshift(tweets),
};
export default {
    state,
    getters,
    actions,
    mutations
}
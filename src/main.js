import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data: () => ({
    cardArray: [
        {
          cardNo: "1234567891011123",
          name: "Claes Månsson",
          validThruMonth: "09",
          validThruYear: "23",
          ccv: "543",
          vendor: "bitcoin",
          isActive: true,
        },
        {
          cardNo: "1111222233334444",
          name: "Sissela Kyle",
          validThruMonth: "12",
          validThruYear: "25",
          ccv: "231",
          vendor: "ninja",
          isActive: false,
        },
        {
          cardNo: "5555222233334444",
          name: "Per Andersson",
          validThruMonth: "01",
          validThruYear: "22",
          ccv: "671",
          vendor: "blockchain",
          isActive: false,
        },
        {
          cardNo: "1111222233334444",
          name: "Babben Larsson",
          validThruMonth: "05",
          validThruYear: "26",
          ccv: "907",
          vendor: "evil",
          isActive: false,
        },
    ],

  }),
  
  methods: {
    getThisCard(cardNo) {
      return this.cardArray.find(card => card.cardNo == cardNo);
    },
    getAllCards() {
      // return this.cardArray;
      return this.cardArray.filter(card => !card.isActive)
    },
    // saveNewCard() {

    // }

  },


  router,
  render: h => h(App)
}).$mount('#app')

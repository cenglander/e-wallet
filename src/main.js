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
          vendor: "Bitcoin Inc",
        },
        {
          cardNo: "1111222233334444",
          name: "Sissela Kyle",
          validThruMonth: "12",
          validThruYear: "25",
          ccv: "231",
          vendor: "Ninja Bank",
        },
    ],

  }),
  // test med metoder nedan och array ovan här
  methods: {
    getThisCard(cardNo) {
      return this.cardArray.find(card => card.cardNo == cardNo);
    },
    getAllCards() {
      return this.cardArray;
    },
    // saveNewCard() {

    // }

  },


  router,
  render: h => h(App)
}).$mount('#app')

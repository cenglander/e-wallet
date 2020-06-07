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
    getThisCard() {
      let card = this.cardArray.find(card => card.isActive == true);
      if(card == null) {
        return false;
      } else {
        return card;
      }
    },
    getCardStack() {
      return this.cardArray.filter(card => !card.isActive)
    },
    getAllCards() {
      return this.cardArray
    },
    saveNewCard(payload) {
      this.cardArray.push(payload);
      this.cardArray.filter(card => card != payload).map(card => card.isActive = false);
    },
    activateCard(cardToActivate) {
      cardToActivate.isActive = true;
      this.cardArray.filter(card => card != cardToActivate).map(card => card.isActive = false);
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')

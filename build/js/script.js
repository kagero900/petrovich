"use strict";

var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      isActive: true,
      products: []
    };
  },
  mounted: function mounted() {
    var self = this;
    $.ajax({
      url: "js/products.json",
      method: "GET",
      success: function success(data) {

        self.products = data;
      },
      error: function error(_error) {
        console.log(_error);
      }
    });
  },
  filters: {
    removeZeros: function removeZeros(value) {
      return value.replace(/^0+/, '');
    },
    addModifier: function addModifier(img) {
      var imgName = img.split('.');
      imgName[imgName.length - 2] += '_220x220_1';

      return imgName.join('.');
    },
    roundValue: function roundValue(val) {
      return Math.round(val * 100) / 100;
    },
    unitChange: function unitChange(val) {
      if (val == "метр погонный") {
        return "погон. метрами";
      } else {
        return val + "ми";
      }
    }
  },
  methods: {
    setRetailPrice: function setRetailPrice(val) {
      if (val.isActive) {
        return val.priceRetail;
      } else {
        return val.priceRetailAlt;
      }
    },
    setGoldenPrice: function setGoldenPrice(val) {
      if (val.isActive) {
        return val.priceGold;
      } else {
        return val.priceGoldAlt;
      }
    }
  },

  components: {
    'counter-block': {
      data: function data() {
        return {
          counter: 1
        };
      },
      template: "<div class=\"stepper\">                <input class=\"product__count stepper-input\" type=\"text\" :value=\"counter\" >                <span class=\"stepper-arrow up\" v-on:click=\"increase\"></span>                <span class=\"stepper-arrow down\" v-on:click=\"decrease\"></span>              </div>\n              ",
      methods: {
        increase: function increase() {
          this.counter++;
        },
        decrease: function decrease() {
          if (this.counter > 0) this.counter--;
        }
      }
    }
  }
});
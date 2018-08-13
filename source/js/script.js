let app = new Vue ({
  el: '#app',
  data: function () {
    return {
      isActive: true,
      products: []
  }
  },
  mounted: function () {
    var self = this;
     $.ajax ({
      url: "js/products.json",
      method: "GET",
      success: function (data) {

      self.products = data
      },
      error: function(error) {
            console.log(error)
        }
     })
  },
  filters: {
    removeZeros(value) {
      return value.replace(/^0+/, '');
    },
    addModifier(img) {
      var imgName = img.split('.');
      imgName[imgName.length-2] += '_220x220_1';

      return imgName.join('.');
    },
    roundValue(val) {
      return Math.round(val * 100) / 100;
    },
    unitChange(val) {
      if (val == "метр погонный") {
        return "погон. метрами";
      } else {
        return val + "ми";
      }
    }
  },
  methods: {
    setRetailPrice (val) {
      if (val.isActive) {
        return val.priceRetail;
      } else {
        return val.priceRetailAlt;
      }
    },
    setGoldenPrice (val) {
      if (val.isActive) {
        return val.priceGold;
      } else {
        return val.priceGoldAlt;
      }
    }
  },

  components: {
  'counter-block': {
    data: function () {
      return {
        counter: 1
      }
    },
    template: `<div class="stepper">\
                <input class="product__count stepper-input" type="text" :value="counter" >\
                <span class="stepper-arrow up" v-on:click="increase"></span>\
                <span class="stepper-arrow down" v-on:click="decrease"></span>\
              </div>
              `,
    methods:{
      increase: function(){
        this.counter++;
      },
      decrease: function(){
        if(this.counter>0)
          this.counter--;
        }
      }
    }
  }
})

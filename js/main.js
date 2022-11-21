// Dall'oggetto globale Vue, estrai in una variabile la funzione "createApp"
const { createApp } = Vue;


createApp({
  // data: function () {}
  data () {
    // la funzione data deve SEMPRE ritornare un oggetto
    return {
        txt: "il mio primo esercizio con Vue con il mio amico Mario",
        fotoMario: "img/mario.jpeg",
        flexare: "d-flex justify-content-center"
    };
  },
}).mount("#app")
var app = new Vue({
    el: '#root',

    data: {
        // Array delle immagini
        arrayImg: [
            './asset/img/desert.jpg',
            './asset/img/mountain.jpg',
            './asset/img/tree_alone.jpg',
            './asset/img/trees.jpg'
        ],
        // Contatore per scorrere le immagini
        counter: 0,
        //Dato per stop-start autoplay
        interval: null,
        // Dato per cambiare On-Off
        onOff: 'On'
    },
    // La funzione autoplay parte al caricamento della pagina
    created(){
        this.generaAutoPlay()
    },
    methods: {

        // Funzione per scrollare le foto verso sinistra
        scrollLeft: function () {
            // Se uguale a zero riparto dall'ultima foto
            if (this.counter == 0) {
                return this.counter = this.arrayImg.length - 1;
            } else {
                return this.counter--
            }
        },

        // Funzione per scrollare le foto verso destra
        scrollRight: function () {
            // Se uguale all'ultimo riparto dalla foto iniziale
            if (this.counter == this.arrayImg.length - 1) {
                this.counter = 0;
            } else {
                this.counter++
            }
        },

        // Funzione per cliccare i pallini e cambiare immagine
        clickCircle: function (i) {
            this.counter = i;
        },

        //Funzione auto play
        autoPlay: function () {
            if (this.counter == 3) {
                this.counter = 0;
            } else {
                this.counter++;
            }
        },
        //Funzione per start-stop button autoplay
        generaAutoPlay: function(){
            // Se interval non è null faccio partire l'autoplay
            if(!this.interval){
               this.interval = setInterval(this.autoPlay, 3000)
               this.onOff = 'Off'
            }else{
                // Stoppo l'autoplay e riporto interval a null
                clearInterval(this.interval);
                this.onOff = 'On'
                this.interval = null;
            }
            
        }

    }
})

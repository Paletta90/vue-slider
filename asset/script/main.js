var app = new Vue(
    {
        el: '#root',

        data:{
            bg_circle: 'bg-white',
            // Array delle immagini
            arrayImg: [
                './asset/img/desert.jpg',
                './asset/img/mountain.jpg',
                './asset/img/tree_alone.jpg',
                './asset/img/trees.jpg'
            ],
            
            // Contatore per scorrere le immagini
            counter: 0
        },
        methods:{
            // Funzione per scrollare le foto verso sinistra
            scrollLeft: function(){
                // Se uguale a zero riparto dall'ultima foto
                if(this.counter == 0){
                    return this.counter = this.arrayImg.length - 1;
                }else{
                    return this.counter--
                }
            },
            // Funzione per scrollare le foto verso destra
            scrollRight: function(){
                // Se uguale all'ultimo riparto dalla foto iniziale
                if(this.counter == this.arrayImg.length - 1){
                     this.counter = 0;
                     console.log(this.counter)
                }else{
                     this.counter++
                     console.log(this.counter)
                }
            },
            // Funzione per cliccare i pallini e cambiare immagine
            clickCircle: function(elem, i){
            }
        }
    }
)
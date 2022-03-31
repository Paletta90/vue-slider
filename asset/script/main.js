var app = new Vue(
    {
        el: '#root',

        data:{
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
            scrollLeft: function(){
                // Se uguale a zero riparto dall'ultima foto
                if(this.counter == 0){
                    return this.counter = this.arrayImg.lenght - 1;
                }else{
                    return this.counter--
                }
            },
            scrollRight: function(){
                // Se uguale all'ultimo riparto dalla foto iniziale
                if(this.counter == this.arrayImg.lenght - 1){
                     this.counter = 0;
                     console.log(this.counter)
                }else{
                     this.counter++
                     console.log(this.counter)
                }
            }
        }
    }
)
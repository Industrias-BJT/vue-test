let DirectiveOn ={

    template:`
        <div>
            <h1 id="test1" class="test2" v-text='title.one'></h1>
            <p v-text='text.one'></p>
            <button @click='hi' >Buy pelic</button>
            <p>Quedan: {{text.peliculas}} peliculas</p>
        </div>
    `,
    
    data() {

        return {
            title:{
                one:'child test of Directive ON',
                title_pelicula:'Dedpool'
            },
            text:{
                one:'text of test v-on',
                name:"milton",
                peliculas:4
            } 
        }
    },
    methods:{
        
        hi(){ 
            if (this.text.peliculas>0) {
                this.text.peliculas--

                return alert(` haz adquirido la pelicula de ${this.title.title_pelicula} gracias por la compra`)
            }   
            alert('Pelicula agotada')
        }
    }

}
Vue.component('saludar-Comp',{
    template:`
        <div @click='upps'>
            <h1 v-text='titulo'></h1>
            <button @click.stop='saludar' >saludar</button>
        </div>
    `,
    data(){
        return{

            titulo: 'Saludo para ti',
            nombre:prompt('cual es tu nombre?'),
            pais:prompt('cual es tu país?'),
            clickAfuera: 'No hagas clic en el botón'
        }
    },
    methods:{
        upps (){
            return alert(this.clickAfuera)
        },
        saludar (){
            return alert(`Hola mi nombre es ${this.nombre} y soy de ${this.pais}`)
        }
    }
})
/* Vue.component('saludar-Comp',{
    template:`  <div @click='upps'>
                    <h1 v-text='titulo'></h1>
                    <button @click.stop='saludar' >saludar</button>
                </div>`,
    data(){

        return {
            titulo: 'Saludo para ti',
            nombre:prompt('cual es tu nombre?'),
            pais:prompt('cual es tu país?'),
            clickAfuera: 'No hagas clic en el botón'
        }
        
    },
    methods:{
        upps (){
            return alert(this.clickAfuera)
        },
        saludar (){
            return alert(`Hola mi nombre es ${this.nombre} y soy de ${this.pais}`)
        }
    }
})
 */
Vue.component('saludar-comp',{
    template:`
        <div @click='upps'>
            <h1 v-text='titulo'></h1>
            <button @click.stop='saludar' >saludar</button>
        </div>
    `,
    data(){
        return{

            titulo: 'Saludo para ti',
            nombre:'Milton',
            pais:'Venezuela',
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
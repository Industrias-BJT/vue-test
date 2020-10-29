Vue.component('computed-properties',{
    template:`
    <div>
    <h1 v-text='title.one'></h1>
</div>
    
    `,
    data(){
        return{
            title:{
                one:'computed Properties'
            },
            user:{
                name:'Milton',
                lastName:'Estrada',
                year:2001
            }

        }
    }
})
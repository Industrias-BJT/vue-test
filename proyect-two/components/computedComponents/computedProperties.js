Vue.component('computed-properties',{
    template:`
    <div>
    <h1 v-text='title.one'></h1>
    <p>{{fullname}}</p>
    <p>your age is {{calAge}} years</p>
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
    },
    computed:{
        fullname(){
            return `Hi ${this.user.name} ${this.user.lastName}`
        },
        calAge(){
            let date= new Date()
            let currenteYear = date.getFullYear()
            return currenteYear - this.user.year
        }
    }
})
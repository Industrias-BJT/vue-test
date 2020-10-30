Vue.component('computed-properties-get-set',{
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
                one:'computed Properties on Getter and setter'
            },
            user:{
                name:'Milton',
                lastName:'Estrada',
                year:2001
            }

        }
    },
    computed:{
        fullname:{
            get(){
                return ` ${this.user.name} ${this.user.lastName}`
            },
            set(e){
                let name = e.split(' ')

                this.user.name= name[0]
                this.user.lastName= name[1]
            }
           
        },
        calAge(){
            let date= new Date()
            let currenteYear = date.getFullYear()
            return currenteYear - this.user.year
        }
    }
})
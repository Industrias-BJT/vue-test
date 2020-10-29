let DirectiveModel = {
    template:`
        <div>
            <h1 v-text='title'></h1>
            <p v-text='message'></p>
            <h2> Tipo de ganado</h2>
            <label v-for='(animal,key) in animals' :key='key'>
                <input :value='animal' type='checkbox' v-model='myanimals'>
                {{animal}}
            </label>
            
        </div>
        `,
    data(){
        return{ 
            title:'Directiva v-model',
            message:'hello from v-model',
            animals:['vaca','bufalo','cabra'],
            myanimals:[]
        }
    }
}
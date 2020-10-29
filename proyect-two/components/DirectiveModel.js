let DirectiveModel = {
    template:`
        <div>
            <h1 v-text='title'></h1>
            <p v-text='message'></p>
            <input type='text' v-model='text'>
            <h2> Tipo de ganado</h2>
            <label v-for='(animal,key) in animals' :key='key'>
                <input :value='animal' type='checkbox' v-model='myanimals'>
                {{animal}}
            </label>
            <div v-show='myanimals.length >0'>
                <h2>Mis razas son</h2>
                    <ul>
                        <li v-for='(myrazas, key) in myanimals' :key='key' v-text='myrazas'></li>
                    </ul>
            <div>
        </div>
        `,
    data(){
        return{ 
            title:'Tipos de razas',
            message:'Elige las razas que tienes',
            animals:['vacuno','bufalino','caprino'],
            myanimals:[],
            text:'modificación simultanea',
        }
    }
}
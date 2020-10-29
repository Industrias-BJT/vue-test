let DirectivePreAndCloak = {
    template:`
        <div>
            <h2 v-text='title.one'></h2>
            <p v-pre>{{messega}}</p>
        </div>
    `,
    data(){
            return {
                title:{
                one:'He from v-pre'
                },
                messega:'Directive v-pre'
            }
    }
}
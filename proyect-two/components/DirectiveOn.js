let DirectiveOn ={

    template:`

    <div>
        <h1 v-text="title.one"></h1>
        <p v-text="paragrah.one"></p>
    </div>

    `,
    datos(){
        return {
            title:{
                one:'directive with v-on'
            },
            paragrah:{
                one:'test v-one'
            }
        }
    }

}
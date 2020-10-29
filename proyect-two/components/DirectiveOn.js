let DirectiveOn ={

    template:`
        <div>
            <h1 v-text='title.one'></h1>
            <p v-html='text.one'></p>
        </div>
    `,
    
    data() {

        return {
            title:{
                one:'child test of Directive ON'
            },
            text:{
                one:'<i>text of test v-on</i>'
            } 
        }
    }

}
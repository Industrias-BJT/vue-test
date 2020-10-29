let DirectiveOn ={

    template:`
        <div>
            <h1 v-text='title.one'></h1>
            <p v-text='text.one'></p>
            <button v-on:click="hi" >on click</button>
        </div>
    `,
    
    data() {

        return {
            title:{
                one:'child test of Directive ON'
            },
            text:{
                one:'text of test v-on'
            } 
        }
    },
    methods:{
        hi:()=>{
            alert('Hi milton')
        }
    }

}
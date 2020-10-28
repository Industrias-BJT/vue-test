let DirectiveHtml = {
    template:`
        <div>
            <h1 v-text='title'></h1>
            <p v-html='text'><p>
        </div>
    `,
    
    data() {

        return {
            text: '<i>text of test v-text two</i>',
            title:'child test of Directive HTML'
        }
    }
}
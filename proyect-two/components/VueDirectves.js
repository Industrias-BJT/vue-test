Vue.component('vue-directives',{
    template:`
        <div>
        <p v-text='text'></p>
        <a :href="link.href" :title="link.title" v-text='link.text'></a>
        <DirectiveHtml />
        <DirectiveShow />
        <DirectiveIf />
        <DirectiveFor />
        </div>
    `,
    
    data() {

        return {
            text: 'text of test v-text two',
            link:{
                text:'Vujs',
                href:'https://vuejs.org/',
                title:'documentation of vue sj'
            }
        }
    },
    components: {
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor
    }
})


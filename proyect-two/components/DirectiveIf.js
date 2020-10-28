let DirectiveIf = {
    template:`
        <div>
            <h1 v-text='title.one'></h1>
            <p v-if='show' v-html='text'><p>
            <h2 v-text='title.two'></h2>
            <p v-if='user.permession && user.vip' v-text='text_user.all'></p>
            <p v-else-if='user.permession' v-text='text_user.permession'></p>
            <p v-else-if='user.vip' v-text='text_user.vip'></p>
            <p v-else v-text='text_user.negative'></p>
           
        </div>
    `,
    
    data() {

        return {
            text: '<i>text of test v-if</i>',
            title:{
                one:'child test of Directive IF',
                two:'test in v-if / v-else / v-else-if'
            },
            show:true,
            text_user:{
                permession:'the user permession positive',
                vip:'The user is VIP',
                negative:"The user Do't permession",
                all:'the user permession positive and is VIP'
            },
            user:{
                permession:false,
                vip:true
            }
        }
    }
}
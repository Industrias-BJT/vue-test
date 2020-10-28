let DirectiveShow = {
    template:`
        <div>
            <h1 v-text='title'></h1>
            <p v-show='show' v-html='text'><p>
            <p v-show='user.permession' v-text='text_user_positive'></p>
            <p v-show='!user.permession' v-text='text_user_negative'></p>
        </div>
    `,
    
    data() {

        return {
            text: '<i>text of test v-show</i>',
            title:'child test of Directive SHOW',
            show:true,
            text_user_positive:'Permession positive',
            text_user_negative:'Permession negative',
            user:{
                permession:false
            }
        }
    }
}
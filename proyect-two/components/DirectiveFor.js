let DirectiveFor = {
    template:`
        <div>
            <h1 v-text='title.one'></h1>
            <p v-html='text'></p>
            <h2 v-text='title.two'></h2>
            <ul>
                <li v-for='colors in list' v-text='colors'></li>
            </ul>
            <h2 v-text='title.trhee'></h2>
            <ul>
                <li v-for='(user,key) in user_1' :key='index'>
                    {{key}}:{{user}}
                </li>
            </ul>
            <h2 v-text='title.four'></h2>
            <ul>
                <li v-for='(users,key) in users' :key='index'>
                    {{key}}:{{users}}
                </li>
            </ul>
        </div>
    `,
    
    data() {

        return {
            title:{
                one:'child test of Directive FOR',
                two:'list in array',
                trhee:'list in objtect',
                four:'list of users in array and object'
            },
            text: '<i>text of test v-for</i>',
            list:[
                'red',
                'yellow',
                'blue',
                'green',
                'pink'
            ],
            user_1:{
                name:'milton',
                last_name:'estrada',
                age:18
            },
            users:[
                {
                    name:'milton',
                    last_name:'estrada',
                    age:18
                },
                {
                    name:'keren',
                    last_name:'León',
                    age:22
                },
                {
                    name:'milton',
                    last_name:'León',
                    age:32
                }
            ]
        }
    }
}
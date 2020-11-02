let MovieComp = {
    template:`
        <div>
        <img :src='cover'></img>
        <h2 v-text='title'></h2>
        <p v-text='synopsis'></p>
        <button v-text="like ? 'Favorite' : 'Add to Favorite' "></button>
        </div>
    `,
    props:{
        
            id:{
                type:Number,
                required:true,
            },
            title:{
                type:String,
                required:true
            },
            synopsis:{
                type:String,
                dafault:'No posee synopsis'
            },
            cover:{
                type:String,
                required:true
            },
            like:{
                type:Boolean,
                required:true,
                default(){
                    return false
                }


            },
        
    }
}
let MovieComp = {
    template:`
        <div>
        <img :src='cover'></img>
        <h2 v-text='title'></h2>
        <p v-text='synopsis'></p>
        <button @click="toggleLike" v-text="like ? 'Favorite' : 'Add to Favorite' "></button>
        <hr>
        </div>
    `,
    props:{
            id:{
                type: Number,
                required:true
            },
            title:{
                type: String,
                required:true
            },
            synopsis:{
                type:String,
                required:true
            },
            cover:{
                type:String,
                required:true
            },
            like:{
                type:Boolean,
                required:true,
                default (){
                    return false
                }
            }
        },
        methods:{
            toggleLike(){
                let data= {
                    id:this.id,
                    like:!this.like
                }
                this.$emit('toggleLike', data)
            },
        }
}
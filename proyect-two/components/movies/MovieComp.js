let MovieComp = {
    template:`
        <div>
        <img :src='cover'></img>
        <h2 v-text='title'></h2>
        <p v-text='synopsis'></p>
        <button @click="toggleLike" :class="btnStatus" v-text="like ? 'Favorite' : 'Add to Favorite' "></button>
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
        data(){
            return{

                Myclass:{
                    btnLike:true,
                    btnLight:false
                }

            }
        },
        computed:{
            btnStatus(){
                return this.like ? 'btnLike' : 'btnLight'
            }
        },
        methods:{
            toggleLike(){
                    let movie = this.$parent.movies.find(m=>m.id==this.id)
                    movie.like=!this.like
                    if (!this.like) {
                        this.$parent.showLike=true
                    }
                    
            },
        },


}
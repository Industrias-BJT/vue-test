let MovieComp = {
    template:`
        <div>
        <img :src='cover | coverURL'></img>
        <h2 >{{title | mayus}}</h2>
        <p>{{synopsis | character}}</p>
        <div class='contentBTN'>
            <button @click="toggleLike" :class="btnStatus" >
            <span v-text="like ? 'Favorite' : 'Add to Favorite' "></span>
            <i  :class="heartStatus" class=" fa-heart"></i>
            </button> 
            <router-link :to="{name:'pelicula',params:{id}}" class="routerLink">Movie Details</router-link>
        </div>
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
                    btnLight:false,
                    far:false,
                    fas:true
                }

            }
        },
        computed:{
            btnStatus(){
                return this.like ? 'btnLike' : 'btnLight'
            },
            heartStatus(){
                return this.like ? 'fas' : 'far'
            }
        },
        filters:{
            mayus(value){
                return value.toUpperCase()
            },
            character(value){
                return value.substring(0, 100)+' ...'
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
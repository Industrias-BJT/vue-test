let MovieComp = {
    template:`
        <div>
        <img :src='cover'></img>
        <h2 >{{title | reverse | mayus}}</h2>
        <p>{{synopsis | character}}</p>
        <button @click="toggleLike" :class="btnStatus" >
        <span v-text="like ? 'Favorite' : 'Add to Favorite' "></span>
        <i  :class="heartStatus" class=" fa-heart"></i>
        
        </button> 
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
                    btnLight:false,
                    far:false,
                    fas:true
                }

            }
        },
        watch:{
            like (newVal,oldVal){
                console.log(newVal,oldVal)
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
            reverse(value){
                let word = value.split('')
                return word.reverse().join('')
            },
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
const APIKEY = '9b41d63c8dc37a4c09a8b3adbbd44f67'
const BASEURL = 'https://api.themoviedb.org/3/'
Vue.component('movie-app',{
    template:`
    <div class='compProps'>
            <h5>{{user.name}} {{user.lastName}}</h5>
            <SearchComp v-movel="searchMovies" />
            <h1 v-text='title.one'></h1>
            <div v-show="!Object.keys(searchMovies).length">
                <div class="conteiner">
                    <div class="arow">
                        <MovieComp :ref="'movie-'+movie.id" class='movieComp' v-for='(movie, key) in movies' 
                        :key='key' 
                        :id='movie.id' 
                        :title='movie.title' 
                        :synopsis='movie.overview' 
                        :cover='movie.poster_path'
                        :like='movie.like'
                    />
                    </div>
                </div>
                <button v-for="(n,index) in total_pages" :key='index' class='btn_page' :class="{
                    'btnLight': n != page,
                    'btnLike': n == page
                }"
                @click='n_page(n)'
                >{{n}}
            </button>
            </div>
            
        </div>
    `,
    data(){
        return{
            title:{
                one:'movies'
            },
            movies:[
               
            ],
            searchMovies:{

            },
            showLike:false,
            user:{
                name:'Milton',
                lastName:'Estrada',
            },
            oldUser:null,
            page:1,
            total_pages:null,
            n:[]
        }
    },
    components:{
        MovieComp,
        movieFav,
        SearchComp
    },
    watch: {
        page () {
            this.getPopularMovies()
        }
    },
    mounted(){
        let locationURL = new URL(window.location.href)
        this.page = locationURL.searchParams.get('page') || 1
    
        this.getPopularMovies()
    },
    methods:{
        setNameUser(e){
            this.user.name =e.target.value
        },
        setLastNameUser(e){
            this.user.lastName =e.target.value
        },
        n_page (page) {
            this.page = page
            this.getPopularMovies() 
        },
        getPopularMovies (){
            const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.page}`
            
            fetch(URL)
                .then(response => response.json())
                /* .then(data =>{
                    console.log(data)
                }) */
                .then(({results,page,total_pages}) => {
                    this.total_pages=total_pages
                    this.movies=results.map(m=>{
                        m.poster_path=`https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`
                        m.like=false
                        return m
                    })
                })
               
        }

    }
})
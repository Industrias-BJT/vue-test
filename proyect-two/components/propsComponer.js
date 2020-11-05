Vue.component('props-com',{
    template:`
    <div class='compProps'>
        <h1 > Peliculas Props</h1>
        <div class="conteiner">
            <div class="arow">
                <MovieComp :ref="'movie-'+movie.id" class='movieComp' v-for='(movie, key) in movies' 
                :key='key' 
                :id='movie.id' 
                :title='movie.title' 
                :synopsis='movie.synopsis' 
                :cover='movie.cover'
                :like='movie.like'
            />
            </div>
        </div>
            
            <movieFav ref='movieFav' :show.sync='showLike'/>
        </div>
    `,
    data(){
        return{
            movies:[
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like:false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like:false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    synopsis:'Woody siempre ha tenido claro cuál es su labor en el mundo y cuál es su prioridad: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, Woody descubrirá lo grand…',
                    cover: 'http://d1poh340f4imgl.cloudfront.net/upload/images/534x326/2015/05/20/66668be7c7f6ef8faea78a39ff2c8f89_534x326.jpg',
                    like:false
                }
            ],
            showLike:false,
        }
    },
    components:{
        MovieComp,
        movieFav
    },
    mounted(){
        this.$refs.movieFav.message='cambio'
        console.log(this.$refs.movieFav.message)
    }
})
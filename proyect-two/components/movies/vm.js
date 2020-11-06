Vue.mixin({
    filters:{
        coverURL(str){
            return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`
        }
    }
})
let test={
    template:`<h1>test from Router Vue</h1>`
}
let routes =[
    {
        path:'/test',
        name:'test',
        component:test
    },
    {
        path:'/pelicula/:id',
        name:'pelicula',
        component:detailsMovie
    },
    {
        path : '/',
        name:'home',
        component:MovieAPp
    }
]
let router = new VueRouter({
    mode:'history',
    routes
})
let vm = new Vue({
    el: '#app',
    router,
    data(){
        return {
            title:{
                one:'Test on v-cloak',
                two:'Compiuted Propierties',
                three:'Peliculas Props'
            }
        }
    }
    })
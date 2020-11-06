let SearchComp = {
    template:`
    
    <div class="contentForm">
        <form @submit.prevent="search" class="form">
           <div class="contentSearch">
                <div v-show="query" class="input-grup-append">
                    <span @click="restSearch" class="btn-neg">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
                <input 
                type="text" 
                class="input_form"
                placeholder="Buscar"
                aria-label="Busqueda"
                v-model="query">
                <div class="input-grup">
                    <button class="btn-grup-text">
                        <i class="fas fa-search"
                        aria-hidden="true"></i>
                    </button>
                </div>
           </div>
        </form>
    </div>

    `,
    data(){
        return{
            query:'',
            page:1
        }
    },
    methods:{
        search(){
            let URL = `${BASEURL}search/movie?api_key=${APIKEY}&language=es-MX&query=${this.query}&page=${this.page}`
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    this.$emit('input',data)
                })
        },
        n_page(page){
            this.page=page
            this.search()
        },
        restSearch(){
            this.query=''
            this.page=1
            this.$emit('input',{})
        }

    }
}
let SearchComp = {
    template:`
    
    <div class="contentForm">
        <form @submit.prevent=search class="form">
           <div class="contentSearch">
                <div v-show="query" class="input-grup-append">
                    <span class="btn-neg">
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
            query:''
        }
    },
    methods:{
        search(){
            let URL = `${BASEURL}search/movie?api_key=${APIKEY}&language=es-MX&query=${this.query}`
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    this.$emit('input',data)
                })
        }
    }
}
let movieFav = {
    template:`
    <div class="movieFav-wrapper">
        <div :id="'fav-' + _uid" class="movieFav">
        
        </div>
    </div>`,
    mounted(){
        let vm=this
        let $element = document.getElementById(`fav-${this._uid}`)
        $element.addEventListener('animationend', function() {
            vm.$emit('hideFav',false)
            
        })
        
    }
    
}
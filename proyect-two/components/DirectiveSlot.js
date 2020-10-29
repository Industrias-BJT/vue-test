let DirectiveSlot = {
    template:`
    <div>
            <h2 v-text='title.one'></h2>
            <btn-com>
            
            <template #quiero>Quiero</template>
            <template #cantara>tanque</template>
            
            </btn-com>
    </div>
    
    `,
    data(){
        return {
            title:{
                one:'Directive v-slot'
            }
        }
    },
    components:{
        btnCom
    }
}
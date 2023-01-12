console.log('vue ok',Vue)

const app = Vue.createApp({
    data(){
         return{
            data
            
         }
       
    },
    
    computed: {
        myimage:{
            get(){
                return 'img/avatar' + this.data.user.avatar + '.jpg'
            }
        },
        profiles:{
            get(){
                return 'img/avatar' + this.data.contacts.avatar + '.jpg'
            }
        }
    }
})


app.mount('#root')
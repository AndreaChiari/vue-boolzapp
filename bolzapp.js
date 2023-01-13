console.log('vue ok',Vue)

const app = Vue.createApp({
    data(){
         return{
            data,
            currentindex: 0,
         
         }
       
    },
    methods:{
        
    },
    computed: {
        myimage:{
            get(){
                return 'img/avatar' + this.data.user.avatar + '.jpg'
            }
        },
    }
      
})


app.mount('#root')
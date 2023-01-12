console.log('vue ok',Vue)

const app = Vue.createApp({
    data(){
         return{
            data
            
         }
       
    },
    method:{
        addName(index) {
                data.contacts[index].map((info) => {
                return `'img/avatar' + ${info.name} + '.jpg'`
              });
             
        }
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
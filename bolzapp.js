console.log('vue ok',Vue)

const dt = luxon.DateTime;
const app = Vue.createApp({
    data(){
         return{
            newChat: '',
            filterWord: '',
            currentindex: 0,
            user: {
                name: 'Andrea',
                avatar: '_7'
              },
              contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
              ]
         }
       
    },
    methods:{
        changeIndex(index){
            this.currentindex = index;
        },

        sendMessage(){
            this.contacts[this.currentindex].messages.push({date: this.getNow(), text: this.newChat, status:'sent'})
            setTimeout(()=>{
                const chat = {
                    date: this.getNow(),text: 'Ok', status:'received'
                }
                this.contacts[this.currentindex].messages.push(chat);
                
            },2000)
            },

        getNow(){
            return dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)
        },
      },
        computed: {
            myimage:{
                get(){
                    return 'img/avatar' + this.user.avatar + '.jpg'
                }
            },
            currentContact(){
                return this.contacts[this.currentindex];
            },
            filterUsers(){
              
              return this.contacts.filter(user => user.name.toLowerCase().includes(this.filterWord)) 
              }

            
        
      
      }})
    
        
    
    
    app.mount('#root')
           
        
        


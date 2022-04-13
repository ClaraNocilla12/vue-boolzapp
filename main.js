var app = new Vue(

    {
        el: "#app",

        data: {

            contacts: [
                {
                    name: 'Michele',
                    avatar: './asset/img-boolzap/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                             on: true
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                             on: true
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './asset/img-boolzap/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            on: true
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            on: true
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './asset/img-boolzap/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            on: true
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            on: true
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './asset/img-boolzap/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            on: true
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './asset/img-boolzap/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            on: true
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './asset/img-boolzap/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            on: true
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './asset/img-boolzap/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            on: true
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './asset/img-boolzap/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            on: true
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            on: true
                        }
                    ],
                }
            ],


            indexChanged:0,
            messageText:'',
            searchedName:'',
            currentHour: dayjs().$H,
            currentMinute: dayjs().$m,
            

        },

        created(){
            console.log(dayjs())
        },



        methods: {

            changeIndex: function(index) {
                this.indexChanged = index;
                
            },

            newMessage: function(){
                let object={
                message: this.messageText,
                status: 'sent',
                on: true
                
                
                }
                this.messageText='',
                this.contacts[this.indexChanged].messages.push(object);

                let response={
                    message:'ok',
                    status:'receved',
                    on: true
                }

                

                setTimeout(
                    () => {
                        this.contacts[this.indexChanged].messages.push(response);},
                        3000);
                    

                
                
            },

            searchName: function(element){
                this.contacts.forEach(element =>{
                    
                    if (element.name.toLowerCase().includes(this.searchedName.toLowerCase())){
                        element.visible=true;
                    }else{
                        element.visible = false;
                    }
                },
                
                    )
                
            },

            deleteMessage: function(element){
                element.on=false
                console.log(element.on)
            },

            
        

            

          
        }

    })
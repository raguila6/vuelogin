import { ref } from "vue"
import { collection, query, orderBy ,onSnapshot, addDoc, } from "firebase/firestore";


import {db} from "./useFirebase"

import useAuth from "./useAuth"



const {user} = useAuth()

const messages = ref([])

const useChat = () => {
   const messsageCollection = collection(db,'messages')
   
   const chatQuery = query(messsageCollection, orderBy('createdAt', 'desc'))

   const unsubscribe = onSnapshot(chatQuery, (querySnapshot) =>{
        messages.value = []
        querySnapshot.forEach((doc) =>{
            messages.value.push({id: doc.id, ...doc.data()})
        })
   })

   const sendMessage = async message => {
       await addDoc(messsageCollection, {
           text: message,
           author: user.value,
           createdAt: new  Date(),
       })
   }

   return {messages, unsubscribe, sendMessage}
}

export default useChat
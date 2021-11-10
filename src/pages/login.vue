<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router";
import useAuth from "../composable/useAuth";
import useError from "../composable/useError";
const { isAuthenticated,login} = useAuth();
const username = ref("");
const password = ref("");

const router = useRouter();

const logginIn = () => {
    login(username.value, password.value);
    if(isAuthenticated.value){
       router.push("/");
    } else {
        setError("Invalid username or password!")
    }
};

const {error, setError} = useError();

import { useTimeout, promiseTimeout } from "@vueuse/core";
const { ready, start } = useTimeout(3000, { controls: true });


</script>

<template>
    
   
        <div class="flex flex-col items-center h-screen-nonav ">


             <h2 class="text-xl font-medium">Log onto Account</h2>

             Logged in : {{isAuthenticated}}
        <div class="flex bg-gray-200 shadow-2xl rounded-2xl">   
            <img class="h-60" src="../assets/loginpg.png"  alt="loginBG">

            <form @submit.prevent="logginIn" class="flex flex-col items-center justify-center p-4 space-y-4">
                <input type="text" class="p-2 border-2 rounded-full " placeholder="Username" v-model="username">
                <input type="password" class="p-2 border-2 rounded-full" placeholder="Password" v-model="password">
                <button  @submit.prevent="logginIn" type="submit" class="px-6 py-4 text-yellow-200 bg-indigo-600 rounded-xl " >Login</button>
            </form>

        </div>
            <div v-if="!ready && error" class="absolute w-1/2 p-2 text-center bg-red-400 rounded-full bottom-2 right-2">
                {{error}}
            </div>
        </div>

        
    
</template>
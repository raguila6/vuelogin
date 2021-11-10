<script setup>
    import useAuth from '../composable/useAuth';
    import {useRouter} from "vue-router";
    const {isAuthenticated , logout} = useAuth(); 

    const router = useRouter();

    const loggingOut = () => {
    logout();
    router.push("/");
    };

</script>

<template>
     <div class="text-yellow-300 bg-indigo-700">
          <div class="container flex items-center justify-between mx-auto">
            <h1 class="text-2xl font-medium tracking-tight ">
               Vue<span class="font-normal">FakeAuth</span>
                   
            </h1>
            <nav>
                <ul class="flex space-x-4">
                    <router-link to="/">
                    <li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">Home
                    </li>
                    </router-link>

                    
                    <router-link to="./About"><li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">About   
                    </li>
                    </router-link>

                    
                    <router-link v-if="!isAuthenticated" :to="{ path: '/login', name: 'Login' }">
                    <li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">Login
                    </li>
                    </router-link>

                    <div  v-else class="flex">
                    <router-link   :to="{ path: '/secret', name: 'Secret' }">
                    <li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">Secret
                    </li>
                    </router-link>

                    <button  @click="loggingOut">
                    <li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">
                    Logout
                    </li>
                    </button>
                    </div>

                </ul>
            </nav>
        </div>
     
     </div>
</template>
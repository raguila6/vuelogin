<script setup>
import useAuth from '../composable/useAuth';
const { isAuthenticated,user} = useAuth();
</script>

<template>
    
    <div class="flex flex-col items-center h-screen-nonav ">
        <h2 class="text-xl font-medium">Welcome <span v-if="isAuthenticated">{{ user }}</span></h2>
    <img src="../assets/welcomebg.png"  alt="AboutBG">
    </div>
</template>
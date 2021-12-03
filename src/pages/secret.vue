<template>

<h1 class="mt-5 text-3xl font-medium tracking-wide text-center">Cool Chat </h1>

<div class="min-h-[600px] w-full mt-6 rounded-lg shadow-md flex flex-col justify-between bg-green-300">

    <ul class="p-5 space-y-3 ">
        <li v-for="n in 4"> 
            <div class="flex justify-between px-3 bg-gray-300 rounded-xl">
                <span>Message</span><span>by Author Name</span>
            </div>
        </li>
    </ul>

    <div>
        <input class="w-full p-5 rounded-xl focus:outline-none focus:bg-red-300 " type="text" placeholder="Type a message!!!!">
    </div>

</div>

</template>
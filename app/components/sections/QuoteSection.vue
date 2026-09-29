<script setup>
defineProps(['image'])
</script>
<template>
    <div class="min-h-screen h-auto w-full relative flex items-center justify-center">
        <div class="relative z-1">
            <div class="leading-8 text-base text-center px-4 md:px-80 md:leading-10 relative z-1">
                “Our work ahead is ambitious, but the potential is extraordinary. Join us in building a more dynamic,
                equitable and imaginative future for cities after dark.”
            </div>
            <div class="text-sm text-center mt-4">
                – Dr Anna Marazuela Kim, Nighttime Foundation
            </div>
        </div>
        <div class="w-full h-[20%] bg-gradient-to-b from-black absolute top-0 left-0 z-1">
        </div>
        <div class="absolute top-0 left-0 w-full h-full md:bg-fixed transition brightness-50 bg-cover z-0"
            :style="`background-image:url(${image?.url});`">


        </div>
    </div>
</template>
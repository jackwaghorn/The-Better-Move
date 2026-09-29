<script setup lang="ts">
const props = defineProps(['intro', 'cityQuote', 'cityImage', 'cityText', 'belongingQuote', 'belongingImage', 'belongingText', 'spaceText', 'spaceImage'])
</script>
<template>
    <section id="studies" class="flex flex-col gap-12">
        <div class="text-base md:text-base  text-center px-4 md:px-50 py-10 pt-30 md:pt-40">
            <PrismicRichText :field="intro" />
        </div>

        <!-- Belonging & Diversity -->
        <div class="p-4 md:p-20 w-full">
            <div class="box rounded-4xl w-full p-4 py-20 md:py-0 md:p-10 pb-0 relative grid md:grid-cols-2 gap-8">
                <!-- Heading -->
                <div class="absolute top-0 w-full flex items-center justify-center -mt-6">
                    <div class="text-base text-green bg-dark border rounded-full font-bold text-center mx-auto px-8">
                        Belonging & Diversity</div>
                </div>

                <!-- Quote -->
                <div class=" md:py-30 order-1 flex flex-col justify-between">
                    <p class="mb-4 font-bold mt-2">72.7% of non-binary and gender-queer respondents to our survey named ‘feeling unwelcome to
                        organize events’ or ‘feeling unwelcome to participate’ among their top two barriers to engaging
                        with nightlife.
<br><br>
                        0% cisgender respondents identified those feelings among their top 2 two barriers.
</p>
<div >
    <div class="text-sm italic">
                            <PrismicRichText :field="belongingQuote" />
    </div>

                        <p class="text-sm mt-2 opacity-50">— Mycah, Magnet Board</p>
</div>
                    

                </div>
                <!-- Case Study -->
                <div class="md:py-30 order-3 md:order-2">
                    <h3 class="text-base font-bold">Global Case Study: </h3>
                    <div class="text-sm flex flex-col gap-4">
                        <strong>
                            The Culture And Community Spaces At Risk Office, London</strong>
                        <p>
                            How might a government office protect marginalized cultural spaces and hold institutions
                            accountable?
                        </p>
                        <PrismicRichText :field="belongingText" />
                    </div>
                </div>
                <!-- Imagine -->
                <div
                    class="text-center order-2 border-t border-[#e8fcd45e] text-sm h-10 text-green opacity-50 flex items-center justify-center font-bold">
                    <span class="-mt-10 bg-dark px-2">Imagine</span>
                </div>
                <!-- Design -->
                <div
                    class="text-center border-t order-4 border-[#e8fcd45e] text-sm h-10 text-green opacity-50 flex items-center justify-center font-bold">
                    <span class="-mt-10 bg-dark px-2">Design</span>
                </div>
            </div>
        </div>


        <!-- Space & Infrastructure -->
        <div class="p-4 md:p-20 w-full">
            <div class="box rounded-4xl w-full p-4 py-20 md:py-0 md:p-10 pb-0 relative grid md:grid-cols-2 gap-8">
                <!-- Heading -->
                <div class="absolute top-0 w-full flex items-center justify-center -mt-6">
                    <div class="text-base text-green bg-dark border rounded-full font-bold text-center mx-auto px-8">
                        Space & Infrastructure</div>
                </div>

                <!-- Chart -->
                <div class=" md:py-30 order-1 min-h-[80vh] md:min-h-auto">
                    <div class="relative">

                        <NuxtImg class="w-full" :src="belongingImage?.url"
                            alt="Difusión del Scrabble en Av. Corrientes durante “La Noche de las Librerías” / Roberto Fiadone" />

                    </div>
                    <p class="text-sm font-bold mt-5">Types of nightlife infrastructures most desired in Boston by
                        participants</p>
                    <p class="text-sm">Magnet board question: What public infrastructures do you want to see at
                        night?
                    </p>
<div class="aspect-5/3 w-full">

                        <UiDataChart />
</div>
                          

                        


                </div>
                <!-- Case Study -->
                <div class="md:py-30 order-3 md:order-2">
                    <h3 class="text-base font-bold">Global Case Study: </h3>
                    <div class="text-sm flex flex-col gap-4">
                        <strong>
                            Noche de las Librerías (Night of the Bookstores), Buenos Aires</strong>
                        <p>
                            How might city partnerships transform everyday spaces like sidewalks into vibrant nightlife
                            destinations?
                        </p>
                        <div class="relative">
                            <NuxtImg class="grayscale aspect-6/4 object-cover" :src="spaceImage?.url"
                                alt="Difusión del Scrabble en Av. Corrientes durante “La Noche de las Librerías” / Roberto Fiadone" />
                            <div class="absolute bottom-0  bg-linear-to-b from-0% to-dark p-2 pt-8 text-tiny w-full">
                                Difusión del Scrabble en Av. Corrientes durante “La Noche de las Librerías” / Roberto
                                Fiadone
                            </div>
                        </div>

                        <PrismicRichText :field="spaceText" />
                    </div>
                </div>
                <!-- Imagine -->
                <div
                    class="text-center order-2 border-t border-[#e8fcd45e] text-sm h-10 text-green opacity-50 flex items-center justify-center font-bold">
                    <span class="-mt-10 bg-dark px-2">Imagine</span>
                </div>
                <!-- Design -->
                <div
                    class="text-center border-t order-4 border-[#e8fcd45e] text-sm h-10 text-green opacity-50 flex items-center justify-center font-bold">
                    <span class="-mt-10 bg-dark px-2">Design</span>
                </div>
            </div>
        </div>

        <!-- City-Community Collaboration -->
        <div class="p-4 md:p-20 w-full">
            <div class="box rounded-4xl w-full p-4 py-20 md:py-0 md:p-10 pb-0 relative grid md:grid-cols-2 gap-8">
                <!-- Heading -->
                <div class="absolute top-0 w-full flex items-center justify-center -mt-6">
                    <div class="text-base text-green bg-dark border rounded-full font-bold text-center mx-auto px-8">
                        City-Community Collaboration</div>
                </div>

                <!-- Quote -->
                <div class="text-base leading-8 md:leading-11 md:py-30 order-1">
                    <PrismicRichText :field="cityQuote" />
                    <p class="text-sm mt-6">— Corean Reynolds, Director of Nightlife Economy, City of Boston</p>
                </div>
                <!-- Case Study -->
                <div class="md:py-30 order-3 md:order-2">
                    <h3 class="text-base font-bold">Global Case Study: </h3>
                    <div class="text-sm flex flex-col gap-4">
                        <strong>Owl Bus, Seoul</strong>
                        <p>
                            How might a nightlife strategy integrate nighttime mobility with city planning?
                        </p>
                        <div class="relative">
                            <NuxtImg class="grayscale" :src="cityImage?.url"
                                alt="Difusión del Scrabble en Av. Corrientes durante “La Noche de las Librerías” / Roberto Fiadone" />
                            <div class="absolute bottom-0  bg-linear-to-b from-0% to-dark p-2 pt-8 text-tiny w-full">
                                Owl Bus / 최광모, Wiki Commons
                            </div>
                        </div>

                        <PrismicRichText :field="cityText" />

                    </div>
                </div>
                <!-- Imagine -->
                <div
                    class="text-center order-2 border-t border-[#e8fcd45e] text-sm h-10 text-green opacity-50 flex items-center justify-center font-bold">
                    <span class="-mt-10 bg-dark px-2">Imagine</span>
                </div>
                <!-- Design -->
                <div
                    class="text-center border-t order-4 border-[#e8fcd45e] text-sm h-10 text-green opacity-50 flex items-center justify-center font-bold">
                    <span class="-mt-10 bg-dark px-2">Design</span>
                </div>
            </div>
        </div>





    </section>
</template>


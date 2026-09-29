<script setup>
const data = ref([
    {
        id: 1,
        x: 48.5,
        y: 45,
        place: 'Amsterdam',
        text: '1 million euros allocated for night time accessibility and 1.2 million euros for night-life businesses by young talent in 2024.',
        source: 'NIGHT TIME INDUSTRIES ASSOCIATION, 2025'
    },
    {
        id: 2,
        x: 26,
        y: 70,
        place: 'Bogotá',
        text: 'In 2022, Mastercard launched the 24-Hour Cities Network in partnership with Bogotá and New York City.',
        source: 'WORLD ECONOMIC FORUM, 2025'
    },
    {
        id: 3,
        x: 89,
        y: 86.5,
        place: 'Sydney',
        text: '32% of people feel safety is a barrier to using public transport.',
        source: 'NSW GOVERNMENT, 2025'
    },

    // UK + Ireland cluster
    {
        id: 4,
        x: 46,
        y: 41,
        place: 'Aberdeen',
        text: '18.9% loss of hospitality businesses in 2024.',
        source: 'NIGHT TIME INDUSTRIES ASSOCIATION, 2025'
    },
    {
        id: 5,
        x: 46.5,
        y: 42.5,
        place: 'Edinburgh',
        text: 'Edinburgh lost 7.7% of its hospitality businesses from March 2020 to March 2023.',
        source: 'NIGHT TIME INDUSTRIES ASSOCIATION, 2025'
    },
    {
        id: 6,
        x: 45.8,
        y: 42.6,
        place: 'Glasgow',
        text: '77.8% of NTIA members in Glasgow reported negative impact on footfall following introduction of Low Emission Zones.',
        source: 'NIGHT TIME INDUSTRIES ASSOCIATION, 2025'
    },
    {
        id: 7,
        x: 47,
        y: 45.3,
        place: 'London',
        text: 'Approximately 77,000 night tube journeys on a typical Friday night.',
        source: 'LONDON ASSEMBLY, 2025'
    },
    {
        id: 8,
        x: 45,
        y: 44,
        place: 'Ireland',
        text: '86% of survey respondents find it expensive to go out at night, with costs being a major barrier to participation.',
        source: 'GIVE US THE NIGHT, 2025'
    },

    // North America
    {
        id: 9,
        x: 26.5,
        y: 49,
        place: 'Montreal',
        text: 'Montreal’s nightlife economy generates $2.26 billion in direct spending and provides 33,559 jobs with $994 million in payroll. 2.44 million tourists visited for nightlife. (22% of all tourists)',
        source: 'MTL 24/24, 2022'
    },
    {
        id: 10,
        x: 24,
        y: 50.5,
        place: 'Toronto',
        text: 'Hospitality license holders suggesting an average of 39% floor area limit for entertainment in restaurants would be more appropriate than the current 6% limit.',
        source: 'VIBELAB, 2023'
    },
    {
        id: 11,
        x: 26.3,
        y: 53,
        place: 'New York',
        text: 'New York City’s night-time economy contributes $35 billion to economic activity and supports 300,000 jobs.',
        source: 'URBACT, 2024'
    },
    {
        id: 12,
        x: 25.3,
        y: 53.3,
        place: 'Philadelphia',
        text: 'The NTE generates $358.8 million in annual tax revenue for Philadelphia and $570.2 million for Pennsylvania.',
        source: 'CITY OF PHILADELPHIA, 2025'
    },

    // Europe cluster
    {
        id: 13,
        x: 44.8,
        y: 51.5,
        place: 'Braga',
        text: 'Braga registered a 500% increase in tourism sector over last ten years.',
        source: 'URBACT, 2024'
    },
    {
        id: 14,
        x: 46,
        y: 52,
        place: 'Madrid',
        text: 'Night-time spending (7 PM - 7 AM) accounts for 30.1% of total spending in Madrid establishments.',
        source: 'SAMPERIZ ET. AL., 2025'
    },
    {
        id: 15,
        x: 48,
        y: 47,
        place: 'Paris',
        text: 'Paris has more than 15,000 bars and restaurants (25% of the shops of the city), 170 nightclubs and more than 600 venues open after 2am.',
        source: 'URBACT, 2024'
    },
    {
        id: 16,
        x: 51,
        y: 49.2,
        place: 'Zadar',
        text: 'Approximately 50% of the city’s 400 bars and restaurants operate until 10 pm and later.',
        source: 'URBACT, 2024'
    },
    {
        id: 17,
        x: 53.5,
        y: 53.5,
        place: 'Piraeus',
        text: 'In Piraeus, 81 of the city’s 88 parks and gardens are open at night-time.',
        source: 'URBACT, 2024'
    },
    {
        id: 18,
        x: 48,
        y: 45.4,
        place: 'Ghent',
        text: 'Ghent Nightlife Council offers grants to outdoors events organisers for up to 80% of the costs refunded or €40,000.',
        source: 'ACUTO, EDWARDS, SEIJAS & BASSETT, 2023'
    },
    {
        id: 19,
        x: 52,
        y: 39.8,
        place: 'Stockholm',
        text: 'Vision Klara, a collaborative initiative between local government and the police, aiming to change the perception of the Klara area and increase safety for residents, visitors, and businesses.',
        source: 'HJELM, 2024'
    },
    {
        id: 20,
        x: 51,
        y: 44.8,
        place: 'Berlin',
        text: 'In May 2021 Berlin officially declared night clubs as cultural institutions, a significant win for the Club Commission.',
        source: 'Acuto, Edwards, Seijas & Bassett, 2023'
    },

    // Africa cluster
    {
        id: 21,
        x: 47,
        y: 67.5,
        place: 'Ghana',
        text: '24-hour strategy is projected to boost real GDP by >31% within a decade and generate more than three million jobs in its first five years, particularly in manufacturing, agriculture, trade, construction and transport.',
        source: 'WORLD ECONOMIC FORUM, 2025'
    },
    {
        id: 22,
        x: 56,
        y: 71,
        place: 'Uganda',
        text: 'Most clubs and bars in Kampala struggle with profitability during weekdays.',
        source: 'JEPA AFRICA, 2025'
    },

    // China + East Asia
    {
        id: 23,
        x: 75,
        y: 55,
        place: 'China',
        text: 'Nighttime light data showed strong correlation with urban built-up areas, economic development and public services, validating its use as an economic indicator.',
        source: 'Analysis of Economic Vitality and Development Equilibrium of China’s Three Major Urban Agglomerations Based on Nighttime Light Data'
    },
    {
        id: 24,
        x: 80.5,
        y: 57,
        place: 'Shanghai',
        text: 'Shanghai had the highest proportion of merchants operating at night in China (94.6%).',
        source: 'YAN, ZOU & LIU, 2024'
    },
    {
        id: 25,
        x: 79.2,
        y: 60.1,
        place: 'Guangzhou',
        text: 'Ranked third among 337 Chinese cities in the ‘City Nightlife Index Rankings’ in China.',
        source: 'LIU ET. AL., 2023'
    },
    {
        id: 26,
        x: 78.8,
        y: 60.7,
        place: 'Shenzhen',
        text: 'High-value areas are mainly distributed along subway lines and major transportation routes.',
        source: 'HENG ET. AL., 2024'
    },

    // Australia cluster
    {
        id: 27,
        x: 89.5,
        y: 83,
        place: 'Brisbane',
        text: 'Hotel market showing highest revenue growth per room of any Australian city. Tourist spending reached $10.1 billion in 2023 supporting the hospitality sector.',
        source: 'STATE OF THE CITY, 2023'
    },
    {
        id: 28,
        x: 88,
        y: 85,
        place: 'New South Wales',
        text: 'Core NTE generated over $56 billion in turnover in NSW',
        source: 'NSW Productivity and Equality Commission, 2025'
    },
    {
        id: 29,
        x: 84,
        y: 82,
        place: 'Australia',
        text: 'Total Core NTE employment grew 1.4% nationally but food sector jobs fell by 6,650 despite more venues opening.',
        source: 'INGENIUM RESEARCH, 2025'
    }
])

const pointsWithRandom = ref(data.value.map(p => ({
    ...p,
    pingDelay: Math.random() * 3000,   // random delay 0-3s
    pingDuration: 2 + Math.random() * 3,
    active: false // track if the label is shown
})))

const pointsInHalves = computed(() => {
    const mid = Math.ceil(data.value.length / 2)

    return {
        first: data.value.slice(0, mid),
        second: data.value.slice(mid)
    }
})

// Track idle auto-cycle timer
let idleTimer = null
let autoCycleInterval = null

// Flag to stop auto-cycling if user manually shows a label
const userInteracted = ref(false)

// Function to show a random label
function showRandomLabel() {

    // First, hide all labels
    pointsWithRandom.value.forEach(p => p.active = false)
    // Pick a random one
    const randomIndex = Math.floor(Math.random() * pointsWithRandom.value.length)
    pointsWithRandom.value[randomIndex].active = true
    console.log
}

// Reset idle timer
function resetIdleTimer() {
    if (userInteracted.value) return
    clearTimeout(idleTimer)
    idleTimer = setTimeout(() => {
        // Start auto-cycling every 3s
        showRandomLabel()
        autoCycleInterval = setInterval(showRandomLabel, 3000)
    }, 3000)
}

// Stop auto-cycling
function stopAutoCycle() {
    clearTimeout(idleTimer)
    clearInterval(autoCycleInterval)
    autoCycleInterval = null
}

// Call this when user hovers or manually triggers a label
function onUserInteraction() {
    userInteracted.value = true
    stopAutoCycle()
    // Show the label the user hovered
    pointsWithRandom.value.forEach(p => p.active = false)
}
function userInteractionStopped() {
    userInteracted.value = false
    resetIdleTimer()
}

// Reset idle timer on mounted
onMounted(() => {
    resetIdleTimer()

})

// Clean up
onBeforeUnmount(() => {
    stopAutoCycle()
})
const showMore = ref(false)
const currentPlace = ref(null)
function changePlace(index) {
    if (currentPlace.value === index) {
        currentPlace.value = null;
    } else {
        currentPlace.value = index;
    }
}

function enter(element) {
    const width = getComputedStyle(element).width;
    element.style.width = width;
    element.style.position = "absolute";
    element.style.visibility = "hidden";
    element.style.height = "auto";
    const height = getComputedStyle(element).height;
    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;
    getComputedStyle(element).height;
    requestAnimationFrame(() => {
        element.style.height = height;
    });
}
function afterEnter(element) {
    element.style.height = "auto";
}
function leave(element) {
    const height = getComputedStyle(element).height;
    element.style.height = height;
    getComputedStyle(element).height;
    requestAnimationFrame(() => {
        element.style.height = 0;
    });
}

</script>

<template>

    <section id="map" class="relative h-auto w-full pb-10 md:pb-20">
        <!-- Map container -->
        <div
            class="md:relative w-[90vw] md:w-[70vw] mx-auto h-screen md:h-[100vw] flex items-center justify-center sticky top-[32px] md:top-0 z-0">
            <div class="absolute w-full h-full top-0 bottom-0 m-auto flex items-center justify-center left-0">
                <div
                    class="globe w-[95vw] h-[95vw] md:w-[75vw] md:h-[75vw] rounded-full apsect-square absolute top-0 bottom-0 my-auto">
                </div>
            </div>

            <div @mousemove="onUserInteraction()" @mouseleave="userInteractionStopped" class="relative w-full">

                <!-- Map Background -->
                <img src="~/assets/images/map.svg" />
                <!-- Markers -->
                <div v-for="(p, index) in pointsWithRandom" :key="p.place" class="marker"
                    :class="[p.active ? 'z-10' : '']" :style="{ left: p.x + '%', top: p.y + '%' }">
                    <!-- Dot -->
                    <div class="relative size-[14px] flex items-center justify-center">
                        <div class="dot  rounded-full  absolute animate-ping size-[14px] bg-green " :style="{
                            animationDelay: `${p.pingDelay}ms`,
                            animationDuration: `${p.pingDuration}s`
                        }"></div>
                        <div class="dot rounded-full transition size-[10px] bg-green"></div>

                    </div>
                    <!-- Label -->

                    <div class="label hidden md:block z-10 absolute text-sm leading-6 top-[50px] w-90 outline outline-green bg-[#0000002e] text-green backdrop-blur-xs"
                        :class="[p.active ? 'p-active' : '']">
                        <div class="leader-line" :class="[p.active ? 'line-active' : '']"></div>

                        <span class="font-bold">{{ p.place }}:</span>
                        {{ p.text }}
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full text-center pt-10 md:px-20 -mt-20 z-1 relative xl:px-80 md:-mt-40 px-2  text-green text-base leading-[1.6rem] md:leading-[2.5rem] bg-gradient-to-b from-transprent to-[#00000081]">
            There is no single story of global NTE— some cities are seeing growth and opportunity while others face
            challenges.</div>
        <div class="text-center w-full pb-40 pt-2 text-[0.8rem] leading-3 opacity-40 md:block hidden">[Try hovering over
            a pin]</div>

        <div class="min-h-screen relative block md:hidden z-1  ">
            <div class="grid grid-cols-2 gap-2 p-4 pt-6  pb-0 bg-[#00000081] select-none">
                <!-- Col one -->
                <div class="flex flex-col">
                    <div @click="changePlace(p.text)" v-for="(p, pIndex) in pointsInHalves.first"
                        :key="p.place + 'mobile'"
                        class="text-sm mb-2 leading-4 outline outline-[#3A3F35] backdrop-blur-sm bg-[#0000002e]  text-green rounded-md p-1 px-2">
                        <span class="font-bold">{{ p.place }}</span>
                        <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">

                            <div v-if="currentPlace === p.text">
                                <div class="pt-2">

                                    {{ p.text }}</div>
                            </div>
                        </transition>
                    </div>
                </div>
                <!-- Col two -->
                <div class="flex flex-col">
                    <div @click="changePlace(p.text)" v-for="(p, pIndex) in pointsInHalves.second"
                        :key="p.place + 'mobile'"
                        class="text-sm mb-2 leading-4 outline outline-[#3A3F35] backdrop-blur-sm bg-[#0000002e]  text-green rounded-md p-1 px-2">
                        <span class="font-bold">{{ p.place }}</span>
                        <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">

                            <div v-if="currentPlace === p.text">
                                <div class="pt-2">

                                    {{ p.text }}</div>
                            </div>
                        </transition>
                    </div>
                </div>

            </div>
            <div class="w-full h-8 bg-gradient-to-t from-transprent to-[#00000081]">

            </div>
            <!-- <div v-show="!showMore" class="w-full absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transprent to-black"></div> -->
        </div>
        <!-- <div @click="showMore = true" v-show="!showMore" class=" w-full text-center z-1 text-base -mt-2 block md:hidden">
            +
        </div> -->

    </section>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}

.expand-enter,
.expand-leave-to {
    height: 0;
    opacity: 0;
}

.globe {
    box-shadow: 0 0 150px #e8fcd4;
}

@media (max-width: 768px) {
    .globe {
        box-shadow: 0 0 100px #e8fcd4;
    }
}

/* Marker wrapper */
.marker {
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
}


/* Dot grows on hover */
.marker:hover .dot {
    transform: scale(2);
}

.marker:hover {
    z-index: 10;
}

/* Label box */
.label {
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    padding: 8px 12px;
    border-radius: 8px;
    opacity: 0;
    pointer-events: none;
    transition:
        opacity 0.35s ease,
        transform 0.35s ease;
}

/* Hover reveal animation */
.marker:hover .label {
    opacity: 1;
    transform: translateX(-50%) translateY(0px);
}

.p-active {
    opacity: 1;
    transform: translateX(-50%) translateY(0px);
}

.line-active {
    opacity: 1 !important;
}

/* Optional leader line */
.leader-line {
    position: absolute;
    width: 1px;
    height: 40px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: #e8fcd4;
    transition: opacity 0.35s ease;
    opacity: 0;
}

.marker:hover .leader-line {
    opacity: 1;
}
</style>

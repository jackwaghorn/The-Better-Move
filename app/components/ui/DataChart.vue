<script setup lang="ts">
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { BarChart } from 'echarts/charts';

// Import the tooltip, rectangular coordinate system and dataset components
import {
    TooltipComponent,
    GridComponent,
    DatasetComponent,
} from 'echarts/components';

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features';

// Register the required components
echarts.use([
    BarChart,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    LabelLayout,
    UniversalTransition,
]);
const option = ref < ECOption > ({
    grid: {
        left: 20,      // <-- Reduce left padding
        right: 20,     // <-- Reduce right padding
        top: 20,       // <-- Top padding
        bottom: 60,    // <-- Bottom padding (space for x-axis label)
        containLabel: true  // <-- Ensures labels aren't cut off
    },
    dataset: {
        dimensions: ['Type', 'Count'],
        source: [
            { Type: 'Warming and light structures', Count: 19 },
            { Type: 'Seating structures', Count: 12 },
            { Type: 'Parks structures', Count: 11 },
            { Type: 'Bathroom structures', Count: 10 },
            { Type: 'Performance structures', Count: 10 },
            { Type: 'Communication and energy', Count: 9 },
            { Type: 'Plants', Count: 6 },
            { Type: 'Public transportation', Count: 4 },
            { Type: 'Waste management', Count: 3 },
            { Type: 'Public health systems', Count: 2 },
            { Type: 'Bookshelves', Count: 1 },
        ],
    },

    xAxis: {
        type: 'value',
        name: 'Count of nightlife space types',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
            color: '#e8fcd4',
            fontSize: 14,
            fontFamily: 'Inter, sans-serif',
        },
        axisLabel: { color: '#e8fcd45e', fontSize: 12, },
        axisLine: {
            show: true,
            lineStyle: { color: '#e8fcd43c' }
        },
        splitLine: {  // <-- Add this for the vertical grid lines
            lineStyle: {
                color: '#e8fcd419'
            }
        }
    },

    yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: { color: '#e8fcd4',
            fontFamily: 'SkModernist, sans-serif',
            inside: true, 
            fontSize: 14,
         },
        axisLine: {
            lineStyle: {
                color: '#e8fcd45e',  
                width: 2,
            }
        }
    },

    series: [
        {
            type: 'bar',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,      // Gradient start (0 = left)
                    y: 0,
                    x2: 1,     // Gradient end (1 = right)
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#e8fcd409'  // Start color (left side)
                        },
                        {
                            offset: 1,
                            color: '#e8fcd41d'    // End color (right side)
                        }
                    ]
                },
                borderRadius: [0, 8, 8, 0],  // <-- [topLeft, topRight, bottomRight, bottomLeft]

                  // <-- bar color
            },
            barCategoryGap: '15%',
            label: {
                show: true,
                color: '#e8fcd4',
                position: 'left',
                fontSize: 12,
            },
            
        }
    ],
})


</script>

<template>

        <VChart :option="option" />


</template>

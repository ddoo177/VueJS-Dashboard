<script setup>

import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import 'chartjs-chart-geo';

const chartCanvas1 = ref(null)
const chartCanvas2 = ref(null)
let chartInstance1 = null
let chartInstance2 = null

const generateRandomData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 1000))
}

onMounted(() => {
    const ctx = chartCanvas1.value.getContext('2d');
    const ctx2 = chartCanvas2.value.getContext('2d');

    const data = {
        labels: ['Germany', 'United States', 'Brazil', 'Canada', 'France', 'RU'],
        datasets: [
            {
                data: generateRandomData(6),
                backgroundColor: 'rgb(146, 91, 128)',
                borderColor: 'rgb(248, 158, 218)',
                borderWidth: 2,
            },
        ],
    };

    const data2 = {
        labels: ['January', 'March', 'May', 'July', 'September', 'November'],
        datasets: [
            {
                data: generateRandomData(6),
                backgroundColor: 'rgb(76,171,196)',
                borderColor: 'rgb(76,150,196)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            // Đặt các tùy chọn cho trục (nếu cần)
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
            geo: {
                area: 'world', // Chọn khu vực thế giới
            },
        },
    };

    chartInstance1 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
    });

    chartInstance2 = new Chart(ctx2, {
        type: 'bar',
        data: data2,
        options: options,
    });

});

</script>

<template>

    <div class="geo-chart">
        <h5 class="geo-chart-item">Geographical Statics</h5>
        <canvas ref="chartCanvas1"></canvas>
    </div>
    <div class="geo-chart">
        <h5 class="geo-chart-item">Month Statics</h5>
        <canvas ref="chartCanvas2"></canvas>
    </div>

</template>

<style scoped>
.geo-chart {
    padding: 25px 25px 15px 25px;
    background: var(--secondary-color);
    border-radius: 20px;
    position: relative;
    margin-top: 40px;
    width: 49%;
}

.geo-chart-item {
    font-size: 15px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-bottom: 20px;
}
</style>
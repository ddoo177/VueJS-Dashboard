<script setup>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const numberChart1 = ref(null);
const numberChart2 = ref(null);
const numberChart3 = ref(null);
const numberChart4 = ref(null);

onMounted(() => {

    // Chart 1
    const ctx1 = numberChart1.value.getContext('2d');
    const data = generateRandomData(10);
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    pointStyle: "circle",
                    borderColor: 'rgb(86, 202, 231)',
                    backgroundColor: 'rgba(86, 202, 231, 0.2)',
                    data: data,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false },
            },
        },
    });

    // Chart 2
    const ctx2 = numberChart2.value.getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    borderColor: 'rgb(38, 174, 95)',
                    backgroundColor: 'rgba(38, 174, 95, 0.2)',
                    data: generateRandomData(10),
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false },
            },
        },
    });

    // Chart 3
    const ctx3 = numberChart3.value.getContext('2d');
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    borderColor: 'rgb(230, 241, 121)',
                    backgroundColor: 'rgba(230, 241, 121, 0.2)',
                    data: generateRandomData(10),
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false },
            },
        },
    });

    // Chart 4
    const ctx4 = numberChart4.value.getContext('2d');
    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    borderColor: 'rgb(231, 84, 102)',
                    backgroundColor: 'rgba(231, 84, 102   , 0.2)',
                    data: generateRandomData(10),
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false },
            },
        },
    });
});

const generateRandomData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100))
}

const generateRandomPercent = () => {
    const percent = Math.floor(Math.random() * 50)
    if (Math.random() < 0.5)
        return '+' + percent +"%"
    return '-'+ percent + "%"
}

</script>

<template>

    <div class="analytic-number-item">
        <div class="analytic-title">
            <FontAwesomeIcon :icon="['fas', 'circle']" class="dot blue" />
            <h5 class="number-item-title">User</h5>
            <p class="percent blue">{{ generateRandomPercent() }}</p>
        </div>
        <h1 class="analytic-amount">287</h1>
        <div class="analytic-footer">
            <canvas ref="numberChart1"></canvas>
        </div>
    </div>
    <div class="analytic-number-item">
        <div class="analytic-title">
            <FontAwesomeIcon :icon="['fas', 'circle']" class="dot green" />
            <p class="number-item-title">Revenue</p>
            <p class="percent green">{{ generateRandomPercent() }}</p>
        </div>
        <h1 class="analytic-amount">232,912,678.67</h1>
        <div class="analytic-footer">
            <canvas ref="numberChart2"></canvas>
        </div>
    </div>
    <div class="analytic-number-item">
        <div class="analytic-title">
            <FontAwesomeIcon :icon="['fas', 'circle']" class="dot yellow" />
            <p class="number-item-title">Order</p>
            <p class="percent yellow">{{ generateRandomPercent() }}</p>
        </div>
        <h1 class="analytic-amount">336</h1>
        <div class="analytic-footer">
            <canvas ref="numberChart3"></canvas>
        </div>
    </div>
    <div class="analytic-number-item">
        <div class="analytic-title">
            <FontAwesomeIcon :icon="['fas', 'circle']" class="dot red" />
            <p class="number-item-title">Average Order Value</p>
            <p class="percent red">{{ generateRandomPercent() }}</p>
        </div>
        <h1 class="analytic-amount">2,593,222</h1>
        <div class="analytic-footer">
            <canvas ref="numberChart4"></canvas>
        </div>
    </div>

</template>

<style>

.analytic-title {
    position: relative;
    display: flex;
}

.dot {
    margin: auto 0;
    font-size: 10px;
}

.number-item-title {
    font-size: 15px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-left: 8px;
}

.analytic-number-item {
    width: 23%;
    padding: 25px 25px 15px 25px;
    height: fit-content;
    border-radius: 20px;
    background: var(--secondary-color);
}

.analytic-amount {
    font-weight: 600;
    margin: 20px 0;
    letter-spacing: 3px;
}

.percent {
    letter-spacing: 2px;
    position: absolute;
    right: 0;
}

.green {
    color: rgb(38, 174, 95);
}

.blue {
    color: rgb(86, 202, 231);
}

.red {
    color: rgb(231, 84, 102)
}

.yellow {
    color: rgb(230, 241, 121);
}
</style>
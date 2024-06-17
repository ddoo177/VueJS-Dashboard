<script setup>
import CardNumberanalytic from './card-number-analytic.vue';
import GeoChart from './geo-chart.vue';

</script>

<template>

    <h1 class="title">Dashboard</h1>
    <div class="analytic-number">
        <CardNumberanalytic/>
    </div>

    <div class="analytic-geo">
        <GeoChart/>
    </div>

</template>

<style scoped>

.analytic-number {
    width: 100%;
    justify-content: space-between;
    display: flex;
}

.analytic-geo {
    justify-content: space-between;
    width: 100%;
    display: flex;
}

</style>
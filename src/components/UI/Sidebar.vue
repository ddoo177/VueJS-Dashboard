<script setup>

import Category from './Category.vue'

</script>

<template>

    <div class="side-bar-top">
        <img src="../../assets/logo.svg" alt="" class="logo">
        <div class="company-name">DDOO</div>
    </div>
    <Category />

</template>

<style scoped>

.side-bar-top {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
}

.side-bar-top:hover {
    cursor: pointer;
}

.logo {
    width: 30px;
    margin-right: 10px;
}

.company-name {
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    font-size: 20px;
    color: var(--white);
    align-items: center;
}

</style>
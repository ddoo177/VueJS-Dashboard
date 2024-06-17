<script setup>

import Sidebar from './components/UI/Sidebar.vue'
import { RouterView } from 'vue-router'

</script>

<template>

    <div class="app">
        <Sidebar />
    </div>
    <div class="main-content">
        <RouterView />
    </div>
    
</template>

<style scoped>

.main-content {
    padding: 50px 40px;
    width: 85%;
    height: 100vh;
    min-width: 1400px;
}

.app {
    position: relative;
    border-right: 3px solid var(--secondary-color);
    height: 100vh;
    min-width: 250px;
    overflow: auto;
    width: 15%;
}

</style>
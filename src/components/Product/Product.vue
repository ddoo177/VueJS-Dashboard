<script setup>

import ProductTable from './ProductTable.vue'

</script>

<template>
    
    <h1 class="title">Product Management</h1>

    <div class="product-table">
        <ProductTable/>
    </div>

</template>

<style scoped>

.product-table {
    width: 100%;
    max-height: 800px;
    overflow-y: auto;
    background: var(--secondary-color);
    border-radius: 20px;
} 

</style>
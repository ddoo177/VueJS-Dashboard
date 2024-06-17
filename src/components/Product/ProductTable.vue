<script setup>

import { onMounted, ref } from 'vue'

const products = ref([])

onMounted(async () => {
    try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        products.value = data.products
    } catch (error) {
        console.error(error)
    }
})

</script>

<template>

    <table class="product-table">
        <thead>
            <tr>
                <th class="table-title"></th>
                <th class="table-title">Title</th>
                <th class="table-title">Discount percent</th>
                <th class="table-title">Price</th>
                <th class="table-title">Brand</th>
                <th class="table-title">Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td v-if = "product.images.length > 1"> <img v-bind:src="product.images[0]" > </td>
                <td v-else > <img v-bind:src="product.images" ></td>
                <td> {{ product.title }}</td>
                <td> {{ product.discountPercentage }} %</td>
                <td> $ {{ product.price }}</td>
                <td> {{ product.brand ?? "Undefined"}}</td>
                <td> {{ product.stock }}</td> 
            </tr>
        </tbody>
    </table>

</template>

<style scoped>

.table-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
    text-align: start;
    position: sticky;
    top: 0;
    background: var(--secondary-color);
    z-index: 1;
}

.product-table {
    width: 100%;
    border-collapse: collapse;
}

.product-table th,
.product-table td {
    padding: 20px 30px;
    font-size: 17px;
    text-align: left;
}

.product-table thead th {
    position: sticky;
    top: 0;
    background: #65445B;
    z-index: 1;
}

tr:hover {
    background: #18191a;
}

.product-table td img {
  filter: drop-shadow(0.3rem 0.2rem 1rem #925b80);
  width: 100px;
  animation: fadeIn 2.5s  forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
  opacity: 1; 
  filter: drop-shadow(0.6rem 0.6rem 2rem #925b80);
  }
}

</style>
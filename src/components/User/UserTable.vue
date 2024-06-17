<script setup>

import { onMounted, ref } from "vue";

const users = ref([]);

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        users.value = data;
    } catch (e) {
        console.error(e);
    }
});

</script>

<template>

    <table class="user-table">
        <thead>
            <tr>
                <th class="table-title">Name</th>
                <th class="table-title">Email</th>
                <th class="table-title">Address</th>
                <th class="table-title">Phone</th>
                <th class="table-title">Website</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.address.city }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.website }}</td>
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

.user-table {
    width: 100%;
    border-collapse: collapse;
}

.user-table th,
.user-table td {
    padding: 20px 30px;
    text-align: left;
}

.user-table thead th {
    position: sticky;
    top: 0;
    background: #65445B;
    z-index: 1;
}
</style>
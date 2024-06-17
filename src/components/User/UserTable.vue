<script setup>

import { onMounted, ref } from 'vue'

const users = ref([])

onMounted(async () => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json()
        users.value = data.users
    } catch (e) {
        console.error(e)
    }
});

</script>

<template>
    <table class="user-table">
        <thead>
            <tr>
                <th class="table-title"></th>
                <th class="table-title">Name</th>
                <th class="table-title">Email</th>
                <th class="table-title">Address</th>
                <th class="table-title">Phone</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td><img v-bind:src="user.image"></td>
                <td>{{ user.firstName + ' ' + user.lastName }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.address.address }}</td>
                <td>{{ user.phone }}</td>
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

.user-table th{
    padding: 20px 30px;
    text-align: left;
}

tr:hover {
    background: #18191a;
}

.user-table td {
    padding: 35px 30px;

}

.user-table thead th {
    position: sticky;
    top: 0;
    background: #65445B;
    z-index: 1;
}

.user-table td img {
  filter: drop-shadow(0.3rem 0.2rem 1rem #925b80);
  width: 100px;
  animation: fadeIn 2s  forwards;
  opacity: 0;
  padding-left: 20px;
}

</style>
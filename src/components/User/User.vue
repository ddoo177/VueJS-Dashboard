<script setup>

import UserTable from '../User/UserTable.vue'

</script>

<template>
    <h1 class="title">User Management</h1>

    <div class="user-table">
        <UserTable/>
    </div>
</template>

<style scoped>

.user-table {
    width: 100%;
    max-height: 420px;
    overflow-y: auto;
    background: var(--secondary-color);
    border-radius: 20px;
}  

</style>

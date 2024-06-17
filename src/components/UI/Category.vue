<script setup>
import "../../assets/icon"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const categories = ref([
    { name: "Dashboard", route: "/dashboard", icon: "house", active: false },
    { name: "User Management", route: "/user", icon: "user-group", active: false },
    { name: "Product", route: "/product", icon: "bag-shopping", active: false },
    { name: "Report", route: "/report", icon: "file-alt", active: false },
    { name: "Analytic", route: "/analytic", icon: "chart-line", active: false },
    { name: "Setting", route: "/setting", icon: "cog", active: false },
]);

const router = useRouter();
const route = useRoute();

const updateActiveCategory = () => {
    categories.value.forEach((cat) => {
        cat.active = (cat.route === route.path);
    });
};

const handleOnclick = (category) => {
    categories.value.forEach((cat) => cat.active = false);
    category.active = true;
    router.push(category.route);
};

// Cập nhật trạng thái active khi component được mounted
onMounted(() => {
    updateActiveCategory();
});

// Theo dõi sự thay đổi của route và cập nhật trạng thái active
watch(route, () => {
    updateActiveCategory();
});
</script>

<template>
    <div class="category-list">
        <ul>
            <li v-for="category in categories" :key="category.name"
                :class="['category-item', { active: category.active }]" @click="handleOnclick(category)">
                <FontAwesomeIcon :icon="['fas', category.icon]" class="category-icon" />
                <span>{{ category.name }}</span>
            </li>
            <li class="item-logout category-item">
                <FontAwesomeIcon :icon="['fas', 'right-from-bracket']" class="category-icon" />
                <span>Log out</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.side-bar {
    min-width: 250px;
    position: relative;
    border-right: 3px solid var(--secondary-color);
    height: 100vh;
    overflow: auto;
    width: 15%;
}

.category-list {
    margin-top: 20px;
}

.category-item {
    padding: 25px 40px;
}

.category-item:hover {
    color: var(--white);
    cursor: pointer;
    background: var(--light-secondary-color);
}

.active {
    background: var(--light-secondary-color);
    color: var(--white);
    border-left: #f700ff 3px solid;
}

.category-icon {
    margin-right: 15px;
}

.item-logout {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>

<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Inicio',
        items: [{ label: 'Inicio', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Categorias',
        items: [{ label: 'Caballeros', icon: 'pi pi-fw pi-id-card', to: '/Categorias/caballeros' }]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>

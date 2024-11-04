<template>
    <Card style="overflow: hidden">
        <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>Caballeros</template>
        <template #content>
            <p class="m-0">
                Descubre nuestra colección de ropa de caballeros, diseñada para el hombre moderno que aprecia el estilo, la comodidad y la calidad en cada detalle. Desde trajes impecables hasta atuendos casuales, nuestra selección ofrece piezas
                versátiles y elegantes, perfectas para cualquier ocasión. Cada prenda está confeccionada con materiales premium, garantizando durabilidad y un ajuste perfecto.
            </p>
        </template>
    </Card>

    <div class="card mt-10">
        <div class="font-semibold text-xl mb-4">Catálogo de articulos</div>
        <p>Cantidad de Articulos ({{ products.length }})</p>
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="carouselResponsiveOptions">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'/src/assets/images/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <div class="dark:bg-surface-900 absolute rounded-border" style="left: 5px; top: 5px">
                                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2" />
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ArticulosService';
import { onMounted, ref } from 'vue';

const products = ref([]);

const carouselResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
]);

onMounted(async () => {
    // ProductService.getProductsSmall().then((data) => (products.value = data));
    products.value = await ProductService.getProductsData();
    console.log(products.value);
    // PhotoService.getImages().then((data) => (images.value = data));
    // console.log(products.value);
    // const querySnapshot = await getDocs(collection(db, 'Articulos'));
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.data());
    //     products.value.push(doc.data());
    // });
    // console.log(products.value);
});

function getSeverity(status) {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}
</script>

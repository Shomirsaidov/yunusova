<template>
    <BottomNav/>
    <div class="flex flex-col md:w-1/2 w-100 my-8 m-0">
        <div class="p-4 rounded-xl bg-gray-200 flex items-center rounded-b-none">
            <img @click="$router.back()" src="../assets/arrow-left-3.svg" width="30" alt="">
            <span class="font-lg font-semibold">Недавно добавленные</span>
        </div>
        <table class="border-2 w-100" v-if="data !== null">
            <tr class="border-2  p-2">
                <td class="border-2 md:p-2 font-semibold">Дата</td>            
                <td class="border-2 md:p-2 font-semibold">Магазин</td>
                <td class="border-2 md:p-2 font-semibold">Количество</td>
                <td class="border-2 md:p-2 font-semibold">Вид</td>
                <td class="border-2 md:p-2 font-semibold">Оплачено</td>
                <td class="border-2 md:p-2 font-semibold">Насия</td>
            </tr>
            <tr class="border-2  p-2" v-for="(delivery, index) in data" :key="index">
                <td class="border-2 md:p-2">{{ delivery.date }}</td>            
                <td class="border-2 md:p-2">{{ delivery.store }}</td>
                <td class="border-2 md:p-2">{{ delivery.quantity }} мешков</td>
                <td class="border-2 md:p-2">{{ delivery.type }}</td>
                <td class="border-2 md:p-2">{{ delivery.payed }} c.</td>
                <td class="border-2 md:p-2">{{ delivery.rest }} c.</td>
            </tr>
        </table>

        <div v-if="data == null" class="my-4 space-y-2" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}">
              <div id="loader"></div>
              <h2 class="font-semibold">Shomirsaidov Abubakr & Doleap Corp.</h2>
        </div>

	</div>
    <div style="height: 450px;"></div>

</template>
<script>
    import axios from 'axios' 
    import BottomNav from '@/components/BottomNav.vue';
    import check from '../utils/authValidator'

    export default {
        components: {
            BottomNav
        },
        data: () => ({
            data: null,
            date: null
        }),
        async mounted() {
            check(this.$router)
            await axios.get(process.env.VUE_APP_API_URL + "delivery/recent")
                .then(resp => {
                this.data = resp.data;
            });
        },
        components: { BottomNav }
}
</script>
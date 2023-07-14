<template>
    <BottomNav/>
    <div class="flex flex-col md:w-1/2 w-100 my-8 m-0">
        <div class="flex items-center mb-4">
            <input type="date" class="border-2 p-4 mx-4 mb-2 rounded-xl" v-model="date"/>
            <a :href="'#' + date" class="bg-green-600 text-white p-4 rounded-2xl font-bold ">Перейти</a>
        </div>
        <div class="p-4 rounded-xl bg-gray-200 flex items-center rounded-b-none">
            <img @click="$router.back()" src="../assets/arrow-left-3.svg" width="30" alt="">
            <span class="font-lg font-semibold">Отчёт по датам</span>
        </div>

        <div v-if="data == null" class="my-4 space-y-2" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}">
              <div id="loader"></div>
              <h2 class="font-semibold">Shomirsaidov Abubakr & Doleap Corp.</h2>
        </div>

        <table class="border-2 w-100" v-if="data !== null">
            <tr class="border-2  md:p-2">
                <td class="border-2  md:p-2 font-semibold">Дата</td>            
                <td class="border-2  md:p-2 font-semibold">Название</td>
                <td class="border-2  md:p-2 font-semibold">Оплачено</td>
                <td class="border-2  md:p-2 font-semibold">Насия</td>
                <td class="border-2  md:p-2 font-semibold">Количество</td>
                <td class="border-2  md:p-2 font-semibold">Вид</td>
            </tr>
            <tr class="border-2  md:p-2" v-for="(date, index) in data" :key="index">
                <td class="border-2  md:p-2" :id="date.date">{{ date.date }}.</td>            
                <td class="border-2  md:p-2">{{ date.store }}</td>
                <td class="border-2  md:p-2">{{ date.payed }} c.</td>
                <td class="border-2  md:p-2">{{ date.rest }} c.</td>
                <td class="border-2  md:p-2">{{ date.quantity }} мешков</td>
                <td class="border-2  md:p-2">{{ date.type }}</td>

            </tr>
            
        </table>
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
            await axios.get(`${process.env.VUE_APP_API_URL}counts/datesChart`)
                .then(resp => {
                this.data = resp.data;
            });
        },
        components: { BottomNav }
}
</script>
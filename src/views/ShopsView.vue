<template>
    <BottomNav/>
    <div class="flex flex-col md:w-1/2 w-100 my-8">
        <div class="p-4 rounded-xl bg-gray-200 flex items-center rounded-b-none">
            <img @click="$router.back()" src="../assets/arrow-left-3.svg" width="30" alt="">
            <span class="font-lg font-semibold">База ваших клиентов</span>
        </div>
        <table class="border-2" v-if="data !== null">
            <tr class="border-2  p-2">
                <td class="border-2  p-2 font-semibold">№</td>            
                <td class="border-2  p-2 font-semibold">Название</td>
                <td class="border-2  p-2 font-semibold">Адрес</td>
                <td class="border-2  p-2 font-semibold">Телефон</td>
                <td class="border-2  p-2 font-semibold">Контакт</td>
            </tr>
            <tr class="border-2  p-2" v-for="(store, index) in data" :key="index">
                <td class="border-2  p-2">{{ index + 1 }}.</td>            
                <td class="border-2  p-2">{{ store.name }}</td>
                <td class="border-2  p-2">{{ store.address }}</td>
                <td class="border-2  p-2">{{ store.tel }}</td>
                <td class="border-2  p-2">{{ store.person }}</td>
            </tr>
            
        </table>

        <div v-if="data == null" class="my-4 space-y-2" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}">
              <div id="loader"></div>
              <h2 class="font-semibold">Shomirsaidov Abubakr & Doleap Corp.</h2>
        </div>

	</div>

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
            data: null
        }),
        async mounted() {
            check(this.$router)
            await axios.get(process.env.VUE_APP_API_URL + 'delivery/clients')
                .then(resp => {
                    this.data = resp.data
                })
        }
    }
</script>






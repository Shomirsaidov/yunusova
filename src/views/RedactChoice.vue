<template>
<BottomNav/>
<div class="flex flex-col md:w-1/2 w-3/4">
	<div class="bg-gray-200 rounded-xl rounded-b-none p-4 mt-8">
		<h1 class="font-bold text-xl align-start">Выберите действие</h1>
	</div>
    <div class="border-2 rounded-b-lg">
        <div class="rounded-xl rounded-b-none rounded-t-none p-4 space-y-4">

            <div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/record')">
                <h1 class="text-md font-semibold">Новый отчёт</h1>
                <button class="text-white rounded-xl text-lg hover:bg-green-200">
                    <img src="../assets/arrow-right-3.svg" width="50" alt="">
                </button>
            </div>

        </div>
        
        <div class="p-4 space-y-4" style="border-bottom: none;">

            <div class="flex items-center rounded-lg justify-between hover:bg-gray-100 cursor-pointer" @click="$router.push('/addClient')">
                <h1 class="text-md font-semibold">Добавить новых клиентов</h1>
                <button class="text-white rounded-xl text-lg hover:bg-green-200">
                    <img src="../assets/arrow-right-3.svg" width="50" alt="">
                </button>
            </div>

        </div>


        <div class="rounded-xl rounded-t-none p-4 space-y-4">

            <div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/edit')">
                <h1 class="text-md font-semibold">Изменить данные / погасить долги</h1>
                <button class="text-white rounded-xl text-lg hover:bg-green-200">
                    <img src="../assets/arrow-right-3.svg" width="50" alt="">
                </button>
            </div>

        </div>
    </div>




</div>


</template>
<script>
    import BottomNav from '@/components/BottomNav.vue';
    import check from '../utils/authValidator'

    export default {
        components: {
            BottomNav
        },
        data: () => ({

        }), 
        mounted() {
            check(this.$router)
        }

    }
</script>







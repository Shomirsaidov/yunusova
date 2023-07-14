<template>

    <div style="position: fixed;bottom: 0; z-index: 10;" class="p-4 bg-green-500 rounded-t-2xl flex items-center justify-center space-x-8">
        <div class="flex flex-col space-y-2 justify-center items-center" @click="() => $router.push('/')">
            <img src="../assets/chart-square.svg" width="40" alt="">
            <h1 class="text-white">Статистика</h1>
        </div>
        <div class="flex flex-col space-y-2 justify-center items-center" @click="$router.push('/redact')">
            <img src="../assets/edit.svg" width="40" alt="">
            <h1 class="text-white">Редактирование</h1>
        </div>
        <div class="flex flex-col space-y-2 justify-center items-center" @click="$router.push('/rests')">
            <img src="../assets/archive.svg" width="40" alt="">
            <h1 class="text-white">Склад</h1>
        </div>
    </div>

</template>
<script>

export default {

}

</script>
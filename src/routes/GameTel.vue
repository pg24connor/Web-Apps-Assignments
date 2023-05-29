<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<script setup>
    import Telly from '../stores/TelemtryStore.js'

    let tellyInfo = new Telly();

    let playerData = tellyInfo.Values(tellyInfo.data.playerData);
    let playerDataNames = tellyInfo.Names(tellyInfo.data.playerData);

    let enemyData = tellyInfo.Values(tellyInfo.data.enemyData);
    let enemyDataNames = tellyInfo.Names(tellyInfo.data.enemyData);

</script>
<template>

    <section class="flexbox columns about">
        <h1 class="flexitem center title">Game Config</h1>
        <div class="split">
            <div class="half home">
                    <h1>Player</h1>
                    <ul class="inner-half">
                        <li v-for="i in playerDataNames.length">
                            <label>{{ playerDataNames[i - 1] }}</label>
                        </li>
                    </ul>
                </div>
            <div class="half home">
                    <h1>Enemy</h1>
                    <ul class="inner-half">
                        <li v-for="i in enemyDataNames.length">
                            <label>{{ enemyDataNames[i - 1] }}</label>
                        </li>
                    </ul>
                </div>
        </div>
    </section>

</template>
<style scoped>

    .inner-half
    {
        margin: 2vw;
    }

    .home 
    {
        margin:2vw;
        border: 5px solid rgb(0, 0, 0);
        background-color: lightgray;
        color: rgb(0, 0, 0);
        height: 78vh;
        width: 80vw;
    }

    .center
    {
        display: flex;
        justify-content: center;
    }
    .split
    {
        display: flex;
        flex-direction: row;
    }
    .half
    {
        display: flex;
        width: 50%;
        justify-content:start;
        flex-direction: column;
    }
</style>


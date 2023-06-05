<!--
<VFSHome name="Title" />
Copyright (c) 2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>

    import Controller from '@/plugins/controller'
    import Config from '@/stores/GameDataStore.js'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );

            this.configInfo = new Config();

            this.vm = {
                topStat: {
                    winCount:"8008",
                    deathCount:"4020",
                    quitCount:"6219"
                },
                welcomeMessage:"Hey Gang, access telemtry and config stuff"
            }
        }
    }

    export default new HomeController('VFSHome');

</script>
<template>

    <section class="flexbox columns home">
        <h1 class="flexitem left title">Home</h1>
        <h3>{{ welcomeMessage }}</h3>
        <div class="flexitem dialog">
            <form class="sample-form">
                <label for="s1">How many people won our game?:
                    {{ topStat.winCount }}
                </label><br/>
                <label for="s2">How many people died in our game?:
                    {{ topStat.deathCount }}
                </label><br/>
                <label for="s3">How many people quit without winning our game?: 
                    {{ topStat.quitCount }}
                </label><br/>
            </form>
        </div>
    </section>

</template>
<style scoped>
    /* Local styles for this template */
    .home {
        margin:2vw;
        border: 5px solid rgb(0, 0, 0);
        background-color: lightgray;
        color: rgb(0, 0, 0);
        height: 78vh;
        width: 80vw;
    }

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }

    select, input, button {
        font-size: 1.2em;
        font-weight: 700;
        height: 1.4em;

    }

    button {
        padding: .5em;
        margin: .25em;
        padding-bottom: 1.5em;
    }
</style>


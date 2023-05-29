<!--
<VFSHome name="Title" />
Copyright (c) 2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>

    import Controller from '@/plugins/controller'
    import Config from '@/stores/ConfigStore'
    import Telly from '@/stores/TelemtryStore'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );

            this.configInfo = new Config();
            this.telInfo = new Telly();

            this.vm = {
                topStat: {
                    mostChangedConfig:"Player Speed",
                    mostDramaticTel:"Prone Deaths",
                    leastDramaticTel:"Crouch Deaths"
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
                <label for="s1">Most Edited Config Value:
                    {{ topStat.mostChangedConfig }}
                </label><br/>
                <label for="s2">Telemtry Data With The Most Activity:
                    {{ topStat.mostDramaticTel }}
                </label><br/>
                <label for="s3">Telemtry Data With The Least Activity: 
                    {{ topStat.leastDramaticTel }}
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


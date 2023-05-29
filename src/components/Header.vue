<!--
<VFSHeader />
Copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                subtitle: "DubiousSoftGames",
            }
            this.props = {
                title: String
            }

            this.injectStore( useInfoStore );
        }
    }

    export default new HeaderController('VFSHeader');

</script>
<template>

    <section class="container left">
        <div class="title item">
            <h1>{{ infoStore.name }}</h1>
            <h4>{{ subtitle }} </h4>
        </div>
        <slot class="item"></slot>
    </section>

</template>
<style scoped>
    .title h1, .title h4 {
        margin-left: 1vw;
        text-align:left;
        width: 100%;
    }

    @media (min-width: 1024px) {
        .logo {
            margin: 0 2rem 0 0;
        }
    }
</style>
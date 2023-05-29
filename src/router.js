/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
            path:"/",
            name:"Home",
            component: () => import('@/routes/HomeView.vue'),
            props: { name: "DemoApp"}
        },{
            path:"/gameconfig",
            name:"Game Config",
            component: () => import('@/routes/GameConifg.vue')
        },{
            path:"/gametel",
            name:"Game Telemtry",
            component: () => import('@/routes/GameTel.vue')
        },{
            path:"/admin",
            name:"Admin",
            component: () => import('@/routes/Admin.vue')
        }
    ]
});

export default router;
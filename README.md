# vite-navigation-guards
## Steps

1. Create vue3 template using vite

    ```
    $ npm create vite@latest
    ```

2. Install vuex and vue-router

    ```
    $ npm install vuex vue-router
    ```

3. Store the authorization status in vuex store

    `src/store.js`

4. Create a restricted route as a component

    `src/components/Private.vue`
   
5. Create login component

    `src/components/Login.vue`

6. Define navigation routes and guard access

    `src/router.js`

7. Import `store.js` and `router.js` in `App.vue` 

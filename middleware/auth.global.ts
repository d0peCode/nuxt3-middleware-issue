import { RouteLocationNormalized } from "vue-router";
import axios from "axios";

export default defineNuxtRouteMiddleware(
    async (route: RouteLocationNormalized) => {
        if (process.client) {
            return;
        }

        const app1 = useNuxtApp()
        console.log('app1', app1)

        return handleAnonymousUser();
    }
);

async function handleAnonymousUser() {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/todos/1')

        const app2 = useNuxtApp()
        console.log('app2', app2)
    } catch (e) {
        console.log('error fetching', e)
    }
}

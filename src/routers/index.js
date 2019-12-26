import Router from 'vue-router';
import Vue from 'vue';

import main from './main';
import my from './my';
import activity from './activity';

Vue.use(Router);

const router = new Router({
    routes: [
        ...main,
        ...my,
        ...activity,
    ],
});


// export { router };
export default router;

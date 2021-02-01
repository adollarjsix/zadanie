import { route } from './router';

route('/', 'home', function() {
});

route('*', '404', function () {});

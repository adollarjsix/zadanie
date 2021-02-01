import { route } from '../router';

route('/', 'home', function() {});

route('*', 'page404', function () {});

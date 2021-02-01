import { route } from '../router';

route('/', 'home', () => {});

route('*', 'page404', () => {});

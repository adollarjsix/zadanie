import { route } from '../router';
import homeController from './controllers/home';
import page404Controller from './controllers/page404';

route('/', 'home', homeController);

route('*', 'page404', page404Controller);

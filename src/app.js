import { route } from '../router';
import homeController from './controllers/home';
import loggedInController from './controllers/loggedin';
import page404Controller from './controllers/page404';

route('/', 'home', homeController);

route('/loggedin', 'loggedin', loggedInController);

route('*', 'page404', page404Controller);

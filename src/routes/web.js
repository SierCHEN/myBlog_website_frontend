import Home from '../pages/Home';
import Writing from '../pages/Writing';
import ArticlePage from '../pages/ArticlePage';
import AuthPage from '../pages/AuthPage';
import CategoriesPage from '../pages/CategoriesPage';
import MyBlogPage from '../pages/MyBlogPage';

const user = JSON.parse(localStorage.getItem('profile'))

export default {
    path: '',
    name: 'home',
    childRoutes: [
        { path: '', component: Home },
        { path: 'write', component: Writing },
        { path: 'write/:id', component: Writing },
        { path: 'article/:id', component: ArticlePage },
        { path: 'auth', component: (!user ? AuthPage : Home) },
        { path: 'search', component: Home },
        { path: 'categories', component: CategoriesPage },
        { path: 'myblog', component: MyBlogPage },
    ]
}

// childRoutes: [
//     { path: '', component: lazy(() => import('../pages/Home')) },
//     { path: 'write', component: lazy(() => import('../pages/Writing')) },
//     { path: 'article/:id', component: lazy(() => import('../pages/ArticlePage')) },
// ]
import { ReactNode } from "react";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Home from "../pages/Home";

interface NavigationInterface {
    id: number;
    name: string;
    route: string;
    component: ReactNode;
}

export const navigation:NavigationInterface[] = [
    {
        id: 1,
        name: 'Home',
        route: '/',
        component: <Home />
    },
    {
        id: 2,
        name: 'Blogs',
        route: '/blogs',
        component: <Blog />
    }
]

export const subNavigation:NavigationInterface[] = [
    {
        id: 1,
        name: 'Blogs',
        route: '/blogs/:id',
        component: <BlogDetail />
    },
]
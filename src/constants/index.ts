import { ArrowDownSquare, ArrowUpDown, Home, PlusCircle, UserCircle } from "lucide-react";

const NavigationLinks = [
    {
        label: 'home',
        icon: Home,
        href: '/home',
    },
    {
        label: 'withdraw',
        icon: ArrowDownSquare,
        href: '/withdraw',
    },
    {
        label: 'add funds',
        icon: PlusCircle,
        href: '/add-fund',
    },
    {
        label: 'swap',
        icon: ArrowUpDown,
        href: '/swap',
    },
    {
        label: 'profile',
        icon: UserCircle,
        href: '/profile',
    },
];


export { NavigationLinks }
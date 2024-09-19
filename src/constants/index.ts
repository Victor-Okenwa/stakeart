import { ArrowUpDown, BadgeDollarSignIcon, GavelIcon, Gem, Home, Images, PlusCircle, PlusSquare, Timer, UserCircle } from "lucide-react";
import { FaFunnelDollar, FaPlusSquare } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";

const NavigationLinks = [
    {
        label: 'home',
        icon: Home,
        href: '/home',
    },
    {
        label: 'auctions',
        icon: GavelIcon,
        href: '/auctions',
    },
    {
        label: 'gallery',
        icon: Images,
        href: '/gallery',
    },
    {
        label: 'stakes',
        icon: BadgeDollarSignIcon,
        href: '/stakes',
    },
    {
        label: 'more',
        icon: UserCircle,
        href: '/more',
    },
];
const GalleryNavigationLinks = [
    {
        label: 'home',
        icon: Home,
        href: '/home',
    },
    {
        label: 'assets',
        icon: Gem,
        href: '/gallery/home',
    },
    {
        label: 'mint asset',
        icon: PlusSquare,
        href: '/gallery/mint',
    },
    {
        label: 'stake cuts',
        icon: FaFunnelDollar,
        href: '/gallery/stake-cuts',
    },
    {
        label: 'exhibition',
        icon: Timer,
        href: '/gallery/exhibition',
    },
];


export { NavigationLinks, GalleryNavigationLinks }
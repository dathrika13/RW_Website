import { IAlbum } from "ngx-lightbox";
import { MenuItem } from "src/app/shared/model";

const MENU_ITEMS: MenuItem[] = [
    {
        key: 'getting-started',
        label: 'Getting Started',
        children: [
            {
                key: 'introduction',
                label: 'Introduction',
                url: '/docs/introduction',
            },
            {
                key: 'quick-start',
                label: 'Quick Start',
                url: '/docs/quick-start',
            },
            {
                key: 'customization',
                label: 'Customization',
                url: '/docs/customization',
            },
            {
                key: 'routing',
                label: 'Routing',
                url: '/docs/routing',
            },
            {
                key: 'code-spliting',
                label: 'Code Spliting',
                url: '/docs/code-spliting',
            }
        ],
    },
    {
        key: 'style-guide',
        label: 'Style Guide',
        children: [
            {
                key: 'colors',
                label: 'Colors',
                url: '/docs/colors',
            },
            {
                key: 'typography',
                label: 'Typography',
                url: '/docs/typography',
            },
            {
                key: 'icons',
                label: 'Icons',
                url: '/docs/icons',
            },
        ],
    },
    {
        key: 'components',
        label: 'Components',
        children: [
            {
                key: 'bootstrap',
                label: 'Bootstrap',
                url: '/docs/bootstrap',
            },
            {
                key: 'custom',
                label: 'Custom',
                url: '/docs/custom',
            },
            {
                key: 'plugins',
                label: 'Plugins',
                url: '/docs/plugins',
            },
        ],
    }
];

const IMAGES1: IAlbum[] = [
    {
        src: 'assets/images/photos/3.jpg',
        caption: 'A lavish inside style',
        thumb: 'assets/images/photos/3.jpg',
    },
    {
        src: 'assets/images/photos/4.jpg',
        caption: 'Another inside view',
        thumb: 'assets/images/photos/4.jpg',
    },
    {
        src: 'assets/images/photos/1.jpg',
        caption: 'Spacious sitting arrangement',
        thumb: 'assets/images/photos/1.jpg',
    },
    {
        src: 'assets/images/photos/2.jpg',
        caption: 'A lavish outside view',
        thumb: 'assets/images/photos/2.jpg',
    },
    {
        src: 'assets/images/photos/10.jpg',
        caption: 'Kitchen',
        thumb: 'assets/images/photos/10.jpg',
    },
    {
        src: 'assets/images/photos/5.jpg',
        caption: 'Lavish styled bedroom',
        thumb: 'assets/images/photos/5.jpg',
    },
];

const IMAGES2: IAlbum[] = [
    {
        src: 'assets/images/photos/11.jpg',
        thumb: 'assets/images/photos/11.jpg',
    },
    {
        src: 'assets/images/photos/5.jpg',
        thumb: 'assets/images/photos/5.jpg',
    },
    {
        src: 'assets/images/photos/7.jpg',
        thumb: 'assets/images/photos/7.jpg',
    },
    {
        src: 'assets/images/photos/8.jpg',
        thumb: 'assets/images/photos/8.jpg',
    },
    {
        src: 'assets/images/photos/10.jpg',
        thumb: 'assets/images/photos/10.jpg',
    },
];


export { MENU_ITEMS,  IMAGES1, IMAGES2 };
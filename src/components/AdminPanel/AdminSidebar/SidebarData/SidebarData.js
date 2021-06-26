import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

export const SidebarData = [
    {
        title: "Home",
        path: '/home',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        title: "Banner",
        path: '/banner',
        icon: <FontAwesomeIcon icon={faImage} />
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FontAwesomeIcon icon={faPenSquare} />
    },
    {
        title: 'Blog List',
        path: '/blog-list',
        icon: <FontAwesomeIcon icon={faList} />
    }
]


import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

export const SidebarData = [
    {
        title: "Home",
        path: '/admin',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        title: "Banner",
        path: '/admin/banner',
        icon: <FontAwesomeIcon icon={faImage} />
    },
    {
        title: 'Post A Blog',
        path: '/admin/post-blog',
        icon: <FontAwesomeIcon icon={faPenSquare} />
    },
    {
        title: 'Blog List',
        path: '/admin/blog-list',
        icon: <FontAwesomeIcon icon={faList} />
    }
]


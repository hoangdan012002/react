import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '@/assets/img/img';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import './Header.scss';
import Button from '@/components/Button/Button.js';
import {
    // faPlus
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuHeader/MenuHeader';
import HeaderSearch from './HeaderSearch';

function Header() {
    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
    };
    const menu_list = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'Tiếng Việt',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/Feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard and shortcut',
        },
    ];
    return (
        <header className="Wraper_header">
            <div className="inner_header">
                <div className="header_logo">
                    <Link to="/">
                        <img src={images.logo1} alt="Tiktok" />
                    </Link>
                </div>
                <HeaderSearch />
                <div className="header_action">
                    <Button primary to="/login">
                        Đăng nhập
                    </Button>
                    <Button to="/upload" border>
                        Tải lên
                    </Button>
                    <MenuItem list={menu_list} onChange={handleMenuChange}>
                        <div className="header_action_icon">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </MenuItem>
                </div>
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import Header from '@/components/Layout/DefaultLayout/Header/Header.js';
import Sidebar from '@/components/Layout/DefaultLayout/Sidebar/Sidebar.js';
import './DefaultLayout.scss';

function DedaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="wraper_container">
                <div className="inner_container">
                    <Sidebar />
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DedaultLayout;

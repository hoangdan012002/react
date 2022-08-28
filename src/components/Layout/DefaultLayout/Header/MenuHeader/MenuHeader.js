import './MenuHeader.scss';
import { useState } from 'react';
import Button from '@/components/Button/Button.js';
import MenuC2 from './MenuC2';
import TippyMenuList from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '@/components/Popper/Popper.js';
// import { Link } from 'react-router-dom';
const defaultFn = () => {};

function MenuItem({ children, list, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: list }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <Button
                    key={index}
                    onClick={() => {
                        if (isParent)
                            setHistory((prev) => [...prev, item.children]);
                        else {
                            onChange(item);
                        }
                    }}
                    leftIcon={item.icon}
                    to={item.to}
                    className="menu_item"
                >
                    {item.title}
                </Button>
            );
        });
    };

    return (
        <div>
            <TippyMenuList
                interactive
                delay={[0, 500]}
                placement="bottom-end"
                hideOnClick="false"
                render={(attrs) => (
                    <div className="menu_items" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {history.length > 1 && (
                                <MenuC2
                                    title="Language"
                                    onback={() => {
                                        setHistory((prev) =>
                                            prev.slice(0, prev.length - 1),
                                        );
                                    }}
                                />
                            )}
                            {renderItem()}
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </TippyMenuList>
        </div>
    );
}

export default MenuItem;

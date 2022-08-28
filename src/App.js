import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes/Routes.js';
import DefaultLayout from '@/components/Layout/DefaultLayout/DefaultLayout.js';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        // let Layout = DefaultLayout;

                        // if (route.layout) {
                        //     Layout = route.layout;
                        // } else if (route.layout == null) {
                        //     Layout = Fragment;
                        // }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App;

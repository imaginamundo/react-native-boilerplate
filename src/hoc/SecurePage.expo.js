import React from 'react';

import DefaultPage from './DefaultPage';

export default (Page) => {
    function SecurePage() {
        return (
            <Page />
        );
    };

    return DefaultPage(SecurePage(Page));
};
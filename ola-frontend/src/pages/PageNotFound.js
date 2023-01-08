/**
 * It returns a Result component from antd with a status of 404, a title of 404, and a subtitle of
 * "Sorry, the page you visited does not exist."
 * @returns A 404 page
 */
import React from 'react';
import { Result } from 'antd';

function PageNotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
        />)
}

export default PageNotFound;
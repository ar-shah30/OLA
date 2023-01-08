/* This is a React component. */
import React from 'react';
import "../../styles/Login/index.css";
import {
    Typography,
    Layout,
    Tabs,
} from 'antd';
import LawyerLogin from './lawyerLogin';
import ClientLogin from './clientLogin';

const { Text } = Typography
const { Footer } = Layout;

/**
 * It returns a Layout component with a Tabs component inside it
 * @returns A layout with a tabbed view of the client and lawyer login components.
 */
const Login = () => {

    return (
        <Layout className='loginLayout'>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Client" key="1">
                    <ClientLogin />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Lawyer" key="2">
                    <LawyerLogin />
                </Tabs.TabPane>
            </Tabs>
            <Footer>
                <Text>Online Legal Assistance</Text>
            </Footer>
        </Layout>
    );
};
export default Login;
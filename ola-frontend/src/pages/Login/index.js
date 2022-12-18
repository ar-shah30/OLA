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
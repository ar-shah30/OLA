/**
 * It returns a Layout component that contains a Tabs component that contains two TabPane components,
 * one for the client and one for the lawyer
 */
import React from 'react';
import "../../styles/Registeration/index.css";
import ClientRegisterartion from './ClientRegistration';
import LawyerRegisterartion from './LawyerRegistration';
import {
    Layout,
    Tabs,
} from 'antd';
const Registerartion = () => {

    return (
        <Layout className='registerartionLayout'>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Client" key="1">
                    <ClientRegisterartion />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Lawyer" key="2">
                    <LawyerRegisterartion />
                </Tabs.TabPane>
            </Tabs>
        </Layout>

    );
};


export default Registerartion;
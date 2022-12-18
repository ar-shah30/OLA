import React from 'react';
import "../../styles/ClientDashboard/index.css";
import ClientProfile from "./ClientProfile";
import AddCase from "./AddCase";
import CaseStatus from "./CaseStatus";
import ClientPayment from "./ClientPayment";
import PageNotFound from "../PageNotFound";
import ClientSetting from "./ClientSetting";
import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import {
    ProfileOutlined,
    FileAddOutlined,
    CheckCircleOutlined,
    PayCircleOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography, Badge } from 'antd';
const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const ClientDashboard = () => (
    <Layout>
        <Header className="header">
            <Link to='/client'>
                <Badge status="success" dot offset={[-115, 25]}>
                    <Text style={{ color: "white", fontSize: "1rem", fontFamily: "Rammetto" }}>
                        LegalAssistance
                    </Text>
                </Badge>
            </Link>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to='clientprofile'> <ProfileOutlined /> Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='addcase'> <FileAddOutlined /> Add Case</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='casestatus'> <CheckCircleOutlined /> Case Status</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='clientpayment'> <PayCircleOutlined /> Payment</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='clientsetting'> <SettingOutlined /> Setting</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout
                style={{
                    padding: '0 24px 24px',
                }}
            >
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <Routes>
                        <Route exact path="clientprofile" element={<ClientProfile />} />
                        <Route exact path="addcase" element={<AddCase />} />
                        <Route exact path="casestatus" element={<CaseStatus />} />
                        <Route exact path="clientpayment" element={<ClientPayment />} />
                        <Route exact path="clientsetting" element={<ClientSetting />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </Layout>
);
export default ClientDashboard;
import React from 'react';
import "../../styles/LawyerDashboard/index.css";
import LawyerProfile from "./LawyerProfile";
import AvailabeCases from "./AvailabeCases";
import PostStatus from "./PostStatus";
import PageNotFound from "../PageNotFound";
import LawyerPayment from "./LawyerPayment";
import LawyerSetting from "./LawyerSetting";
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
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

const LawyerDashboard = () => (
    <Layout>
        <Header className="header">
            <Link to='/lawyer'>
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
                        <Link to='lawyerprofile'> <ProfileOutlined /> Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='availablecases'> <FileAddOutlined /> Available Case</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='poststatus'> <CheckCircleOutlined /> Post Status</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='lawyerpayment'> <PayCircleOutlined /> Payment</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='lawyersetting'> <SettingOutlined /> Setting</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout
                style={{
                    padding: '0 24px 24px',
                }}
            >
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Routes>
                        <Route exact path="lawyerprofile" element={<LawyerProfile />} />
                        <Route exact path="availablecases" element={<AvailabeCases />} />
                        <Route exact path="poststatus" element={<PostStatus />} />
                        <Route exact path="lawyerpayment" element={<LawyerPayment />} />
                        <Route exact path="lawyersetting" element={<LawyerSetting />} />
                        <Route exact path="*" element={<PageNotFound />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </Layout>
);
export default LawyerDashboard;
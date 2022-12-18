import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/Login/index.css";
import { toast } from '../../../../utilities/notification';
import {
    Form,
    Input,
    Button,
    Typography,
    Layout,
} from 'antd';
import { LockOutlined } from '@ant-design/icons';
const { Text } = Typography
const { Content, Footer } = Layout;

const ChangePassword = () => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (

        <Layout className='loginLayout'>
            <Content>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item>
                        <Text className='site-form-item-icon'>Change Password</Text>
                    </Form.Item>
                    <Form.Item
                        name="new_password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your new password!',
                            },
                        ]}
                    >
                        <Input type='password' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="New Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirm_password"
                        rules={[
                            {
                                required: true,
                                message: 'password did not match!',
                            },
                        ]}
                    >
                        <Input type='password' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => toast("Successfully, changed!")} className="login-form-button">
                            Reset Password
                        </Button>
                        <Link to='/'>back to login</Link>
                    </Form.Item>
                </Form>
            </Content>
            <Footer>
                <Text>Online Legal Assistance</Text>
            </Footer>
        </Layout>

    );
};


export default ChangePassword;
/* The above code is a React component that renders a form for the user to enter their email address. */
import React from 'react';
import "../../../../styles/Login/index.css";
import { toast } from '../../../../utilities/notification';
import {
    Form,
    Input,
    Button,
    Typography,
    Layout,
} from 'antd';
import { MailOutlined } from '@ant-design/icons';
const { Text } = Typography
const { Content, Footer } = Layout;

/**
 * It's a form that takes in an email and sends a reset code to that email
 */
const EnterEmail = () => {

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
                        <Text className='site-form-item-icon'>Forget Password</Text>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" 
                            onClick={() => toast("You will receive an email with a reset code if user with that email exist")} 
                            className="login-form-button">
                            Send Reset Code
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            <Footer>
                <Text>Online Legal Assistance</Text>
            </Footer>
        </Layout>

    );
};


export default EnterEmail;
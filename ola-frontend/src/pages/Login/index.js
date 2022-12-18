import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Login/index.css";
import {
    Form,
    Input,
    Button,
    Checkbox,
    Typography,
    Layout,
} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { clientLoginApi } from '../../api';
import { clientLoginState } from '../../redux/clientLogin';
const { Text } = Typography
const { Content, Footer } = Layout;

const Login = () => {
    const { clientLogin } = useSelector(state => state.clientLogin)
    console.log(clientLogin);

    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const onSubmit = () => { 
        clientLoginApi.getClientLogin().then(() => dispatch(clientLoginState(form?.getFieldsValue())));
    }

    return (

        <Layout className='loginLayout'>
            <Content>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    form={form}
                >
                    <Form.Item>
                        <Text className='site-form-item-icon'>Login</Text>
                    </Form.Item>
                    <Form.Item
                        name="client_email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="client_password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link className="login-form-forgot" to="/enteremail">
                            Forgot password
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        {/* <Link to='/client'> */}
                            <Button type="primary" htmlType="submit" onClick={onSubmit} className="login-form-button">
                                Log in
                            </Button>
                        {/* </Link> */}
                        Or <Link to="register">register now!</Link>
                    </Form.Item>
                </Form>
            </Content>
            <Footer>
                <Text>Online Legal Assistance</Text>
            </Footer>
        </Layout>

    );
};


export default Login;
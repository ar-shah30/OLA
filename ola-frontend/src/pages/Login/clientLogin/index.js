import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/Login/index.css";
import { clientLoginApi } from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import { clientLoginState } from '../../../redux/clientLogin';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Typography,
    Layout,
    Alert,
    Space,
} from 'antd';
import { MailOutlined, LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
const { Text } = Typography
const { Content } = Layout;

const ClientLogin = () => {
    const [show, setShow] = React.useState(false);
    const { clientLogin } = useSelector(state => state.clientLogin)
    console.log(clientLogin);

    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const onClientSubmit = () => {
        clientLoginApi.getClientLogin(form?.getFieldsValue())
            .then(() => {
                dispatch(clientLoginState(form?.getFieldsValue()))
                if (form?.getFieldsValue().client_email !== undefined && form?.getFieldsValue().client_password !== undefined) {
                    setShow(true)
                } else {
                    setShow(false)
                }
            })
    }

    return (
        <Content>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
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
                    <Button type="primary" htmlType="submit" onClick={onClientSubmit} className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="register">register now!</Link>
                </Form.Item>
            </Form>
            {show && <Alert
                message="Welcome!"
                type="success"
                showIcon
                action={
                    <Space>
                        <Link to='/client'>
                            <Button size="small" success type="ghost">
                                Dashboard <ArrowRightOutlined />
                            </Button>
                        </Link>
                    </Space>
                }
                closable
            />}
        </Content>
    );
};
export default ClientLogin;
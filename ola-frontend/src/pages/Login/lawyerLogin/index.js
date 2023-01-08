import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/Login/index.css";
import { lawyerLoginApi } from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import { lawyerLoginState } from '../../../redux/lawyerLogin';
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

/**
 * The LawyerLogin function is a React component that renders a form for a lawyer to login
 */
const LawyerLogin = () => {
    const [show, setShow] = React.useState(false);
    const { lawyerLogin } = useSelector(state => state.lawyerLogin)
    console.log(lawyerLogin);

    const dispatch = useDispatch()
    const [form] = Form.useForm();

    /**
     * The function onLawyerSubmit() is called when the user clicks the submit button on the login
     * form. The function then calls the getLawyerLogin() function from the lawyerLoginApi.js file. If
     * the user's email and password are correct, the function will dispatch the lawyerLoginState()
     * function from the lawyerLoginState.js file. If the user's email and password are correct, the
     * function will set the show variable to true. If the user's email and password are incorrect, the
     * function will set the show variable to false
     */
    const onLawyerSubmit = () => {
        lawyerLoginApi.getLawyerLogin(form?.getFieldsValue())
            .then(() => {
                dispatch(lawyerLoginState(form?.getFieldsValue()))
                if (form?.getFieldsValue().lawyer_email !== undefined && form?.getFieldsValue().lawyer_password !== undefined) {
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
                    name="lawyer_email"
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
                    name="lawyer_password"
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
                    <Button type="primary" htmlType="submit" onClick={onLawyerSubmit} className="login-form-button">
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
                        <Link to='/lawyer'>
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
export default LawyerLogin;
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/Registeration/index.css";
import { clientRegisterApi } from '../../../api';
import { clientRegisterState } from '../../../redux/clientRegister';
import { useSelector, useDispatch } from 'react-redux';
import {
    Form,
    Input,
    Button,
    Layout,
} from 'antd';
import {
    MailOutlined,
    LockOutlined,
    UserOutlined,
    PhoneOutlined,
    IdcardOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
const { Content } = Layout;

const ClientRegisterartion = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const { clientRegister } = useSelector(state => state.clientRegister)
    console.log(clientRegister);

    const onSubmit = () => {
        clientRegisterApi.postClientRegister(form?.getFieldsValue()).then(() => dispatch(clientRegisterState(form?.getFieldsValue())));
    }
    return (
        <Content>
            <div className='registerartionHeader'>
                <Form
                    name="normal_registerartion"
                    className="registerartion-form"
                    initialValues={{
                        remember: true,
                    }}
                    form={form}
                >
                    <Form.Item
                        name="client_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="client_email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="client_phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone Number!',
                            },
                        ]}
                    >
                        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
                    </Form.Item>
                    <Form.Item
                        name="client_age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone Number!',
                            },
                        ]}
                    >
                        <Input prefix={<ClockCircleOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
                    </Form.Item>
                    <Form.Item
                        name="client_cnic"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your CNIC Number!',
                            },
                        ]}
                    >
                        <Input prefix={<IdcardOutlined className="site-form-item-icon" />} placeholder="CNIC" />
                    </Form.Item>
                    <Form.Item
                        name="client_password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password(6 digits at least, case sensitive)!',
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
                        <Button type="primary" htmlType="submit" onClick={onSubmit} className="registerartion-form-button">
                            Register
                        </Button>
                        Or <Link to="/">already have an account!</Link>
                    </Form.Item>
                </Form>
            </div>
        </Content>
    );
};


export default ClientRegisterartion;
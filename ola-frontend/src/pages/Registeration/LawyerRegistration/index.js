import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/Registeration/index.css";
import { lawyerRegisterApi } from '../../../api';
import { lawyerRegisterState } from '../../../redux/lawyerRegister';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from '../../../utilities/notification';
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
    StarOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
const { Content } = Layout;

const LawyerRegisterartion = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const { lawyerRegister } = useSelector(state => state.lawyerRegister)
    console.log(lawyerRegister);

    const onSubmit = () => {
        lawyerRegisterApi.postLawyerRegister(form?.getFieldsValue()).then(() => dispatch(lawyerRegisterState(form?.getFieldsValue())));
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
                        name="lawyer_name"
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
                        name="lawyer_email"
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
                        name="lawyer_phone"
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
                        name="lawyer_age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password(6 digits at least, case sensitive)!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<ClockCircleOutlined className="site-form-item-icon" />}
                            placeholder="Age"
                        />
                    </Form.Item>
                    <Form.Item
                        name="lawyer_specialization"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Specialization!',
                            },
                        ]}
                    >
                        <Input prefix={<StarOutlined className="site-form-item-icon" />} placeholder="Specialization" />
                    </Form.Item>
                    <Form.Item
                        name="lawyer_cnic"
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
                        name="lawyer_password"
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
                        <Button type="primary" htmlType="submit" onClick={() => {onSubmit(); toast("Successfully, Registered!")}} className="registerartion-form-button">
                            Register
                        </Button>
                        Or <Link to="/">already have an account!</Link>
                    </Form.Item>
                </Form>
            </div>
        </Content>
    );
};


export default LawyerRegisterartion;
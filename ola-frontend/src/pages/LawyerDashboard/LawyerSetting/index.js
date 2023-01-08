/**
 * It returns a form with a username, profession, email, phone number, change password and update
 * button
 * @returns A form with a row of two columns.
 */
import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

function LawyerSetting() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    /* A form with a username, profession, email, phone number, change password and update
     * button
     * @returns A form with a row of two columns.
    */

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
        >
            <Row gutter={[50, 25]}>
                <Col span={12}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder='eg, Ajwabwe' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Profession"
                        name="profession"
                        rules={[{ required: true, message: 'Please input your profession!' }]}
                    >
                        <Input placeholder='eg, Software Engineer' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='eg, ajwabwe69@gmail.com' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item>
                        <Link to='/changePassword'>
                            <Button type='link'>Change password</Button>
                        </Link>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default LawyerSetting;
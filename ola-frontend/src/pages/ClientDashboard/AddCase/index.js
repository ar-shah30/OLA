/**
 * This function is used to add cases to the database
 * @returns A table with the following columns: Title, Client Email, Lawyer ID, and Submit.
 */
import {
    Table,
    Form,
    Button,
    Input,
} from "antd";
import "../../../styles/LawyerDashboard/index.css";
import { addCaseApi } from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import { addCaseState } from '../../../redux/addCase';

function AddCases() {
    const { addCase } = useSelector(state => state.addCase)

    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const onSubmit = () => {
        addCaseApi.getAddCase(form?.getFieldsValue()).then(() => dispatch(addCaseState(form?.getFieldsValue())))
    }
    const data = [addCase];

    return (
        <>
            <Form className="availableCases" form={form} >
                <Table dataSource={data} pagination={{ pageSize: 7 }} >
                    <Table.Column
                        title="Title"
                        dataIndex="case_details"
                        key="case_details"
                        render={() =>
                            <Form.Item name='case_details'>
                                <Input />
                            </Form.Item>
                        }
                    />
                    <Table.Column
                        title="Client Email"
                        dataIndex="client"
                        key="client"
                        render={() =>
                            <Form.Item name='client'>
                                <Input />
                            </Form.Item>
                        }
                    />
                    <Table.Column
                        title="Lawyer ID"
                        dataIndex="lawyer"
                        key="lawyer"
                        render={() =>
                            <Form.Item name='lawyer'>
                                <Input />
                            </Form.Item>
                        }
                    />
                    <Table.Column
                        title="Submit"
                        render={() =>
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={onSubmit}
                                className="login-form-button"
                            >
                                Submit
                            </Button>
                        }
                    />
                </Table>
            </Form>
        </>
    );
}
export default AddCases;
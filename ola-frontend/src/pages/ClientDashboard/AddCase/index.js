import {
    Table,
    Form,
    Button,
    Row,
    Col,
    Input
} from "antd";
import "../../../styles/LawyerDashboard/index.css";

function AddCases() {

    const data = [
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            action: ["Accept", "Reject"]
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            action: ["Accept", "Reject"]
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            action: ["Accept", "Reject"]
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            action: ["Accept", "Reject"]
        },
    ]

    return (
        <>
            <Form className="availableCases">
                <Table dataSource={data} pagination={{ pageSize: 7 }} >
                    <Table.Column
                        title="Title"
                        dataIndex="title"
                        key="id"
                    />
                    <Table.Column
                        title="Client"
                        dataIndex="client"
                        key="id"
                    />
                    <Table.Column
                        title="Fee"
                        dataIndex="fee"
                        key="id"
                        render={(data) => (<Input placeholder="Rs.20,000"/>)}
                    />
                    <Table.Column
                        title="Action"
                        dataIndex="action"
                        key="id"
                        render={(data) => (
                            <Form.Item>
                                <Row>
                                    <Col span={7}><Button type="primary">{data[0]}</Button> </Col>
                                    <Col span={17}><Button type="text" danger>{data[1]}</Button> </Col>
                                </Row>
                            </Form.Item>
                        )}
                    />
                </Table>
            </Form>
        </>
    );
}
export default AddCases;
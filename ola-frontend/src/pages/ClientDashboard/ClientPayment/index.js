import {
    Table,
    Form,
    Typography
} from "antd";
const { Text } = Typography;

function ClientPayment() {

    const data = [
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            payment: "Pending"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            payment: "Pending"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            payment: "Pending"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            fee: 'Rs. 10,000',
            payment: "Pending"
        },
    ]

    return (
        <>
            <Form
                className="ClientPayment"
            >
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
                    />
                    <Table.Column
                        title="Payment"
                        dataIndex="payment"
                        key="id"
                        render={(data, index) => (<Text type="secondary">{data}</Text>)}
                    />
                </Table>
            </Form>
        </>
    );
}
export default ClientPayment;
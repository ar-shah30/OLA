import {
    Table,
    Form,
    Button,
    Select,
} from "antd";
import "../../../styles/LawyerDashboard/index.css";

function PostStatus() {

    const data = [
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            status: [{ status: 'Processing' }, { status: 'Done' }],
            postStatus: "Post"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            status: [{ status: 'Processing' }, { status: 'Done' }],
            postStatus: "Post"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            status: [{ status: 'Processing' }, { status: 'Done' }],
            postStatus: "Post"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            status: [{ status: 'Processing' }, { status: 'Done' }],
            postStatus: "Post"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            status: [{ status: 'Processing' }, { status: 'Done' }],
            postStatus: "Post"
        },
        {
            key: '1',
            title: 'Case 1',
            client: "Bashir",
            status: [{ status: 'Processing' }, { status: 'Done' }],
            postStatus: "Post"
        },
    ]

    return (
        <>
            <Form
                className="postStatus"
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
                        title="Status"
                        dataIndex="status"
                        key="id"
                        render={(data) => (
                            <Form.Item >
                                <Select >
                                    {data?.map((item, index) =>
                                        <Select.Option value={item.status}>{item.status}</Select.Option>
                                    )}
                                </Select>
                            </Form.Item>
                        )}
                    />
                    <Table.Column
                        title="Post Status"
                        dataIndex="postStatus"
                        key="id"
                        render={(data) => (
                            <Form.Item>
                                <Button type="primary">{data}</Button>
                            </Form.Item>
                        )}
                    />
                </Table>
            </Form>
        </>
    );
}
export default PostStatus;
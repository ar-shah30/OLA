import {
    Table,
    Form,
} from "antd";
import "../../../styles/LawyerDashboard/index.css";

function CaseStatus() {

    const data = [
        {
            key: '1',
            title: 'Case 1',
            lawyer: "Bashir",
            status: "Processing",
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
                        title="Lawyer"
                        dataIndex="lawyer"
                        key="id"
                    />
                    <Table.Column
                        title="Status"
                        dataIndex="status"
                        key="id"
                    />
                </Table>
            </Form>
        </>
    );
}
export default CaseStatus;
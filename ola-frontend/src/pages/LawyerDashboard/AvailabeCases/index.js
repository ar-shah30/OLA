/**
 * It fetches the available cases from the database and displays them in a table
 * @returns A table with the available cases.
 */
import {
    Table,
    Form,
} from "antd";
import "../../../styles/LawyerDashboard/index.css";
import { availableCasesApi } from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import { availableCasesState } from '../../../redux/availableCase';
import { useEffect } from "react";
import moment from "moment";

function AvailableCases() {
    /* Destructuring the state from the redux store. */
    const { availableCases } = useSelector(state => state.availableCases)
    console.log(availableCases);
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    /* A hook that is called when the component is mounted. It fetches the available cases from the
    database and displays them in a table. */
    useEffect(() => {
        availableCasesApi.getAvailableCases(6666).then((res) => dispatch(availableCasesState(res)))
    }, [dispatch, form])

    /* Mapping the availableCases object to an array of objects. */
    const data = Object.keys(availableCases).map((key) => {
        return {
            key: key,
            case_reference_no: availableCases[key].case_reference_no,
            lawyer_name: availableCases[key].lawyer_name,
            client_name: availableCases[key].client_name,
            case_details: availableCases[key].case_details,
            case_creation_date: availableCases[key].case_creation_date,
        }
    })

    /* Returning a table with the available cases. */
    return (
        <>
            <Form className="availableCases" form={form} >
                <Table dataSource={data} pagination={{ pageSize: 7 }} >
                    <Table.Column
                        title="Reference No"
                        dataIndex="case_reference_no"
                        key="case_reference_no"
                    />
                    <Table.Column
                        title="Lawyer Name"
                        dataIndex="lawyer_name"
                        key="lawyer_name"
                    />
                    <Table.Column
                        title="Client Name"
                        dataIndex="client_name"
                        key="client_name"
                    />
                    <Table.Column
                        title="Case Details"
                        dataIndex="case_details"
                        key="case_details"
                    />
                    <Table.Column
                        title="Case Creation Date"
                        dataIndex="case_creation_date"
                        key="case_creation_date"
                        render={(text) => moment(text).format("DD-MM-YYYY")}
                    />
                </Table>
            </Form>
        </>
    );
}
export default AvailableCases;
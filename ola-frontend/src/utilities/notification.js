/* A function that is used to handle errors. */

import { Typography, notification } from "antd";
import { WarningOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const errorHandler = (error) => {
    if (error.response.status === 400) {
        const message = (
            <Text type="danger">
                {JSON.stringify(error.response.data)}
            </Text>
        )
        notification.open({
            message: <Text type="danger">Error</Text>,
            description: message,
            icon: <WarningOutlined />,
        });
    } else {
        console.log(error.response)
        notification.open({
            message: <Text type="danger">Error</Text>,
            description: (
                <Text type="danger">
                    Something went wrong. Try again later.
                </Text>
            ),
            icon: <WarningOutlined className="color-red" />,
        });
    }
};
/**
 * It takes a string as an argument and displays it as a notification
 * @param res - The response from the server.
 */

export const toast = (res) => {
    notification.open({
        message: <Text>Info</Text>,
        description: (
            <Text type="success">
                {res}
            </Text>
        ),
        icon: <InfoCircleOutlined />,
    });
} 

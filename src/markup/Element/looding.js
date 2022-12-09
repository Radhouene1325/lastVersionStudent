import React from 'react';
import { Alert, Space, Spin } from 'antd';
const Loding = ({ update, c }) => (

    <Space
        direction="vertical"
        style={{
            width: '100%',

        }}
    >
        <Spin tip="Loading...">


            <Alert
                style={{
                    maxWidth: "30rem",
                    backgroundColor: " rgb(231, 243, 255)",
                    padding: "11px",
                    marginTop: "21px",
                    borderRadius: "30px",
                    wordBreak: " break-all",
                }}
                description={
                    <div>
                        <div style={{
                            color: "#212529",
                            fontStyle: " oblique",
                            fontSize: "0.9999rem",
                            fontWeight: " bold",
                            fontFamily: "serif"
                        }} >{c.user.name} {c.user.lastName} </div>
                        <p>{update.text}</p>
                    </div>
                }

            />
        </Spin>
    </Space>
);
export default Loding;
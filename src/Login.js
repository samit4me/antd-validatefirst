import React from "react";
import { Form, Input, Button, Typography } from "antd";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

function Login({ validateFirst = false }) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const title = validateFirst ? "form 2 (validateFirst)" : "form 1";

  return (
    <div style={{ padding: "2rem", border: "1px solid #ccc" }}>
      <Form
        {...layout}
        la
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Typography.Title level={4}>{title}</Typography.Title>
        <Form.Item
          label="Username"
          name="username"
          validateFirst={validateFirst}
          rules={[
            {
              required: true,
              message: "Please input your username!"
            },
            {
              validator: async (rule, value) => {
                if (value !== "test") {
                  return Promise.reject([rule.message]);
                }
              },
              message: "Username must be test"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;

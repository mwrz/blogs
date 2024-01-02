import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Form, Input } from "antd";
import { useUserId } from "./App";

export const EditBlog = () => {
    const { state: { blog } } = useLocation();
    const { userId } = useUserId();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(() => {
        setLoading(true);
        const title = form.getFieldValue('title');
        const body = form.getFieldValue('body');

        fetch(`${process.env.REACT_APP_API_URL}/posts/${blog.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    navigate('/blogs');
                }
            })
            .finally(() => setLoading(false));
    }, [blog.id, form, navigate]);

    useEffect(() => {
        if (userId !== blog.userId) {
            navigate('/dashboard');
        }
    }, [blog.userId, navigate, userId])

    return (
        <Card title="Edit blog post">
            <Form
                layout="vertical"
                form={form}
                initialValues={{ title: blog.title, body: blog.body }}
            >
                <Form.Item label="Title" name="title">
                    <Input placeholder="Blog title" />
                </Form.Item>
                <Form.Item label="Content" name="body">
                    <Input.TextArea rows={10} placeholder="Blog content" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleSubmit} loading={loading}>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, Flex } from "antd";
import { BlogBody, BlogTitle } from "./styles";
import { useUserId } from "./App";
import { useEffect } from "react";

export const Blog = () => {
    const { state: { blog } } = useLocation();
    const { userId } = useUserId();
    const navigate = useNavigate();

    useEffect(() => {
        if (userId !== blog.userId) {
            navigate('/dashboard');
        }
    }, [blog.userId, navigate, userId])


    return (
        <Card>
            <Flex gap="middle">
                <img
                    width={250}
                    alt="post"
                    src="/post.jpg"
                />
                <Flex vertical justify="space-between">
                    <section>
                        <BlogTitle>{blog.title}</BlogTitle>
                        <BlogBody>{blog.body}</BlogBody>
                    </section>
                    <Flex gap='small'>
                        <Link to="edit" state={{ blog }}>Edit</Link>
                        <Link to="#" state={{ blog }}>Delete</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Flex, List } from "antd";
import { BlogBody, BlogTitle } from "./styles";
import { useUserId } from "./App";

interface Blog {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const Blogs = () => {
    const { userId } = useUserId();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users/${userId}/posts`)
            .then(data => data.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            });
    }, [userId])

    return (
        <Card title="All Blog posts" loading={loading}>
            <List
                itemLayout="horizontal"
                dataSource={blogs}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Link to={`${item.id}`} state={{ blog: item }}>
                            <Flex gap='middle'>
                                <img
                                    width={250}
                                    alt="post"
                                    src="/post.jpg"
                                />
                                <section>
                                    <BlogTitle>{item.title}</BlogTitle>
                                    <BlogBody>{item.body}</BlogBody>
                                </section>
                            </Flex>
                        </Link>
                    </List.Item >
                )}
            />
        </Card >
    );
}
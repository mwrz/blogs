import { Avatar, Skeleton, Typography } from "antd";

interface UserProps {
    userName: string | undefined;
    loading: boolean;
}

export const User = ({ userName, loading }: UserProps) => {
    return loading ? <>
        <Skeleton.Avatar active size="large" shape="circle" />
        <Skeleton.Button active />
        <Skeleton.Input active />
    </> : <>
        <Avatar size={64} src="avatar.jpg" data-testid='userAvatar' />
        <Typography.Text type="secondary">Hello</Typography.Text>
        <Typography.Text strong>{userName}</Typography.Text>
    </>;
}
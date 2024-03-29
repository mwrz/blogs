import styled from "styled-components";
import { Layout, Typography } from 'antd';

export const BlogTitle = styled(Typography.Title).attrs({ level: 3 })`
    margin-top: 0;
`

export const BlogBody = styled(Typography.Text).attrs({ type: 'secondary' })`
    white-space: pre-wrap;
`

export const MainLayout = styled(Layout)`
    min-height: 100vh;
`

export const LayoutContent = styled(Layout.Content)`
    margin: 1rem;
`

export const InnerLayout = styled(Layout)`
    margin-left: 200px;
`
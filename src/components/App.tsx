import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { Divider, Flex, Layout } from 'antd';
import { AppstoreOutlined, ReadOutlined } from '@ant-design/icons';
import { User } from './User';
import { useFetchUsers } from '../useFetchUsers';
import { InnerLayout, LayoutContent, MainLayout } from './styles';

type ContextType = { userId: number | null };

function App() {
  const { user, loading } = useFetchUsers();

  return (
    <MainLayout>
      <Layout.Sider theme="light" style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        paddingTop: '16px'
      }}>
        <Flex gap="small" justify='center' align='center' vertical>
          <User userName={user?.name} loading={loading} />
          <Divider />
          <Flex gap="small" vertical>
            <Link to='dashboard'><AppstoreOutlined /> Dashboard</Link>
            <Link to='blogs'><ReadOutlined /> Blogs</Link>
          </Flex>
        </Flex>
      </Layout.Sider>
      <InnerLayout>
        <LayoutContent>
          <Outlet context={{ userId: user ? user.id : null } satisfies ContextType} />
        </LayoutContent>
      </InnerLayout>
    </MainLayout >
  );
}

export default App;

export function useUserId() {
  return useOutletContext<ContextType>();
}
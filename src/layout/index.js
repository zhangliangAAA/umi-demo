import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.css';
const { Header, Footer, Content } = Layout;
export default function(props) {
  const menus = ['/', '/users', 'about']
  const selectedKeys = menus.filter(item => {
    if(item === '/'){
      return props.location.pathname === item
    }else {
      return props.location.pathname.includes(item)
    }
  });
  return (
    <Layout>
      {/* 页头 */}
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys} style={{ lineHeight: '64px', float: 'left' }}>
          <Menu.Item key="/">
            <Link to="/">商品</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">用户</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>{' '}
      </Content>
      {/* 页脚 */}
      <Footer className={styles.footer}>开课吧</Footer>
    </Layout>
  );
}

import { Link, Outlet } from 'umi';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import styles from './index.less';

export default function Layout(props) {
  return (
    <ConfigProvider locale={zhCN}>
      <Outlet />
    </ConfigProvider>
  );
}

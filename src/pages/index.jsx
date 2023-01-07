import { Empty, Button } from 'antd';
import { useDispatch, useSelector, Link } from 'umi';

export default function HomePage() {

  const user = useSelector(s => s.counts.user);
  const dispatch = useDispatch();

  function changeName() {
    dispatch({
      type: 'counts/updateUser',
      payload: { name: 'administrator' }
    })
  }

  return (
    <div>
      <Empty />
      <div>{ user.name }</div>
      <Button className='m-lr-10' onClick={changeName}>改名</Button>
      <Link to="docs">docs</Link>
    </div>
  );
}

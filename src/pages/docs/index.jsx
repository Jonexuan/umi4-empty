import { useState, useEffect } from 'react';
import { getUser } from './api';
import { useDispatch, useSelector } from 'dva';

const DocsPage = () => {
  const user = useSelector(s => s.counts.user);
  const [ users, updateUsers ] = useState([])

  function query() {
    getUser().then(res => {
      updateUsers(res)
    })
  }

  useEffect(() => {
    query()
  }, [])

  return (
    <div className='docs'>
      <div>
        current: {user.name}
      </div>
      { users.map(i => <div key={i.id}>{i.id} ：{ i.name }</div>) }
    </div>
  );
};

export default DocsPage;

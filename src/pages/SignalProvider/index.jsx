import { Icon } from '@iconify/react';
import SignalProviderTable from '../../components/Tables/SignalProviderTable';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from '../../utils/api';

function SignalProvider() {
  const [providerData, setProviderData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/account/all-accounts');
      const data = response.data.filter(
        (account) => account.copyFactoryRoles.indexOf('PROVIDER') !== -1
      );
      for (let i = 0; i < data.length; i++) {
        data[i].account = `${data[i].name}(${data[i].login})`;
      }
      setProviderData(data);
    }

    fetchData();
  }, []);
  return (
    <section className="mb-[20px] rounded bg-[#282D36] w-full">
      <header className="p-[18px] text-white flex justify-between items-center">
        <h2 className="mt-[5px] text-[20px] font-normal">Signal Pages</h2>
        <Link
          to={'/signal-provider/create-signal'}
          className="bg-[#0099e6] h-[33px] rounded text-sm px-2 items-center flex"
        >
          <Icon
            icon="typcn:plus"
            width="16"
            height="16"
            style={{ display: 'inline-block' }}
          />{' '}
          Create Signal Page
        </Link>
      </header>
      <div className="p-[15px] bg-[#2E353E]">
        <SignalProviderTable data={providerData} />
      </div>
    </section>
  );
}

export default SignalProvider;

import Header from '../components/Header';
import React from 'react';
import api from '../utils/api';

function Root() {

  const [data, setData] = React.useState({
    title: "",
    body: ""
  })
  React.useEffect(() => {
    api.get('/settings/homepage-content').then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="mx-28 flex flex-col justify-between text-white">
      <Header />
      <div className="px-[15px] w-full">
        <section className="mb-5 rounded">
          <header className="bg-[#282D36] border-b-[#1d2127] border-b-[1px] rounded-t-[5px] p-[18px]">
            <h2 className="text-xl font-normal mt-[5px]">{data.title}</h2>
          </header>
          <div className="text-[#CCC] bg-[#2e353e] rounded-b-[5px] p-[15px] text-[13px] leading-[22px]">
            { data.body }
          </div>
        </section>
      </div>
    </div>
  );
}

export default Root;

import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import Radio from '@mui/material/Radio';
import { Icon } from '@iconify/react';

//import componenets
import AccountDetails from '../../components/analysis/AccountDetails';
import PerformanceChart from '../../components/analysis/PerformanceCharts';
import TradingStats from '../../components/analysis/TradingStats';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';
import AnalysisByTime from '../../components/analysis/AnalysisByTime';
import TradesAnalysis from '../../components/analysis/TradesAnalysis';
import { useParams } from 'react-router-dom';

function AccountAnalysis() {
  const { id } = useParams();
  const [details, setDetails] = React.useState({});
  const [accountInfo, setAccountInfo] = React.useState({});
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    async function fetcher() {
      try {
        const res = await api.get(`/account/accounts/${id}`);
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetcher();
  }, [id]);

  React.useEffect(() => {
    async function fetcher() {
      try {
        const res = await api.get(`/account/accountInfo/${id}`);
        setAccountInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetcher();
  }, [id]);

  React.useEffect(() => {
    async function fetcher() {
      try {
        const res = await api.get(`/history/all/${id}`);
        setHistory(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetcher();
  }, [id]);

  return (
    <div className="pb-[100px]">
      <div>
        <Link
          to={'/dashboard'}
          className="flex flex-row items-center font-extrabold"
        >
          <Icon
            icon="mdi:arrow-left-bold"
            className="text-[26px]"
            color="white"
          />
          <h1 className="text-white text-lg pl-2"> Dashboard</h1>
        </Link>
      </div>
      <div className="flex gap-[20px]">
        <div className="w-1/4 pt-[10px]">
          <AccountDetails data={details} />
        </div>
        <div className="w-3/4 pt-[10px]">
          <PerformanceChart data={history} />
        </div>
      </div>

      <div className="mt-[40px]">
        <TradingStats data={accountInfo} />
      </div>

      <div className="mt-[40px]">
        <AnalysisByTime data={history} />
      </div>

      <div className="mt-[40px]">
        <TradesAnalysis />
      </div>
    </div>
  );
}

export default AccountAnalysis;

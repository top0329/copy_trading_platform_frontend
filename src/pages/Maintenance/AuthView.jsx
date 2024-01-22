import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//import componenets
import AccountDetails from '../../components/analysis/AccountDetails';
import PerformanceChart from '../../components/analysis/PerformanceCharts';
import TradingStats from '../../components/analysis/TradingStats';

import api from '../../utils/api';
import LoadingButton from '@mui/lab/LoadingButton';
import AnalysisByTime from '../../components/analysis/AnalysisByTime';
import TradesAnalysis from '../../components/analysis/TradesAnalysis';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function AuthView() {
  const { id } = useParams();
  const [details, setDetails] = React.useState({});
  const [accountInfo, setAccountInfo] = React.useState({});
  const [history, setHistory] = React.useState([]);

  const { isAuthenticated, user } = useAuth();

  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  const [accountId, setAccountId] = React.useState();

  React.useEffect(() => {
    async function func() {
      try {
        const res = await api.get(`/strategy/link/${id}`);
        if (res.data.status === 'OK') {
          const _user = res.data.data.account.length > 0 ? res.data.data.account[0].user : "";
          console.log(res.data.data)
          if (res.data.data.live || (user && user._id === _user)) {
            setAccountId(res.data.data.accountId);
          } else {
            navigate("/404");//go to 404 if signal is not live
          }
        } else {
          navigate('/404');
        }
      } catch (err) {
        console.log(err);
        navigate('/404');
      }
    }

    func();
  }, [id]);

  React.useEffect(() => {
    async function fetcher() {
      try {
        const res = await api.get(`/account/accounts/view/${accountId}`);
        console.log(Object.keys(res.data).length);
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (accountId) fetcher();
  }, [accountId]);

  React.useEffect(() => {
    async function fetcher() {
      try {
        console.log('asdfS');
        const res = await api.get(`/account/accountInfo/view/${accountId}`);
        console.log(res.data);
        setAccountInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (accountId) fetcher();
  }, [accountId]);

  React.useEffect(() => {
    async function fetcher() {
      try {
        const res = await api.get(`/history/all/view/${accountId}`);
        setHistory(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    if (accountId) fetcher();
  }, [accountId]);

  const handleFollowClick = () => {
    if (isAuthenticated) {
      //follow
    } else {
      setShowModal(true);
    }
  };

  if (Object.keys(details).length === 0) {
    return '';
  } else
    return (
      <div className="pb-[100px]">
        <div className="flex justify-between">
          <img
            className="h-10 w-10"
            src="/src/assets/img/logo.jpeg"
            alt=""
          ></img>
          <button
            className="bg-[#51B451] text-white hover:bg-gray-200 hover:text-slate-500 px-3 rounded"
            onClick={handleFollowClick}
          >
            Follow Signal
          </button>
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

        <div
          className={`fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1201] ${!showModal && 'hidden'
            }`}
        >
          <div
            className="fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1202] bg-opacity-80 bg-[#1D2127]"
            onClick={() => setShowModal(false)}
          ></div>
          <section className="mb-[20px] rounded bg-[#282D36] w-[450px] z-[100000]">
            <header className="p-[18px] text-white flex justify-between items-center">
              <h2 className="mt-[5px] text-[20px] font-normal">
                Follow {details.strategyName}
              </h2>
              <button
                className="bg-[#0099e6] w-[33px] h-[33px] rounded font-extrabold"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>
            </header>
            <div className="p-[15px] bg-[#2E353E] text-white">
              <p className="pb-[10px] text-md text-[#ccc] text-center">
                Login in to follow{' '}
                <font className="font-bold text-lg">
                  {details.strategyName}
                </font>{' '}
                or register if required
              </p>
            </div>
            <footer className="px-4 py-3 text-white flex items-center justify-between">
              <LoadingButton
                variant="contained"
                size="small"
                sx={{
                  width: '40%',
                  textTransform: 'none',
                  color: '#ffffff!important',
                  backgroundColor: '#0088cc',
                  borderRadius: '5px',
                  paddingX: '12px',
                  paddingY: '6px',
                  '&:hover': { backgroundColor: '#0088cc!important' },
                  '&:disabled': {
                    opacity: 0.5,
                    backgroundColor: '#0088cc!important',
                  },
                }}
                onClick={() => {
                  localStorage.setItem('expired', true);
                  navigate('/auth/login');
                }}
              >
                Login
              </LoadingButton>
              <LoadingButton
                variant="contained"
                size="small"
                sx={{
                  width: '40%',
                  textTransform: 'none',
                  color: '#ffffff!important',
                  backgroundColor: '#0088cc',
                  borderRadius: '5px',
                  paddingX: '12px',
                  paddingY: '6px',
                  '&:hover': { backgroundColor: '#0088cc!important' },
                  '&:disabled': {
                    opacity: 0.5,
                    backgroundColor: '#0088cc!important',
                  },
                }}
                onClick={() => navigate('/auth/signup')}
              >
                Register
              </LoadingButton>
            </footer>
          </section>
        </div>
      </div>
    );
}

export default AuthView;

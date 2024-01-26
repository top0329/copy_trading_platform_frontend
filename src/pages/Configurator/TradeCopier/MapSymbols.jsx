import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';

import api from '../../../utils/api';
import useToast from '../../../hooks/useToast';
import useUtils from '../../../hooks/useUtils';

// import utilsReducer from '../../store/reducers/utils';

function MapSymbols() {
  const { showToast } = useToast();

  const initialValues = {
    login: '',
    password: '',
    name: '',
    server: '',
    platform: '',
    copyFactoryRoles: [],
  };
  const [values, setValues] = React.useState(initialValues);
  const [isSubscriberChecked, setIsSubscriberChecked] = React.useState(false);
  const [isProviderChecked, setIsProviderChecked] = React.useState(false);
  const [createButtonClicked, setCreateButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [brokers, setBrokers] = React.useState([]);

  // const [utils, dispatch] = useReducer(utilsReducer);

  // const { ids, setIds } = useUtils();
  const dispatch = useDispatch();
  const { ids } = useSelector((state) => state.utils);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // React.useEffect(() => {
  //   if (isSubscriberChecked) {
  //     if (values.copyFactoryRoles.includes('SUBSCRIBER') == false) {
  //       values.copyFactoryRoles.push('SUBSCRIBER');
  //     }
  //   } else {
  //     values.copyFactoryRoles = values.copyFactoryRoles.filter(
  //       (role) => role !== 'SUBSCRIBER'
  //     );
  //   }
  //   if (isProviderChecked) {
  //     if (values.copyFactoryRoles.includes('PROVIDER') == false) {
  //       values.copyFactoryRoles.push('PROVIDER');
  //     }
  //   } else {
  //     values.copyFactoryRoles = values.copyFactoryRoles.filter(
  //       (role) => role !== 'PROVIDER'
  //     );
  //   }
  // }, [isSubscriberChecked, isProviderChecked]);

  // const handleCreateAccount = async () => {
  //   try {
  //     setCreateButtonClicked(true);
  //     if (
  //       values.login == '' ||
  //       values.password == '' ||
  //       values.name == '' ||
  //       values.server == '' ||
  //       values.platform == '' ||
  //       values.copyFactoryRoles.length == 0
  //     ) {
  //       showToast('Please fill in all the information!', 'error');
  //     } else {
  //       setIsLoading(true);
  //       const result = await api.post('/account/register-account', values);

  //       if (result.data.AccountRegister) {
  //         dispatch({
  //           type: 'ADD_ID',
  //           payload: result.data.AccountRegister.id,
  //         });
  //       } else {
  //         throw new Error('null account Register');
  //       }

  //       showToast('Account created successfully!', 'success');

  //       setIsLoading(false);
  //       navigate('/accounts');
  //     }
  //   } catch (err) {
  //     showToast('Account creation failed!', 'error');
  //     console.log(err);
  //     setIsLoading(false);
  //   }
  // };

  // React.useEffect(() => {
  //   api
  //     .get('/settings/brokers')
  //     .then((res) => {
  //       if (res.data.status === 'OK') {
  //         setBrokers(res.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <div className="mb-[20px] rounded bg-[#282D36] text-white">
        <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
          <h2 className="mt-[5px] text-[20px] font-normal">Map Symbols</h2>
          <Button
            sx={{
              display: 'flex',
              backgroundColor: '#0099e6!important',
              height: '33px',
              borderRadius: '4px',
              fontSize: '12px',
              lineHeight: '16px',
              paddingX: '8px',
              alignItems: 'center',
              color: '#eee',
              textTransform: 'none',
            }}
          >
            <Icon
              icon="typcn:plus"
              width="16"
              height="16"
              style={{ display: 'inline-block' }}
            />{' '}
            Add Symbol Map
          </Button>
        </header>
        <div className="p-[15px] bg-[#2E353E] box-border rounded-b"></div>
      </div>
    </div>
  );
}

export default MapSymbols;

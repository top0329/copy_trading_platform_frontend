import * as React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import useToast from '../../hooks/useToast';
import api from '../../utils/api';
import { Icon } from '@iconify/react';

function WhitelabelHomepage() {

  const { showToast } = useToast();

  const [isSiteSettingUpdateButtonLoading, setIsSiteSettingUpdateButtonLoading] = React.useState(false);
  const [isAddBrokerButtonLoading, setIsAddBrokerButtonLoading] = React.useState(false);
  const [siteSettingUpdatedButtonClicked, setSiteSettingUpdatedButtonClicked] = React.useState(false);
  const [addBrokerButtonClicked, setAddBrokerButtonClicked] = React.useState(false);

  const [userRegistration, setUserRegistration] = React.useState(true);
  const [maxAccount, setMaxAccount] = React.useState(10);

  const [brokers, setBrokers] = React.useState([]);

  const [broker, setBroker] = React.useState("");

  const handleUserRegistrationChange = (e) => {
    setUserRegistration(e.target.value);
  };

  const handleSiteSettingUpdatebuttonClicked = async () => {
    setIsSiteSettingUpdateButtonLoading(true);
    setSiteSettingUpdatedButtonClicked(true);

    try {
      await api.put("/settings/site-setting", { userRegistration, maxAccount });
      showToast("Updated Successfully", "success");
    } catch (err) {
      showToast("Update failed", "error");
      console.log(err);
    } finally {
      setIsSiteSettingUpdateButtonLoading(false);
    }
  }

  React.useEffect(() => {
    api.get("/settings/site-setting").then(res => {
      if (res.data.status === "OK") {
        const _userRegistration = res.data.data.find(({key, value}) => key === "userRegistration");
        const _maxAccount = res.data.data.find(({key, value}) => key ===  "maxAccount");
        if (_userRegistration) {
          setUserRegistration(_userRegistration.value);
        }
        if (_maxAccount) {
          setMaxAccount(_maxAccount.value);
        }
      }
    }).catch(err => {
      console.log(err)
    });
  }, []);

  React.useEffect(() => {
    api.get("/settings/brokers").then(res => {
      if (res.data.status === "OK") {
        setBrokers(res.data.data);
      }
    }).catch(err => {
      console.log(err)
    })
  }, []);

  const handleAddBrokerButtonClicked = async () => {
    try {
      setIsAddBrokerButtonLoading(true);
      if (broker === "") {
        showToast("Insert broker to add", "error");
      } else {
        const res = await api.post("/settings/brokers", { broker: broker });
        if ( res.data.status === "OK" ) {
          showToast("Successfully added", "success");
          setBroker("");
          setBrokers(prev => [...prev, res.data.data])
        } else {
          throw "err";
        }
      }
    } catch (err) {
      console.log(err);
      showToast("Add failed", "error");
    } finally {
      setIsAddBrokerButtonLoading(false);
    }
  }

  const handleDelete = async (id) => {
    try {
      api.delete(`/settings/brokers/${id}`);
      showToast("Successfully deleted", "success");
      const index = brokers.map(item => item._id).indexOf(id);
      const temp = [...brokers];
      temp.splice(index, 1);
      setBrokers(temp);
    } catch (err) {
      console.log(err);
      showToast("Delete failed", "error");
    }
  }

  return (
    <div className="grid grid-cols-12 gap-6 mb-24">
      <div className="col-span-6">
        {/* <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">Viewable Signals</h2>
          </header>
          <div className="box-border py-3 px-4 text-[15px] text-[#ccc] bg-[#2E353E]">
            No viewable signals have been setup.
          </div>
          <div className="px-4 py-2">
            <LoadingButton
              variant="contained"
              size="small"
              sx={{
                textTransform: 'none',
                backgroundColor: '#0088CC!important',
              }}
              onClick={handleCreateButtonClicked}
              loading={isLoading}
            >
              Add Viewable
            </LoadingButton>
          </div>
        </div> */}
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">Site Settings</h2>
          </header>
          <div className="box-border py-3 px-4 bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                User Registration
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="emailAlert"
                  required
                  value={userRegistration}
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#ccc] px-3 py-1.5 rounded"
                  onChange={handleUserRegistrationChange}
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>

              </div>
            </div>
            {/* <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Follower can edit entity id
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="tradeCopy"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#ccc] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected className="hidden">
                    Select Account
                  </option>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
                {values.tradeCopy == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div> */}
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Max accounts per user
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="number"
                  value={maxAccount}
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  onChange={e => setMaxAccount(e.target.value)}
                />
                {maxAccount <= 0 && siteSettingUpdatedButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Max account number is required!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-2">
            <LoadingButton
              variant="contained"
              size="small"
              sx={{
                textTransform: 'none',
                backgroundColor: '#0088CC!important',
              }}
              onClick={handleSiteSettingUpdatebuttonClicked}
              loading={isSiteSettingUpdateButtonLoading}
            >
              Update
            </LoadingButton>
          </div>
        </div>
        {/* <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">Business Details</h2>
          </header>
          <div className="box-border px-4 py-3 bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Brand Name
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="number"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  // onChange={handleInputChange}
                />
                {values.emailAlert == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Company Name
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="number"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  // onChange={handleInputChange}
                />
                {values.tradeCopy == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <LoadingButton
              variant="contained"
              size="small"
              sx={{
                textTransform: 'none',
                backgroundColor: '#0088CC!important',
              }}
              onClick={handleCreateButtonClicked}
              loading={isLoading}
            >
              Update
            </LoadingButton>
          </div>
        </div> */}
      </div>
      <div className="col-span-6">
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">
              Broker Setting ({ brokers.length })
            </h2>
          </header>
          <div className="box-border py-3 px-4 bg-[#2E353E] max-h-[500px] overflow-y-scroll">
            {
              brokers.length > 0 ? brokers.map((item, index) =>
                <div key={`brodker_${index}`} className='flex py-1 align-middle border-b-[1px] border-[#242830]'>
                  <div className='w-3/4 text-center'>{item.broker}</div>
                  <div className='w-1/4'><Icon onClick={() => handleDelete(item._id)} className='hover:opacity-65 cursor-pointer' icon="ic:baseline-delete" /></div>
                </div>
              ) : <div className='text-center'>No brokers</div>
            }


          </div>
          <div className="px-4 py-2 flex justify-end gap-2">
            <input
              name="broker-name"
              type="text"
              required
              value={broker}
              placeholder='new broker..'
              className="block w-1/3 h-[34px] text-sm bg-[#3c414b] text-[#fff] px-3 py-1.5 rounded"
              onChange={e => setBroker(e.target.value)}
            />
            <LoadingButton
              variant="contained"
              size="small"
              sx={{
                textTransform: 'none',
                backgroundColor: '#0088CC!important',
              }}
              onClick={handleAddBrokerButtonClicked}
              loading={isAddBrokerButtonLoading}
            >
              Add
            </LoadingButton>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WhitelabelHomepage;

import HelpIcon from '@mui/icons-material/Help';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import React from 'react';
import useToast from '../../hooks/useToast';
import api from '../../utils/api';

function ContactSupport() {

  const { showToast } = useToast();

  const [data, setData] = React.useState({
    subject: "",
    department: "General",
    message: ""
  });

  const handleSubmit = async () => {

    if ( data.message === "" || data.subject === "" || data.department === "" ) {
      return showToast("Fill all fields", "error");
    }

    try {
      const res = await api.post('/users/contact', data);
      if ( res.data.status === "OK" ) {
        showToast("Successfully transmitted", "success");
      } else {
        showToast("Failed", "error");
      }
    } catch (e) {
      showToast("Failed", "error");
      console.log(e);
    }
  }

  return (
    <div>
      <div className="py-0 px-[200px]">
        <Paper
          elevation={0}
          sx={{
            color: '#31708f',
            backgroundColor: '#d9edf7',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '4px',
          }}
        >
          <HelpIcon fontSize="5px" />
          <strong className="pl-[2px] font-bold box-border text-[13px]">
            {' '}
            Have you read our{' '}
            <Link to={'/knowledge-base'} className="text-[#0088cc]">
              knowledge base?
            </Link>
          </strong>
          <p className="pl-[25px] text-[13px] text-[#31708f]">
            With our{' '}
            <Link to={'/knowledge-base'} className="text-[#0088cc]">
              knowledge base
            </Link>{' '}
            you can get an in-depth explanation on all the features and
            functionality of the platform including copier risk settings and
            more{' '}
            <Link to={'/knowledge-base'} className="text-[#0088cc]">
              here
            </Link>
            .
          </p>
        </Paper>
        <div>
          <section className="mb-[20px] rounded bg-[#282D36] text-white">
            <header className="p-[18px]">
              <h2 className="mt-[5px] text-[20px] font-normal">
                Contact Support
              </h2>
            </header>
            <div className="box-border p-[15px] bg-[#2E353E]">
              <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
                <label className="inline-block relative max-w-full text-right w-1/4 pt-[7px] px-[15px] text-[#ccc] text-[13px]">
                  Subject
                </label>
                <div className="w-1/2 px-[15px]">
                  <input
                    name="subject"
                    type="text"
                    required
                    value={data.subject}
                    onChange={e => setData({...data, subject: e.target.value})}
                    className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  />
                </div>
              </div>
              <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
                <label className="inline-block relative max-w-full text-right w-1/4 pt-[7px] px-[15px] text-[#ccc] text-[13px]">
                  Department
                </label>
                <div className="w-1/2 px-[15px]">
                  <select
                    name="department"
                    required
                    value={data.department}
                    onChange={e => setData({...data, department: e.target.value})}
                    className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  >
                    <option value={'General'}>General</option>
                    <option value={'Technical'}>Technical</option>
                    <option value={'Billing'}>Billing</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-start">
                <label className="inline-block relative max-w-full text-right w-1/4 pt-[7px] px-[15px] text-[#ccc] text-[13px]">
                  Message
                </label>
                <div className="w-1/2 px-[15px]">
                  <textarea
                    name="message"
                    rows={8}
                    onChange={e => setData({...data, message: e.target.value})}
                    value={data.message}
                    required
                    minLength={6}
                    className="block w-full h-auto text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  />
                </div>
              </div>
            </div>
            <footer className="px-[15px] py-[10px]">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-start-4 col-span-4 pl-3.5">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#0088CC!important',
                    }}
                    onClick={handleSubmit}
                    
                  >
                    Send
                  </Button>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactSupport;

import HelpIcon from '@mui/icons-material/Help';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function ContactSupport() {
  return (
    <div>
      <div style={{ padding: '0px 200px' }}>
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
          <strong
            style={{
              paddingLeft: '2px',
              fontWeight: 'bold',
              boxSizing: 'border-box',
              fontSize: '13px',
            }}
          >
            {' '}
            Have you read our{' '}
            <Link to={'/knowledgebase'} style={{ color: '#0088cc' }}>
              knowledge base?
            </Link>
          </strong>
          <p
            style={{ paddingLeft: '25px', fontSize: '13px', color: '#31708f' }}
          >
            With our{' '}
            <Link to={'/knowledgebase'} style={{ color: '#0088cc' }}>
              knowledge base
            </Link>{' '}
            you can get an in-depth explanation on all the features and
            functionality of the platform including copier risk settings and
            more{' '}
            <Link to={'/knowledgebase'} style={{ color: '#0088cc' }}>
              here
            </Link>
            .
          </p>
        </Paper>
        <div>
          <section
            className="mb-[20px] rounded bg-[#282D36]"
            style={{ color: 'white' }}
          >
            <header className="p-[18px]">
              <h2 className="mt-[5px] text-[20px] font-normal">
                Contact Support
              </h2>
            </header>
            <div
              className="p-[15px] bg-[#2E353E]"
              style={{ boxSizing: 'border-box' }}
            >
              <div
                style={{
                  borderBottom: '1px solid #242830',
                  paddingBottom: '15px',
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: 'start',
                }}
              >
                <label
                  className="text-[#ccc] text-[13px]"
                  style={{
                    textAlign: 'right',
                    width: '25%',
                    paddingTop: '7px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    display: 'inline-block',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  Subject
                </label>
                <div
                  style={{
                    width: '50%',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                >
                  <input
                    name="subject"
                    type="text"
                    required
                    minLength={6}
                    className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '34px',
                      padding: '6px 12px',
                      fontSize: '14px',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  borderBottom: '1px solid #242830',
                  paddingBottom: '15px',
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: 'start',
                }}
              >
                <label
                  className="text-[#ccc] text-[13px]"
                  style={{
                    textAlign: 'right',
                    width: '25%',
                    paddingTop: '7px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    display: 'inline-block',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  Department
                </label>
                <div
                  style={{
                    width: '50%',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                >
                  <select
                    name="department"
                    required
                    className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '34px',
                      padding: '6px 12px',
                      fontSize: '14px',
                      borderRadius: '4px',
                    }}
                  >
                    <option value={'General'}>General</option>
                    <option value={'Technical'}>Technical</option>
                    <option value={'Billing'}>Billing</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                }}
              >
                <label
                  className="text-[#ccc] text-[13px]"
                  style={{
                    textAlign: 'right',
                    width: '25%',
                    paddingTop: '7px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    display: 'inline-block',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  Message
                </label>
                <div
                  style={{
                    width: '50%',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                >
                  <textarea
                    name="message"
                    rows={8}
                    required
                    minLength={6}
                    className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      padding: '6px 12px',
                      fontSize: '14px',
                      borderRadius: '4px',
                    }}
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
                    sx={{ textTransform: 'none' }}
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

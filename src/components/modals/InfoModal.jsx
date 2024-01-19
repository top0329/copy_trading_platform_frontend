import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

function InfoModal({ setExclamationModalShow }) {
  return (
    <div className="fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1201]">
      <div
        className="fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1202] bg-opacity-80 bg-[#1D2127]"
        onClick={() => setExclamationModalShow(false)}
      ></div>
      <section className="mb-[20px] rounded bg-[#282D36] w-[400px] z-[100000]">
        <header className="p-[18px] text-white flex justify-between items-center">
          <h2 className="mt-[5px] text-[20px] font-normal">
            Connection definitions
          </h2>
          <button
            className="bg-[#0099e6] w-[33px] h-[33px] rounded font-extrabold"
            onClick={() => setExclamationModalShow(false)}
          >
            ✖
          </button>
        </header>
        <div className="p-[15px] bg-[#2E353E]">
          <ul>
            <li className="flex items-center mb-1">
              <Icon
                icon="bxs:square-rounded"
                width="13"
                height="13"
                color="#47a447"
              />
              <span className="pl-[10px] text-[#ccc] text-[13px]">
                Account currently connected and functioning.
              </span>
            </li>
            <li className="flex items-center mb-1">
              <Icon
                icon="bxs:square-rounded"
                width="13"
                height="13"
                color="#ed9c28"
              />
              <span className="pl-[10px] text-[#ccc] text-[13px]">
                Account connection has been lost for over 2 minutes.
              </span>
            </li>
            <li className="flex items-center mb-1">
              <Icon
                icon="bxs:square-rounded"
                width="13"
                height="13"
                color="#d2322d"
              />
              <span className="pl-[10px] text-[#ccc] text-[13px]">
                Account connection has been lost for over 10 minutes.
              </span>
            </li>
            <li>
              <div className="flex items-center mb-1">
                <Icon
                  icon="gravity-ui:clock"
                  width="13"
                  height="13"
                  color="#ccc"
                />
                <span className="pl-[10px] text-[#ccc] text-[13px]">
                  Attempting to establish a connection to your account.
                </span>
              </div>
              <small className="text-[#ccc]">
                **If your account has been in this state for over 2 minutes,
                contact support <a href="#">here</a>.**
              </small>
            </li>
            <li className="flex items-center mb-1">
              <Icon
                icon="zondicons:exclamation-solid"
                width="13"
                height="13"
                color="#d2322d"
              />
              <span className="pl-[10px] text-[#ccc] text-[13px]">
                Failed to establish a connection to your account.
              </span>
            </li>
          </ul>
          <hr className="my-[20px] border-t-[1px] border-[#282d36]" />
          <p className="pb-[10px]">
            <b className="box-border">
              <small className="text-[#ccc]">When your account has the </small>
              <Icon
                icon="zondicons:exclamation-solid"
                width="13"
                height="13"
                color="#d2322d"
                className='inline-block'
              />
              <small className="text-[#ccc]">
                {' '}
                status, visit the{' '}
                <a href="#" className="text-[#47a447]">
                  Accounts page{' '}
                </a>
                to see why your account failed to connect by pressing the
              </small>
            </b>
          </p>
        </div>
      </section>
    </div>
  );
}

InfoModal.propTypes = {
  setExclamationModalShow: PropTypes.func.isRequired,
};

export default InfoModal;

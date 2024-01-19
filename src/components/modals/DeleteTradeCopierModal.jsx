import * as React from 'react';
import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';

function DeleteTradeCopierModal({
  deleteTradeCopierModalShow,
  selectedTradeCopierData,
  handleDeleteAccountModalButtonClicked,
  isLoading,
}) {
  const [checkboxSelected, setCheckboxSelected] = React.useState(false);

  return (
    <div className="fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1201]">
      <div
        className="fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1202] bg-opacity-80 bg-[#1D2127]"
        onClick={() => deleteTradeCopierModalShow(false)}
      ></div>
      <section className="mb-[20px] rounded bg-[#282D36] w-[400px] z-[100000]">
        <header className="p-[18px] text-white flex justify-between items-center">
          <h2 className="mt-[5px] text-[20px] font-normal">
            Delete trade copier
          </h2>
          <button
            className="bg-[#0099e6] w-[33px] h-[33px] rounded font-extrabold"
            onClick={() => deleteTradeCopierModalShow(false)}
          >
            ✖
          </button>
        </header>
        <div className="p-[15px] bg-[#2E353E] text-white text-center">
          <p className="pb-[10px] text-sm">
            Are you sure you want to delete copier{' '}
            <b>{selectedTradeCopierData.strategyName}</b> to{' '}
            <b>{selectedTradeCopierData.subscriberAccountName}</b>?
          </p>
          <p className="text-[13px] text-[#ccc] mb-[10px]">
            <b>This process can not be undone.</b>
          </p>
          <label className="flex gap-2 justify-center items-center mb-[25px]">
            <input
              type="checkbox"
              onChange={(e) => setCheckboxSelected(e.target.checked)}
            />
            <span className="text-[13px] text-[#ccc]">Are you sure?</span>
          </label>
        </div>
        <footer className="px-4 py-3 text-white flex justify-end items-center">
          <LoadingButton
            variant="contained"
            size="small"
            sx={{
              textTransform: 'none',
              color: '#ffffff!important',
              backgroundColor: '#d2322d!important',
              borderRadius: '5px',
              paddingX: '12px',
              paddingY: '6px',
              '&:disabled': { opacity: 0.5 },
            }}
            onClick={handleDeleteAccountModalButtonClicked}
            loading={isLoading}
            disabled={!checkboxSelected}
          >
            Delete
          </LoadingButton>
          {/* <button
            className="bg-[#d2322d] rounded py-1.5 px-3 disabled:opacity-50"
            onClick={handleDeleteAccountModalButtonClicked}
            disabled={!checkboxSelected}
          >
            Delete
          </button> */}
        </footer>
      </section>
    </div>
  );
}

DeleteTradeCopierModal.propTypes = {
  deleteTradeCopierModalShow: PropTypes.func.isRequired,
  selectedTradeCopierData: PropTypes.any.isRequired,
  handleDeleteAccountModalButtonClicked: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default DeleteTradeCopierModal;

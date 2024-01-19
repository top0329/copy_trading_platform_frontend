import * as React from 'react';

function TradeCopiersCopierLog() {
  return (
    <React.Fragment>
      <h4 className="my-2.5 text-[18px] text-white">Commands</h4>
      <p className="py-2.5 text-[13px]">
        For any action that occurs due to a trade copier, a command is created
        on the system for that specific action. All commands are listed in the
        copier log section. For a more detailed view including the master trade
        information, latency etc, press the info icon on the command.
      </p>
      <p className="py-2.5 text-[13px]">
        All completed commands are listed with a green tick. Outstanding
        uncompleted commands will be at the top of the list with a red cross.
      </p>
      <p className="py-2.5 text-[13px]">
        If for any reason a command did not complete on the first attempt an
        email will be sent with information on why it could not complete. The
        reasons could be due to trade copier settings or the broker server
        having returned an error.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Events</h4>
      <p className="py-2.5 text-[13px]">
        If your copier ignored a command due to a copier setting you
        specifically enabled you will see an entry in the events log. Here you
        will see events such as &quot;Ignored mode off&quot; when your copier is
        not switched on. For a more detailed view including the master trade
        information, latency etc, press the info icon on the command.
      </p>
      <p className="py-2.5 text-[13px] font-bold">
        Be sure to check the log if something has not worked as expected. In
        most cases, you will be able to work out why from the log.
      </p>
    </React.Fragment>
  );
}

export default TradeCopiersCopierLog;

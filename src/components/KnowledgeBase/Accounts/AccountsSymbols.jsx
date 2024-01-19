import * as React from 'react';

function AccountsSymbols() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        Some brokers only allow a limited amount of symbols to receive prices at
        one time. For example, FXCM accounts only allow 40 active symbols at one
        time and if there are more than 40 symbols, random symbols will not
        receive prices. To combat this you can disable symbols.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Disable symbols</h4>
      <p className="py-2.5 text-[13px]">
        If you need to reduce the amount of active symbols on your account (in
        the context of our platform), you can select one or many symbols to
        disable.
      </p>
      <p className="py-2.5 text-[13px]">
        Symbols in the off position (coloured) are enabled and buttons in the on
        position (white) are disabled.
      </p>
      <p className="py-2.5 text-[13px]">
        You can disable groups of symbols by forex or non-forex or suffix.
      </p>
      <p className="py-2.5 text-[13px]">
        You can also disable all and then toggle the ones you want.
      </p>
      <p className="py-2.5 text-[13px] font-bold">
        If you make changes to your symbol set, be sure to click update for the
        settings to take effect.
      </p>
      <p className="py-2.5 text-[13px] font-bold">
        If your account has disconnected and will not reconnect, try disabling
        the symbols you do not use and then update the connection again.
        Sometimes accounts have issues connecting with hundreds/thousands of
        symbols enabled
      </p>
    </React.Fragment>
  );
}

export default AccountsSymbols;
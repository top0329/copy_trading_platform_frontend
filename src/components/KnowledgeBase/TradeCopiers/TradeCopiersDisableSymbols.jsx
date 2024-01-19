import * as React from 'react';

function TradeCopiersDisableSymbols() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can disable individual symbols from the <strong>Copy From</strong>{' '}
        account. If you choose to disable one or more symbols, when the{' '}
        <strong>Copy From</strong> account opens a trade for that disabled
        symbol, the <strong>Send To</strong> account will ignore the trade.
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
      <h4 className="my-2.5 text-[18px] text-white">Disabling symbols</h4>
      <p className="py-2.5 text-[13px]">
        Scroll down the list and select any symbols you want to disable (if
        any). When you select a symbol the icon will become coloured to indicate
        it is set as enabled. Once you have selected the symbols click update to
        save the settings.
      </p>
    </React.Fragment>
  );
}

export default TradeCopiersDisableSymbols;

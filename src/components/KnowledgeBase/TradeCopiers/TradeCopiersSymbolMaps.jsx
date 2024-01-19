import * as React from 'react';

function TradeCopiersSymbolMaps() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        Not all brokers use the same naming conventions for symbols, in
        particular commodities and indexes. A typical example of this is GOLD.
        One broker may quote GOLD as GOLD but another broker quotes it as
        XAUUSD.
      </p>
      <p className="py-2.5 text-[13px]">
        If there is a difference between your <strong>Copy From</strong> and
        <strong>Send To</strong> accounts naming, you have to manually define
        the relationship between the symbols or the trade copier will ignore the
        trades.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Add symbol map</h4>
      <p className="py-2.5 text-[13px]">
        To create a symbol map you need to select each version of the symbol
        from the <strong>Copy From</strong> and <strong>Send To</strong>{' '}
        accounts list and click create map. Once created it will be listed in
        the table.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Delete symbol map</h4>
      <p className="py-2.5 text-[13px]">
        Symbol maps can be deleted at any time by clicking the red trash can.
      </p>
    </React.Fragment>
  );
}

export default TradeCopiersSymbolMaps;

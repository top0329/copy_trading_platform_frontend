import * as React from 'react';
import { Icon } from '@iconify/react';

function TradeCopiersRiskSettings() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can update the existing risk settings at any time and they will be
        applied to future trades on the <strong>Send To</strong> account.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Reverse trades</h4>
      <p className="py-2.5 text-[13px]">
        If you want to take the opposite direction for each trade copied, you
        can set reverse trades to <strong>yes</strong>.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Risk types</h4>
      <p className="py-2.5 text-[13px]">There are 4 Risk Types</p>
      <ul className="mb-0 pl-[8px] text-[13px]">
        <li className="flex justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            // className="inline-block"
          />
          <p>
            <strong>Risk multiplier by balance</strong>
          </p>
        </li>
        <li className="flex flex-row justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            className="inline-block"
          />
          <p>
            <strong>Risk multiplier by equity</strong>
          </p>
        </li>
        <li className="flex flex-row justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            className="inline-block"
          />
          <p>
            <strong>Lot multiplier</strong>
          </p>
        </li>
        <li className="flex flex-row justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            className="inline-block"
          />
          <p>
            <strong>Fixed lot</strong>
          </p>
        </li>
      </ul>
      <h5 className="my-2.5 text-white text-sm">Risk multiplier by balance</h5>
      <p className="py-2.5 text-[13px]">
        When using risk multiplier by balance the trade copier will consider the
        balance of the <strong>Copy From</strong> and <strong>Send To</strong>{' '}
        accounts to calculate a proportional lot size for each copied trade.
      </p>
      <p className="py-2.5 text-[13px]">
        For example, with a multiplier of 1; if the <strong>Copy From</strong>{' '}
        account has a balance of 10,000 and the <strong>Send To</strong> account
        is 5,000. As the balance of the <strong>Send To</strong> account is half
        the size of the <strong>Copy From</strong> account, all trades will be
        half the lot size of the <strong>Copy From</strong> account.
      </p>
      <p className="py-2.5 text-[13px]">
        The math used to calculate the <strong>Send To</strong> lot size:
      </p>
      <p className="py-2.5 text-[13px]">
        <strong className="text-[#2BAAB1]">Send To balance</strong> divide by
        <strong className="text-[#2BAAB1]">Copy From balance</strong> multiply
        by <strong className="text-[#2BAAB1]">Copy From lot size</strong>{' '}
        multiply by <strong className="text-[#2BAAB1]">multiplier</strong>
      </p>
      <p className="py-2.5 text-[13px]">
        The multiplier value can be used to adjust the lot size further. A
        multiplier of 2 will double the <strong>Send To</strong> lot size.
        Conversely, a multiplier of 0.5 will half the <strong>Send To</strong>{' '}
        lot size.
      </p>
      <h5 className="my-2.5 text-white text-sm">Risk multiplier by equity</h5>
      <p className="py-2.5 text-[13px]">
        Risk multiplier by equity works in the same way as risk multiplier by
        balance but uses the equity values of the <strong>Copy From</strong> and
        <strong>Send To</strong> accounts, instead of the balance.
      </p>
      <p className="py-2.5 text-[13px]">
        The maths used to calculate the <strong>Send To</strong> lot size:
      </p>
      <p className="py-2.5 text-[13px]">
        <strong className="text-[#2BAAB1]">Send To equity</strong> divide by
        <strong className="text-[#2BAAB1]">Copy From equity</strong> multiply by{' '}
        <strong className="text-[#2BAAB1]">Copy From lot size</strong> multiply
        by <strong className="text-[#2BAAB1]">multiplier</strong>
      </p>
      <h5 className="my-2.5 text-white text-sm">Lot multiplier</h5>
      <p className="py-2.5 text-[13px]">
        When using lot multiplier the lot size is calculated by taking the{' '}
        <strong>Copy From</strong> lot size and multiplying by the multiplier
        value. For example, with the multiplier set at 2, if the{' '}
        <strong>Copy From</strong> takes a 1 lot trade the{' '}
        <strong>Send To</strong> will take a 2 lot trade.
      </p>
      <h5 className="my-2.5 text-white text-sm">Fixed lot</h5>
      <p className="py-2.5 text-[13px]">
        When using fixed lot all trades taken by the <strong>Copy From</strong>{' '}
        will be copied to the <strong>Send To</strong> at the defined{' '}
        <strong>Fixed Lot</strong>
        value. It does not matter how big or small the{' '}
        <strong>Copy From</strong> lot size is, it will always be the defined
        fixed lot value.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Slippage</h4>
      <p className="py-2.5 text-[13px]">
        The slippage setting is used to protect against large variations in
        spread/price between the <strong>Copy From</strong> account and{' '}
        <strong>Send To</strong>
        account. For example, setting your slippage to 20 means the{' '}
        <strong>Send To</strong>
        account will only copy a trade if the <strong>Send To</strong> account
        price is within 20 pips on the positive side of the{' '}
        <strong>Copy From</strong>
        account&apos;s open price.
      </p>
      <p className="py-2.5 text-[13px]">
        For example, the <strong>Copy From</strong> account buys EURUSD at
        1.14510 and the <strong>Send To</strong> account tries to buy. If the
        <strong>Send To</strong> account price is 1.14711 or greater the trade
        copier will not copy the trade at that time, as it is beyond the
        slippage setting. The trade copier will monitor the{' '}
        <strong>Send To</strong> account price once every second. If the price
        comes back to 1.14710 or less, it will copy the trade.
      </p>
      <p className="py-2.5 text-[13px]">
        If the price never gets within the slippage setting, the trade will not
        be copied in the lifetime of the <strong>Copy From</strong> account
        trade.
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        Use as reference:
      </h6>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        100 pips is 1 point in an Index.
      </h6>
      <p className="py-2.5 text-[13px]">
        For example : US30 price 34000 to 34001 = 100 pips difference
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        100 pips is 0.0100 in Forex (non JPY pairs)
      </h6>
      <p className="py-2.5 text-[13px]">
        For example : EURUSD price 1.0700 to 1.0800 = 100 pips difference.
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        100 pips is 1.0000 in Forex (JPY pairs)
      </h6>
      <p className="py-2.5 text-[13px]">
        For example : GBPJPY price 185.00 to 186.00 = 100 pips difference.
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        The slippage value used is up to you to decide based on your own
        preference. The lower the value set the higher the chance that some
        trades will never be copied as the conditions are never met. You can
        even set a negative slippage value, which would mean only trades in a
        drawdown will be copied.
      </h6>
      <h4 className="my-2.5 text-[18px] text-white">Max lot</h4>
      <p className="py-2.5 text-[13px]">
        The max lot setting can be used to protect in scenarios where the{' '}
        <strong>Copy From</strong> account takes an abnormally large trade. As
        the current risk settings will always be applied, regardless of the lot
        size being attempted, the <strong>Send To</strong> account attempt could
        attempt any lot size that the broker will accept. To combat this, you
        should set a reasonable <strong>Max Lot</strong> value as the largest
        lot size you are prepared to open on the <strong>Send To</strong>{' '}
        account.
      </p>
      <p className="py-2.5 text-[13px]">
        For example, the <strong>Copy From</strong> account typically trades 0.1
        lot size but opens a 1 lot. Unless the trade copier is using fixed lot,
        the <strong>Send To</strong> account could be exposed to a dangerous
        trade 10 times the normal size. If you had set a max lot value of 5 and
        the lot size being attempted was 5.1 lots or greater, the trade copier
        will force the lot size down to 5 as the max allowed lot size and open a
        trade at 5 lots.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Force min lot</h4>
      <p className="py-2.5 text-[13px]">
        The force min lot setting can be relevant if you are using Risk
        Multiplier and the <strong>Send To</strong> account has a relatively
        small balance compared to the <strong>Copy From</strong> account. Some
        brokers have a minimum lot size of 0.10 lots on symbols, compared to the
        more common 0.01 lots.
      </p>
      <p className="py-2.5 text-[13px]">
        By choosing to force min lot you could be exposing the{' '}
        <strong>Send To</strong> account to larger-than-expected trades.
        Conversely, if you choose to not force min lot you can potentially miss
        trades as the attempted lot size is below the broker-defined minimum lot
        size.
      </p>
      <p className="py-2.5 text-[13px]">
        For example, if you set force min lot to yes and the trade copier is
        attempting to trade a 0.01 lot trade on the <strong>Send To</strong>{' '}
        account but the minimum broker lot size is 0.10 lots. The trade copier
        will force the lot size up to 0.10 lots and you would be exposed to a
        trade 10 times larger than expected.
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        Please consider what scenarios could happen before choosing to force min
        lot.
      </h6>
    </React.Fragment>
  );
}

export default TradeCopiersRiskSettings;

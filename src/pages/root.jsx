import Header from '../components/Header';

function Root() {
  return (
    <div className="mx-28 flex flex-col justify-between text-white">
      <Header />
      <div className="px-[15px] w-full">
        <section className="mb-5 rounded">
          <header className="bg-[#282D36] border-b-[#1d2127] border-b-[1px] rounded-t-[5px] p-[18px]">
            <h2 className="text-xl font-normal mt-[5px]">TRADE SIGNALS</h2>
          </header>
          <div className="text-[#CCC] bg-[#2e353e] rounded-b-[5px] p-[15px] text-[13px] leading-[22px]">
            <p className="mb-2.5 box-border">
              The Complete Trade Signal service using Trading System that
              Actually Works
            </p>
            <p className="mb-2.5 box-border">
              The System That Clearly Alerts You WHEN The Short-Term Signal
              Changes When I understood precisely how forex prices trend up and
              down I developed a tool that shows me the exact right time to buy
              and sell just as they begin to reverse.
            </p>
            <p className="mb-2.5 box-border">
              Regular trading is extremely hard, confusing and dangerous. There
              are so many patterns, indicators, strategies and setups that it
              takes years and years to master (it took me 5 years) before you
              started making any real money. Now 25+ years later it has become
              extremely simple as long as you trade with strict equity
              management rules.
            </p>
            <p className="mb-2.5 box-border">
              Traders Network Club Allows You To Trade Better From Day One
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Root;

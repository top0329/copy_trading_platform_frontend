import * as React from 'react';
import ReactApexChart from 'react-apexcharts';

const _dateCompare = (a, b) => {
  const first = new Date(a);
  const second = new Date(b);

  if (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  ) {
    return true;
  } else {
    return false;
  }
};

const _dateHourCompare = (a, b) => {
  const first = new Date(a);
  const second = new Date(b);

  if (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate() &&
    first.getHours() === second.getHours()
  ) {
    return true;
  } else {
    return false;
  }
};

const AnalysisByTime = ({ data }) => {
  const [type, setType] = React.useState('win_loss');

  const _makeMonthlyData = (props) => {
    if (props.length === 0) {
      return {
        xData: [],
        yData: [],
      };
    }

    let xData = [];
    let yData = [];

    let filterData = props.filter(
      (item) => item.type === 'DEAL_TYPE_BUY' || item.type === 'DEAL_TYPE_SELL'
    );
    yData = filterData.map((item) => item.profit);
    xData = filterData.map((item) => item.closeTime.substr(0, 10));

    return { xData, yData };
  };

  const monthlyChartConfig = {
    series: [
      {
        name: 'Profit',
        data: _makeMonthlyData(data).yData,
      },
    ],
    options: {
      chart: {
        stacked: false,
        height: 450,

        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      markers: {
        size: 0,
      },
      fill: {
        colors: ['#32CD32'],
      },
      stroke: {
        lineCap: 'round',
        curve: 'smooth',
      },
      yaxis: {
        labels: {
          style: {
            colors: '#545454',
          },
          formatter: function (val) {
            return val.toFixed(2) + '%';
          },
        },
      },
      xaxis: {
        categories: _makeMonthlyData(data).xData,
        labels: {
          style: {
            colors: '#545454',
          },
          // formatter: function (value) {
          //   return (value + '').substr(0, 10);
          // },
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(2) + '%';
          },
        },
      },
    },
  };

  const _makeDailyData = (props) => {
    let losers = [];
    let winners = [];
    let buys = [];
    let sells = [];

    let dates = [];

    if (props.length === 0) {
      return {
        losers,
        winners,
      };
    }

    const currentDate = new Date();

    for (let i = 6; i >= 0; i--) {
      const previousDate = new Date(currentDate);
      previousDate.setDate(currentDate.getDate() - i);

      dates = [...dates, previousDate.toDateString()];

      let losts = 0,
        wins = 0,
        buy = 0,
        sell = 0;
      props.forEach((item) => {
        if (_dateCompare(previousDate, item.closeTime)) {
          if (item.success === 'won' && type === 'win_loss') {
            wins++;
          } else if (item.success === 'lost' && type === 'win_loss') {
            losts++;
          } else if (item.type === 'DEAL_TYPE_BUY' && type === 'buy_sell') {
            buy++;
          } else if (item.type === 'DEAL_TYPE_SELL' && type === 'buy_sell') {
            sell++;
          }
        }
      });

      losers = [...losers, losts];
      winners = [...winners, wins];
      buys = [...buys, buy];
      sells = [...sells, sell];
    }

    return { losers, winners, buys, sells, dates };
  };

  const _makeHourlyData = (props) => {
    let losers = [];
    let winners = [];
    let buys = [];
    let sells = [];

    let dates = [];

    if (props.length === 0) {
      return {
        losers,
        winners,
      };
    }

    const currentDate = new Date();

    for (let i = 23; i >= 0; i--) {
      const previousDate = new Date(currentDate);
      previousDate.setDate(currentDate.getHours() - i);

      dates = [...dates, previousDate.toDateString()];

      let losts = 0,
        wins = 0,
        buy = 0,
        sell = 0;
      props.forEach((item) => {
        if (_dateHourCompare(previousDate, item.closeTime)) {
          if (item.success === 'won' && type === 'win_loss') {
            wins++;
          } else if (item.success === 'lost' && type === 'win_loss') {
            losts++;
          } else if (item.type === 'DEAL_TYPE_BUY' && type === 'buy_sell') {
            buy++;
          } else if (item.type === 'DEAL_TYPE_SELL' && type === 'buy_sell') {
            sell++;
          }
        }
      });

      losers = [...losers, losts];
      winners = [...winners, wins];
      buys = [...buys, buy];
      sells = [...sells, sell];
    }

    return { losers, winners, buys, sells, dates };
  };

  const dailyChartConfig = {
    series: [
      {
        name: type === 'buy_sell' ? 'Buy' : 'Sell',
        data:
          type === 'buy_sell'
            ? _makeDailyData(data).buys
            : _makeDailyData(data).winners,
      },
      {
        name: type === 'buy_sell' ? 'Sell' : 'Losers',
        data:
          type === 'buy_sell'
            ? _makeDailyData(data).sells
            : _makeDailyData(data).losers,
      },
    ],
    options: {
      chart: {
        stacked: true,
        height: 450,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        colors: ['#0088CC', '#DAA520'],
      },
      stroke: {
        lineCap: 'round',
        curve: 'smooth',
      },
      // colors: ['#80c7fd', '#ccc'],
      yaxis: {
        labels: {
          style: {
            colors: '#545454',
          },
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
      xaxis: {
        categories: _makeDailyData(data).dates,
        labels: {
          style: {
            colors: '#545454',
          },
          // formatter: function (value) {
          //   return (value + '').substr(0, 10);
          // },
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
    },
  };

  const pieChartConfig = {
    series: [100],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      legend: {
        position: 'left',
        labels: {
          colors: '#ccc',
          useSeriesColors: false,
        },
      },
      labels: ['USDEUR'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  const hourlyChartConfig = {
    series: [
      {
        name: type === 'buy_sell' ? 'Buy' : 'Sell',
        data:
          type === 'buy_sell'
            ? _makeHourlyData(data).buys
            : _makeHourlyData(data).winners,
      },
      {
        name: type === 'buy_sell' ? 'Sell' : 'Losers',
        data:
          type === 'buy_sell'
            ? _makeHourlyData(data).sells
            : _makeHourlyData(data).losers,
      },
    ],
    options: {
      chart: {
        stacked: true,
        height: 450,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        colors: ['#0088CC', '#DAA520'],
      },
      stroke: {
        lineCap: 'round',
        curve: 'smooth',
      },
      // colors: ['#80c7fd', '#ccc'],
      yaxis: {
        labels: {
          style: {
            colors: '#545454',
          },
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
      xaxis: {
        categories: _makeDailyData(data).dates,
        labels: {
          style: {
            colors: '#545454',
          },
          // formatter: function (value) {
          //   return (value + '').substr(0, 10);
          // },
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
    },
  };

  const [tab, setTab] = React.useState(1);

  const _renderMonthlyData = () => (
    <div className="flex items-center gap-[30px]">
      <div className="w-[66%]">
        <select
          name="platform"
          required
          className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded text-[14px] h-[34px]"
          // onChange={handleInputChange}
        >
          <option value={'2023'}>2023</option>
          <option value={'2024'}>2024</option>
          {/* <option value={'2023'}>2022</option> */}
        </select>
        <ReactApexChart
          options={monthlyChartConfig.options}
          series={monthlyChartConfig.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="w-[34%]">
        <ReactApexChart
          options={pieChartConfig.options}
          series={pieChartConfig.series}
          type="pie"
          width={'88%'}
        />
      </div>
    </div>
  );

  const _renderDailyData = () => (
    <div className="">
      <select
        name="platform"
        required
        className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded text-[14px] h-[34px]"
        onChange={(e) => setType(e.target.value)}
      >
        <option value={'buy_sell'}>Buy vs Sell</option>
        <option value={'win_loss'}>Win vs Loss</option>
      </select>
      <ReactApexChart
        options={dailyChartConfig.options}
        series={dailyChartConfig.series}
        type="bar"
        height={350}
      />
    </div>
  );

  const _renderHourlyData = () => (
    <div className="">
      <select
        name="platform"
        required
        className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded text-[14px] h-[34px]"
        onChange={(e) => setType(e.target.value)}
      >
        <option value={'buy_sell'}>Buy vs Sell</option>
        <option value={'win_loss'}>Win vs Loss</option>
      </select>
      <ReactApexChart
        options={hourlyChartConfig.options}
        series={hourlyChartConfig.series}
        type="bar"
        height={350}
      />
    </div>
  );

  return (
    <div>
      <ul className="flex text-sm font-medium text-center  dark:text-gray-400">
        <li className="mr-[2px]">
          <a
            onClick={() => setTab(1)}
            href="#"
            aria-current="page"
            className={`inline-block px-[15px] py-[10px] text-white bg-[#282D36]  rounded-t border-t-[3px] box-border hover:border-white ${
              tab === 1 ? 'border-white bg-[#2E353E]' : 'border-[#282D36]'
            }`}
          >
            Monthly
          </a>
        </li>
        <li className="mr-[2px]">
          <a
            onClick={() => setTab(2)}
            href="#"
            className={`inline-block px-[15px] py-[10px] text-white bg-[#282D36]  rounded-t border-t-[3px] box-border hover:border-white ${
              tab === 2 ? 'border-white bg-[#2E353E]' : 'border-[#282D36]'
            }`}
          >
            Daily
          </a>
        </li>
        <li className="mr-[2px]">
          <a
            onClick={() => setTab(3)}
            href="#"
            className={`inline-block px-[15px] py-[10px] text-white bg-[#282D36]  rounded-t border-t-[3px] box-border hover:border-white ${
              tab === 3 ? 'border-white bg-[#2E353E]' : 'border-[#282D36]'
            }`}
          >
            Hourly
          </a>
        </li>
      </ul>
      <div className="bg-[#2E353E] rounded-b p-[15px]">
        {tab === 1 && _renderMonthlyData()}
        {tab === 2 && _renderDailyData()}
        {tab === 3 && _renderHourlyData()}
      </div>
    </div>
  );
};

export default AnalysisByTime;

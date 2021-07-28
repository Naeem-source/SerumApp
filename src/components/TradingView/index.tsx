import * as React from 'react';
import './index.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
const TVChartContainer: React.FC = () => (
  <div className="tradingview-chart">
    <TradingViewWidget
      symbol= 'BINANCE:SRMUSDT'
      theme={Themes.DARK}
      withdateranges
      autosize
      hide_side_toolbar={false}
    />
  </div>
);
export default TVChartContainer;

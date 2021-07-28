import * as React from 'react';
import './index.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { useMarket, USE_MARKETS } from '../../utils/markets';

const TVChartContainer: React.FC = () => {
  const { market } = useMarket();
  return(
  <div className="tradingview-chart">
    <TradingViewWidget
      symbol = {
      USE_MARKETS.find(
        (m) => m.address.toBase58() === market?.publicKey.toBase58(),
      )?.name  || 'SRM/USDC'}
      theme={Themes.DARK}
      withdateranges
      autosize
      hide_side_toolbar={false}
    />
  </div>
)};
export default TVChartContainer;

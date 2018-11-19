const round = f => (a, b, c, d, e) => Math.round(f(a, b, c, d, e) * 100) / 100;

const getLayStake = (backOdds, layOdds, commission, backStake, betType) => {
  switch (betType.toLowerCase()) {
    case 'snr': {
      return ((backOdds - 1) / (layOdds - commission)) * backStake;
    }
    default: {
      return (backOdds / (layOdds - commission)) * backStake;
    }
  }
};

const getBookmakerProfitIfWin = (backOdds, backStake, betType) => {
  if (betType === 'sr') return backOdds * backStake;
  return (backOdds - 1) * backStake;
};

const getExchangeProfitIfWin = (commission, layStake) => (layStake * (1 - commission));

const getExchangeLoss = (layOdds, layStake) => -((layOdds - 1) * layStake);

const getBookmakerBetWinsProfit = (layOdds, layStake, bookmakerProfit) =>
  bookmakerProfit - ((layOdds - 1) * layStake);

const getExchangeBetWinsProfit = (exchangeProfit, backStake, betType) => {
  if (betType !== 'normal') return exchangeProfit;
  return exchangeProfit - backStake;
};

const calculateValues = ({
  layOdds,
  backOdds,
  backStake,
  commission,
  betType,
}) => {
  const layOddsValue = Number(layOdds);
  const backOddsValue = Number(backOdds);
  const backStakeValue = Number(backStake);
  const commissionValue = Number(commission / 100);

  const layStake =
    round(getLayStake)(backOddsValue, layOddsValue, commissionValue, backStakeValue, betType);

  const bookmakerProfit = round(getBookmakerProfitIfWin)(backOddsValue, backStakeValue, betType);
  const exchangeProfit = round(getExchangeProfitIfWin)(commissionValue, layStake);
  const bookmakerLoss = betType === 'normal' ? -backStakeValue : 0;
  const exchangeLoss = round(getExchangeLoss)(layOddsValue, layStake);

  const bookmakerBetWinsProfit =
    round(getBookmakerBetWinsProfit)(layOddsValue, layStake, bookmakerProfit);


  const exchangeBetWinsProfit =
    round(getExchangeBetWinsProfit)(exchangeProfit, backStakeValue, betType);

  return {
    layStake,
    bookmakerProfit,
    bookmakerLoss,
    exchangeProfit,
    exchangeLoss,
    bookmakerBetWinsProfit,
    exchangeBetWinsProfit,
  };
};


export default calculateValues;

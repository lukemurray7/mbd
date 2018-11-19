const validateRequest = ({
  layOdds,
  backOdds,
  backStake,
  betType,
}) => layOdds && backOdds && backStake && betType;

export default validateRequest;

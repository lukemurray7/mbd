import TotalProfit from '../containers/dashboard/profits/total-profit';
import BetBreakdown from '../containers/dashboard/profits/bet-breakdown';
import BookmakersList from '../containers/bookmaker/bookmaker-list';
import CurrentBetsPage from '../containers/bets/bets-page/bets-page';
import BetsTodoPage from '../containers/bets/bets-todo';
import CalculatorPage from '../containers/bets/calculator-page';

const routes = [
  {
    name: 'Profits',
    url: '/profits',
    component: TotalProfit,
    icon: 'trending_up',
    belongs_to: 'Dashboard',
  },
  {
    name: 'Breakdown',
    url: '/bet-breakdown',
    component: BetBreakdown,
    icon: 'pie_chart',
    belongs_to: 'Dashboard',
  },
  {
    name: 'Bookmakers',
    url: '/bookmakers',
    component: BookmakersList,
    icon: 'business',
    belongs_to: 'Bookmakers',
  },
  {
    name: 'Bets',
    url: '/current-bets',
    component: CurrentBetsPage,
    icon: 'attach_money',
    belongs_to: 'Bets',
  },
  {
    name: 'Bets to place',
    url: '/place-bets',
    component: BetsTodoPage,
    icon: 'format_list_bulleted',
    belongs_to: 'Bets',
  },
  {
    name: 'Calculator',
    url: '/calculator',
    component: CalculatorPage,
    icon: 'add_circle',
    belongs_to: 'Bets',
  },
];

export default routes;

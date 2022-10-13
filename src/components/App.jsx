import { Profile } from './Profile/Profile';
import user from '../BaseData/user.json';
import { StatisticList } from './Statistics/StatisticList';
import statistic from '../BaseData/data.json';
import { FriendsList } from './Friends/FriendsList';
import friend from '../BaseData/friends.json';
import { TransactionHistory } from './Transactions/TransactionsList';
import transaction from '../BaseData/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatisticList title="Upload stats" statistics={statistic} />
      <FriendsList friends={friend} />
      <TransactionHistory transactions={transaction} />
    </div>
  );
};

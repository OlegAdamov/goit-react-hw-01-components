import { Profile } from './Profile/Profile';
import user from '../BaseData/user.json';
import { StatisticList } from './Statistics/StatisticList';
import statistic from '../BaseData/data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatisticList statistics={statistic} />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <Statistics stats={data}/>   */}
      {/* <FriendsList friends={friends} />   */}
      {/* <TransactionsStory items={transactions}/>   */}
    </div>
  );
};

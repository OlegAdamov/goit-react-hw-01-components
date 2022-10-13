import { Statistic } from './Statistic';

export const StatisticList = ({ statistics }) => {
  return (
    <div>
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {statistics.map(statistic => (
          <li key={statistic.id}>
            <Statistic statistic={statistic} />
          </li>
        ))}
      </ul>
    </div>
  );
};

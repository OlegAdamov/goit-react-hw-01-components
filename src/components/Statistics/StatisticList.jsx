import PropTypes from 'prop-types';
import { Statistic } from './Statistic';
import { Title, StatWrapper, StatList } from './Statistic.styled';

export const StatisticList = ({ statistics }) => {
  return (
    <StatWrapper>
      {Title && <Title>Upload stats</Title>}
      <StatList>
        {statistics.map(statistic => (
          <Statistic statistic={statistic} key={statistic.id} />
        ))}
      </StatList>
    </StatWrapper>
  );
};

StatisticList.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

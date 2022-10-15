import PropTypes from 'prop-types';
import { Statistic } from './Statistic';
import { Title, StatWrapper, StatList, Item } from './Statistic.styled';

export const StatisticList = ({ statistics }) => {
  return (
    <StatWrapper>
      <Title>Upload stats</Title>
      <StatList>
        {statistics.map(statistic => (
          <Item key={statistic.id}>
            <Statistic statistic={statistic} />
          </Item>
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

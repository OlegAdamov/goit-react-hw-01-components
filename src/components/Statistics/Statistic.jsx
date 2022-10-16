import { Label, Percentage, Item } from './Statistic.styled';

export const Statistic = ({ statistic: { label, percentage } }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage} %</Percentage>
    </Item>
  );
};

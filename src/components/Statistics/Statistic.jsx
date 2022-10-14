import { Label, Percentage } from './Statistic.styled';

export const Statistic = ({ statistic: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage} %</Percentage>
    </>
  );
};

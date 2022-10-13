export const Statistic = ({ statistic: { label, percentage } }) => {
  return (
    <section className="statistics">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage} %</span>
      </li>
    </section>
  );
};

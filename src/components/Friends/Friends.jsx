export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <section className="friends">
      <li class="item">
        <span class="status"></span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </li>
    </section>
  );
};

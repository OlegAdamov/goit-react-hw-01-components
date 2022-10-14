import { FriendStatus, Name } from './Friends.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

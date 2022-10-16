import { FriendStatus, Name } from './Friends.styled';
import { InfoBlock } from './Friends.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <InfoBlock>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </InfoBlock>
  );
};

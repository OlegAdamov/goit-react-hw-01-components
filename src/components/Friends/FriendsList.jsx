import { Friend } from './Friends';
import { FriendList, InfoBlock } from './Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <InfoBlock key={friend.id}>
          <Friend friend={friend} />
        </InfoBlock>
      ))}
    </FriendList>
  );
};

import { Friend } from './Friends';
import { FriendList } from './Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <li className="friends" key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </FriendList>
  );
};

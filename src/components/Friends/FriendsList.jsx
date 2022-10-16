import PropTypes from 'prop-types';
import { Friend } from './Friends';
import { FriendList } from './Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </FriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

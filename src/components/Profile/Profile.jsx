import PropTypes from 'prop-types';
import { GiShadowFollower, GiSixEyes, GiGlassHeart } from 'react-icons/gi';
import './Profile.css';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats,
  },
}) => {
  const { followers = 0, views = 0, likes = 0 } = stats;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <GiShadowFollower />
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <GiSixEyes />
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <GiGlassHeart />
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

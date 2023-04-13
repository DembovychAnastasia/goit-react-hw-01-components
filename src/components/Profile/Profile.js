  import PropTypes from 'prop-types'
  import { ProfileContainer, Description,
  Avatar,Location, Tag, Name, Stats,
  StatsItem, Label, Quantity} from './Profile.styled';

  export const Profile=({items} ) => {
    return (
    <ProfileContainer>
    <Description>
      <Avatar
        src={items.avatar}
        alt={items.username}
      />
      <Name>{items.username}</Name>
      <Tag>@{items.tag}</Tag>
      <Location>{items.location}</Location>
    </Description>

  
    <Stats>
    <StatsItem >
      <Label>Followers</Label>
      <Quantity>{items.stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{items.stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{items.stats.likes}</Quantity>
    </StatsItem>
  </Stats>
    </ProfileContainer> 

    );
};

Profile.propTypes = {
items: PropTypes.shape({
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}).isRequired
};

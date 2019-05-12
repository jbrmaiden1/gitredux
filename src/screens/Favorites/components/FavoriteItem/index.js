import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Title, Avatar, Info, Description,
} from './styles';

const FavoriteItem = ({ item }) => (
  <Container>
    <Avatar source={{ uri: item.owner.avatar_url }} />
    <Info>
      <Title>{item.name} </Title>
      <Description numberOfLines={2}>{item.description} </Description>
    </Info>
  </Container>
);

FavoriteItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default FavoriteItem;

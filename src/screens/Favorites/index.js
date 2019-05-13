import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
import FavoriteItem from './components/FavoriteItem';
import { Container, Empty, RepoList } from './styles';

const Favorites = ({ favorites }) => {
  const [repos, setRepos] = useState(favorites);

  function renderList() {
    return (
      <RepoList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FavoriteItem item={item} />}
      />
    );
  }

  return (
    <Container>
      {repos.length === 0 ? <Empty>Nenhum favorito adicionado</Empty> : renderList()}
    </Container>
  );
};

Favorites.navigationOptions = {
  headerStyle: { backgroundColor: colors.primaryDark },
  headerTintColor: colors.white,
  title: 'Meus Favoritos',
  headerBackTitle: null,
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites.data,
});

export default connect(mapStateToProps)(Favorites);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';
import {
  Container,
  Title,
  Description,
  Form,
  Input,
  Button,
  ButtonText,
  Footer,
  FooterButton,
  FooterLink,
  Content,
  Error,
  Loading,
} from './styles';

const Main = ({
  error, favoritesCount, navigation, addFavoriteRequest, loading,
}) => {
  const [repoInput, setRepoInput] = useState('');
  function navigateToFavorites() {
    navigation.navigate('Favorites');
  }

  function handleChange(text) {
    setRepoInput(text);
  }

  function addRepository() {
    if (!repoInput.length) return;

    addFavoriteRequest(repoInput);
  }

  return (
    <Container>
      <Content>
        <Title>Git Favorite</Title>

        <Description>Comece adicionando alguns repositórios aos seus favoritos</Description>

        {!!error && <Error>{error}</Error>}

        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="usuário/repositório"
            underlineColorAndroid="transparent"
            value={repoInput}
            onChangeText={text => handleChange(text)}
          />

          <Button onPress={addRepository} activeOpacity={0.6}>
            {loading ? (
              <Loading size="small" color="#FFF" />
            ) : (
              <ButtonText>Adicionar aos favoritos</ButtonText>
            )}
          </Button>
        </Form>
      </Content>
      <Footer>
        <FooterButton onPress={navigateToFavorites}>
          <FooterLink>Favoritos ({favoritesCount})</FooterLink>
        </FooterButton>
      </Footer>
    </Container>
  );
};

Main.defaultProps = {
  error: null,
};

Main.navigationOptions = {
  header: null,
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  addFavoriteRequest: PropTypes.func.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  error: PropTypes.oneOfType([null, PropTypes.string]),
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  error: state.favorites.error,
  loading: state.favorites.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

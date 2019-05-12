import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as FavoriteActions from '../../store/actions/favorites';
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
} from './styles';

const Main = (props) => {
  const [repoInput, setRepoInput] = useState('');
  function navigateToFavorites() {
    props.navigation.navigate('Favorites');
  }

  function handleChange(text) {
    setRepoInput(text);
  }

  function addRepository() {
    if (!repoInput.length) return;

    props.addFavoriteRequest(repoInput);
  }

  return (
    <Container>
      <Content>
        <Title>Git Favorite</Title>

        <Description>Comece adicionando alguns repositórios aos seus favoritos</Description>

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
            <ButtonText>Adicionar aos favoritos</ButtonText>
          </Button>
        </Form>
      </Content>
      <Footer>
        <FooterButton onPress={navigateToFavorites}>
          <FooterLink>Favoritos ({props.favoritesCount})</FooterLink>
        </FooterButton>
      </Footer>
    </Container>
  );
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
};

const mapStateToProps = state => ({
  favoritesCount: state.favorites.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

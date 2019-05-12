import React, { useState } from 'react';
import { colors } from '../../styles';
import FavoriteItem from './components/FavoriteItem';
import { Container, Empty, RepoList } from './styles';

const Favorites = () => {
  const xd = [
    {
      id: 178928033,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzg5MjgwMzM=',
      name: 'react-native-template-rocketseat-basic',
      full_name: 'Rocketseat/react-native-template-rocketseat-basic',
      private: false,
      owner: {
        login: 'Rocketseat',
        id: 28929274,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0',
        avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Rocketseat',
        html_url: 'https://github.com/Rocketseat',
        followers_url: 'https://api.github.com/users/Rocketseat/followers',
        following_url: 'https://api.github.com/users/Rocketseat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Rocketseat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Rocketseat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Rocketseat/subscriptions',
        organizations_url: 'https://api.github.com/users/Rocketseat/orgs',
        repos_url: 'https://api.github.com/users/Rocketseat/repos',
        events_url: 'https://api.github.com/users/Rocketseat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Rocketseat/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/Rocketseat/react-native-template-rocketseat-basic',
      description:
				'Template básica para aplicações React Native com a estrutura utilizada na Rocketseat 🚀',
      fork: false,
      url: 'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic',
      forks_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/forks',
      keys_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/keys{/key_id}',
      collaborators_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/collaborators{/collaborator}',
      teams_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/teams',
      hooks_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/hooks',
      issue_events_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/issues/events{/number}',
      events_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/events',
      assignees_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/assignees{/user}',
      branches_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/branches{/branch}',
      tags_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/tags',
      blobs_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/git/blobs{/sha}',
      git_tags_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/git/tags{/sha}',
      git_refs_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/git/refs{/sha}',
      trees_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/git/trees{/sha}',
      statuses_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/statuses/{sha}',
      languages_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/languages',
      stargazers_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/stargazers',
      contributors_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/contributors',
      subscribers_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/subscribers',
      subscription_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/subscription',
      commits_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/commits{/sha}',
      git_commits_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/git/commits{/sha}',
      comments_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/comments{/number}',
      issue_comment_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/issues/comments{/number}',
      contents_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/contents/{+path}',
      compare_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/compare/{base}...{head}',
      merges_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/merges',
      archive_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/{archive_format}{/ref}',
      downloads_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/downloads',
      issues_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/issues{/number}',
      pulls_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/pulls{/number}',
      milestones_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/milestones{/number}',
      notifications_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/notifications{?since,all,participating}',
      labels_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/labels{/name}',
      releases_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/releases{/id}',
      deployments_url:
				'https://api.github.com/repos/Rocketseat/react-native-template-rocketseat-basic/deployments',
      created_at: '2019-04-01T18:59:06Z',
      updated_at: '2019-05-11T10:33:56Z',
      pushed_at: '2019-05-08T17:06:13Z',
      git_url: 'git://github.com/Rocketseat/react-native-template-rocketseat-basic.git',
      ssh_url: 'git@github.com:Rocketseat/react-native-template-rocketseat-basic.git',
      clone_url: 'https://github.com/Rocketseat/react-native-template-rocketseat-basic.git',
      svn_url: 'https://github.com/Rocketseat/react-native-template-rocketseat-basic',
      homepage: '',
      size: 137,
      stargazers_count: 92,
      watchers_count: 92,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 19,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      forks: 19,
      open_issues: 0,
      watchers: 92,
      default_branch: 'master',
      organization: {
        login: 'Rocketseat',
        id: 28929274,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0',
        avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Rocketseat',
        html_url: 'https://github.com/Rocketseat',
        followers_url: 'https://api.github.com/users/Rocketseat/followers',
        following_url: 'https://api.github.com/users/Rocketseat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Rocketseat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Rocketseat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Rocketseat/subscriptions',
        organizations_url: 'https://api.github.com/users/Rocketseat/orgs',
        repos_url: 'https://api.github.com/users/Rocketseat/repos',
        events_url: 'https://api.github.com/users/Rocketseat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Rocketseat/received_events',
        type: 'Organization',
        site_admin: false,
      },
      network_count: 19,
      subscribers_count: 15,
    },
  ];
  const [repos, setRepos] = useState(xd);

  function renderList() {
    return (
      <RepoList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FavoriteItem item={item} />}
      />
    );
  }

  console.tron.log(repos);
  return (
    <Container>
      {repos.length == 0 ? <Empty>Nenhum favorito adicionado</Empty> : renderList()}
    </Container>
  );
};

Favorites.navigationOptions = {
  headerStyle: { backgroundColor: colors.primaryDark },
  headerTintColor: colors.white,
  title: 'Meus Favoritos',
  headerBackTitle: null,
};

export default Favorites;

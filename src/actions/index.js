const Reflux = require('reflux');

const ConnectActions = Reflux.createActions([
  'resetConnection',
  'onHostnameChanged',
  'onPortChanged',
  'onReadPreferenceChanged',
  'onReplicaSetNameChanged',
  'onAuthenticationMethodChanged',
  'onUsernameChanged',
  'onPasswordChanged',
  'onAuthSourceChanged',
  'onSSLMethodChanged',
  'onSSLCAChanged',
  'onSSLCertificateChanged',
  'onSSLPrivateKeyChanged',
  'onSSLPrivateKeyPasswordChanged',
  'onFavoriteNameChanged',
  'onCreateFavorite',
  'onSSHTunnelPasswordChanged',
  'onSSHTunnelPassphraseChanged',
  'onSSHTunnelHostnameChanged',
  'onSSHTunnelUsernameChanged',
  'onSSHTunnelPortChanged',
  'onSSHTunnelIdentityFileChanged',
  'onSSHTunnelChanged'
  'onSaveConnection',
  'onDeleteConnection',
  'onFavoriteSelected'
]);

module.exports = ConnectActions;

const React = require('react');
const PropTypes = require('prop-types');
const Actions = require('../../actions');
const { FormInput } = require('hadron-react-components');

class ReplicaSetNameInput extends React.Component {

  onReplicaSetNameChanged(evt) {
    Actions.onReplicaSetNameChanged(evt.target.value);
  }

  render() {
    return (
      <FormInput
        label="Replica Set Name"
        name="replica_set_name"
        changeHandler={this.onReplicaSetNameChanged.bind(this)}
        value={this.props.currentConnection.replica_set_name || ''} />
    );
  }
}

ReplicaSetNameInput.propTypes = {
  currentConnection: PropTypes.object.isRequired
};

ReplicaSetNameInput.displayName = 'ReplicaSetNameInput';

module.exports = ReplicaSetNameInput;
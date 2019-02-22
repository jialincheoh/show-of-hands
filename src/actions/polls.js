import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addPoll = (poll) => ({
  type: 'ADD_POLL',
  poll
});

export const listPolls = (polls) => ({
  type: 'LIST_POLLS',
  polls
});

export const getPoll = (polls) => ({
  type: 'GET_POLL',
  polls
});

export const listAllPolls = (pollData = {}) => {
  return (dispatch) => {
    database.ref('polls').once("value").then((polls) => {
      polls = polls.val()
      const pollsArray = Object.keys(polls).map(id => {
        polls[id].id = id
        return polls[id]
      })
      dispatch(listPolls(pollsArray))
    });
  };
};

export const startAddPoll = (pollData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      numberOfOptions = 0,
      createdAt = 0
    } = pollData;
    const poll = { description, note, numberOfOptions, createdAt };

    database.ref('polls').push(poll).then((ref) => {
      dispatch(addPoll({
        id: ref.key,poll
      }));
    });
  };
};

export const startGetPoll = (pollData = {}) => {
  return (dispatch) => {
    debugger
    pollData;
    database.ref('polls').child(pollData.id).once("value").then((poll) => {
      poll = poll.val()
      poll.id = poll.key
      dispatch(getPoll({
        id: poll.id,
        poll
      }));
    });
  };
};

export const startEditPoll = (pollData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      numberOfOptions = 0,
      createdAt = 0
    } = pollData;
    const poll = { description, note, numberOfOptions, createdAt };
    database.ref('polls').push(poll).then((ref) => {
      dispatch(addPoll({
        id: ref.key,poll
      }));
    });
  };
};


export const startRemovePoll = (pollData = {}) => {
  debugger
  return (dispatch) => {
    const {
      description = '',
      note = '',
      numberOfOptions = 0,
      createdAt = 0
    } = pollData;
    const poll = { description, note, numberOfOptions, createdAt };

    database.ref('polls').push(poll).then((ref) => {
      dispatch(addPoll({
        id: ref.key,poll
      }));
    });
  };
};
// REMOVE_EXPENSE
export const removePoll = ({ id } = {}) => ({
  type: 'REMOVE_POLL',
  id
});

// EDIT_EXPENSE
export const editPoll = (id, updates) => ({
  type: 'EDIT_POLL',
  id,
  updates
});

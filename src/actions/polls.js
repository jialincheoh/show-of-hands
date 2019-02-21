import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addPoll = (poll) => ({
  type: 'ADD_POLL',
  poll
});

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

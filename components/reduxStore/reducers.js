import {createSlice} from '@reduxjs/toolkit';

export const SavedSlice = createSlice({
  name: 'booking',
  initialState: {
    booking: [],
  },
  reducers: {
    savedPlaces: (state, action) => {
      console.log("stateRedux", state);
      console.log("actionRedux",action)
      state.booking.push({...action.payload});
    },
    // removePlaces : (state,action) =>{
    //   console.log("state1", state)
    //   return{
    //     ...state,
    //     booking: state
    //   }
    // }
  },
});

export const {savedPlaces} = SavedSlice.actions;

export default SavedSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

//initial state of app
// from where to where, travel
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

//slice: push info to data layer
// we need action to send to data layer of app; what will happen as app runs
// action means changing the state
// setorigin will be updates, same for destination and travel time
export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        settravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, settravelTimeInformation } =
    navSlice.actions;


// Selectors: pull info from data layer
// one selector for each push
// go to state.nav.origin and get the information
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selecttravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
// now reducer will go to store.js
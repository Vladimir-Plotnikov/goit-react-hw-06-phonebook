import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: initialState,
    reducers: {
        
        addContact(state, action) {
            if (state.contacts.find(
                ({ name }) =>
                    name.toLowerCase() === action.payload.name.trim().toLowerCase()
            )
            ) {
                alert(`${action.payload.name} is already in your contacts.`)
                return;
            }
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        },

        deleteContact(state, action) {
            return {
                ...state,
                contacts: state.contacts.filter(({ id }) => id !== action.payload),
            };
        },

        setFilter(state, action) {
            return {
                ...state,
                filter: action.payload,
            };
        },
    },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer
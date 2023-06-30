import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.value;
export const selectContacts = state => state.contacts.list;

export const getFilteredContactsList =  createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
)
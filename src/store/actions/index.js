// action/index.js


import {BOOK_SELECTED} from '../constants'
//select book is an action creator, it will need an action type
export function selectBook(book) {

  return {
    type: BOOK_SELECTED,
    payload: book
  };
}

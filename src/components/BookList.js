// components/BookList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../store/actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';



class BookList extends Component {
  render() {
    let bookTitles = this.props.books.map((book) => {
      return(

        <div className="list-group"><li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item list-group-item-primary">{book.title}</li>
        </div>
        
      )
    })
    return (
      <ul className="list-group col-sm-4">
        {bookTitles}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.books);
  //what is returned will show up as props inside of BookList
  //this gives you access to books in props.. (books would be good for mapping)
  return {
    books: state.books,
  }
}

//anything returned from this function will end up as props on
//BookList Container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
    return {
      selectBook: book => {
        dispatch(selectBook(book))
      }
    }
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

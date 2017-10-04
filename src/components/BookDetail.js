// components/BookDetail.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../store/actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <div className="card">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="display-5">Welcome to the Book List</h1>
            <p className="lead">Select a book to get started!</p>
          </div>
        </div>
      )
    }
    return (
      <div className='card'>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h3> Details for: </h3>
        <h4 className="title">{this.props.book.title}</h4>
        <div>{this.props.book.pages} pages</div>
        <div>Author: {this.props.book.author}</div>
        <div>Price: ${this.props.book.price} USD</div>
        <div>Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div>Genre: {this.props.book.category.join(", ")} </div>
      </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);

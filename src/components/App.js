import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';

class App extends Component {
    render() {
        return (
          <div className='wrapper'>

              <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h3 className="display-3">Books N' Roses: Appetite for Instruction</h3>
                </div>
              </div>

            <div className='card-deck'>

                <BookList/>


                <BookDetail/>

            </div>
          </div>
        );
    }
}

export default App;

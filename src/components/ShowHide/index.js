// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  firstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  lastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="page-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btns-container">
          <div>
            <button
              type="button"
              className="button btn1"
              onClick={this.firstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && (
              <div className="show-hide-name btn1">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              className="button btn2"
              onClick={this.lastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && (
              <div className="show-hide-name btn2">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

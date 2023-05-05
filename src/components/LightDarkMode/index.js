// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  isDarked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  cardChange = () => {
    const {isClicked} = this.state
    return isClicked ? 'cardContainer' : 'cardContainer2'
  }

  tittleChange = () => {
    const {isClicked} = this.state
    return isClicked ? 'tittle' : 'tittle2'
  }

  buttonChange = () => {
    const {isClicked} = this.state
    return isClicked ? 'button1' : 'button2'
  }

  textChange = () => {
    const {isClicked} = this.state
    return isClicked ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const className = this.cardChange()
    const tittle = this.tittleChange()
    const button = this.buttonChange()
    const buttonText = this.textChange()
    return (
      <div className="bgContainer">
        <div className={className}>
          <h1 className={tittle}>Click To Change Mode</h1>
          <button className={button} type="button" onClick={this.isDarked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

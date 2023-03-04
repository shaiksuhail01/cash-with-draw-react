import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {denomination, moneyWithDraw} = this.props
    const {id, value} = denomination
    const moneyDraw = () => {
      moneyWithDraw(id)
    }
    return (
      <li>
        <button type="button" className="listItemContainer" onClick={moneyDraw}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  moneyWithDraw = id => {
    if (id === 1) {
      this.setState(prevState => ({balance: prevState.balance - 50}))
    } else if (id === 2) {
      this.setState(prevState => ({balance: prevState.balance - 100}))
    } else if (id === 3) {
      this.setState(prevState => ({balance: prevState.balance - 200}))
    } else if (id === 4) {
      this.setState(prevState => ({balance: prevState.balance - 500}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const sliceName = name.slice(0, 1)
    const {balance} = this.state
    return (
      <div className="divContainer">
        <div className="cardContainer">
          <div className="nameContainer">
            <h1 className="nameId">{sliceName}</h1>
            <p className="name">{name}</p>
          </div>
          <div className="balanceContainer">
            <p className="balanceName">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="description">In Rupees</p>
            </div>
          </div>
          <p className="withdrawName">Withdraw</p>
          <p className="chooseDescription">CHOOSE SUM (IN RUPEES)</p>

          <ul className="listContainer">
            {denominationsList.map(eachObj => (
              <DenominationItem
                key={eachObj.id}
                denomination={eachObj}
                moneyWithDraw={this.moneyWithDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal

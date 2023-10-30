import React, { Component } from 'react';
import ReceiptComponent from './ReceiptComponent';

class TransferComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      showReceipt: false,
    };
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showReceipt: true });
  };

  render() {
    return (
      <div>
        <h2>Transfer Money</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </div>
          <div>
            <button type="submit">Transfer</button>
          </div>
        </form>
        <ReceiptComponent
          transactionData={{
            source: '0xdd2fd4581271e230360230f9337d5c0430bf44c0',
            destination: '0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199',
            amount: this.state.amount, // Pass the amount entered
            status: 'SUCCESS',
            gasUsed: '21000',
            receiptHash: '0x39ae9270a0f2edac19f51d1e9b423B0d73440f142d1d1709fb3806c97539c6eb',
            createdAt: '2022-03-29T04:08:03.172Z',
          }}
          showReceipt={this.state.showReceipt}
        />
      </div>
    );
  }
}

export default TransferComponent;
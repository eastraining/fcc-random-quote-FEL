import React from 'react';
import './App.css';

// quotes taken from: https://github.com/erossignon/qod4outlook/blob/master/quotes.txt
const QUOTES = [
  ['Real knowledge is to know the extent of one’s ignorance.', 'Confucius'],
  ['The more you know, the more you realize you know nothing.', 'Socrates'],
  ['Tell me and I forget.  Teach me and I remember.  Involve me and I learn.', 'Benjamin Franklin'],
  ['Simplicity, carried to the extreme, becomes elegance.', 'Jon Franklin'],
  ['The most dangerous kind of waste is the waste we do not recognize.', 'Shigeo Shingo'],
  ['It is not the employer who pays the wages.  He only handles the money.  It is the product that pays the wages.', 'Henry Ford'],
  ['Don\'t waste time learning the "tricks of the trade."  Instead, learn the trade.', 'James Charlton'],
  ['When solving problems, dig at the roots instead of just hacking at the leaves.', 'Anthony J. D\'Angelo,'],  
  ['A bad system will beat a good person every time.', 'W. Edwards Deming'],
  ['Watch the little things; a small leak will sink a great ship.', 'Benjamin Franklin'],
  ['The world we have created is a product of our thinking; it cannot be changed without changing our thinking.', 'Albert Einstein'],
  ['If you don\'t know where you are going, you will probably end up somewhere else.', 'Lawrence J. Peter'],
  ['The impossible is often the untried.', 'Jim Goodwin'],
  ['Don\'t water your weeds.', 'Harvey MacKay'],
];

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QUOTES,
      text: '',
      author: '',
      index: -1
    }
    this.newQuote = this.newQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }
  newQuote() {
    let index; 
    do {
      index = Math.floor(Math.random() * (this.state.quotes.length));
    } while (index === this.state.index);
    let quote = this.state.quotes[index];
    this.setState({
      text: quote[0],
      author: quote[1],
      index: index
    });
  }
  tweetQuote(e) {
    e.preventDefault();
    let tweetLink = e.target.href.concat(`?text="${this.state.text}" - ${this.state.author}`);
    window.open(tweetLink);
  }

  render() {
    if (this.state.text === '') {
      this.newQuote();
    }
    return (
      <div id="quote-box">
        <p id="text">{this.state.text}</p>
        <p id="author">- {this.state.author}</p>
        <div class="button-bar">
          <a title="Tweet me!" className="clickable" id="tweet-quote" href="https://www.twitter.com/intent/tweet" onClick={this.tweetQuote}>Tweet Quote</a>
          <button title="Get a new quote!" className="clickable" id="new-quote" onClick={this.newQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
      <div id="App">
        <QuoteBox />
        <p><em>by eastraining</em></p>
      </div>
  );
}

export default App;

"use strict";
/*global React*/

var ListElements = React.createClass({
  getInitialState: function() {
    return ( {"list": ["item1","item2","item3"]} );
  },
  render: function() {
    return( <ReactList listElements={this.state.list}/>);
  }
});

var ReactList = React.createClass({
  propTypes: {
  listElements: React.PropTypes.array
  },
  getInitialState: function() {
    console.log("getInitialState");

    var opArr = [];
    this.props.listElements.forEach( function(e) {
      opArr.push(0);
    }.bind(this));

    this.setState( { "opacityArray": opArr } );

    return ({ "opacityArray": opArr });
  },
  componentDidMount: function() {
    console.log("componentDidMount");

    return ({ "opacityArray": this.state.opacityArray });

  },
  render: function() {

    return (
      <div onClick={this.hideElement}>
        <div>
          <h1>I am an Unordered List</h1>
        </div>
        <div>
          <ul className="list-root">
            {this.props.listElements.map( function(listElt, i) {
              return( <div className="outline"><li className="list-element" style={{"opacity":this.state.opacityArray[i]}} id={i} onMouseOver={this.showElement}>{listElt}</li></div>);
              }.bind(this))
            }
          </ul>
        </div>
      </div>
    );
  },
  showElement: function(event) {
    event.preventDefault();
    var targetID = parseInt(event.target.id);

    //write if statement saying if you're at the 0th index, show element. If
    //you're at the 1 - nth index, then don't change opacity unless the previous arr[ind]=1

    if ( targetID === 0 && this.state.opacityArray[targetID] !== 1 || targetID !== 0 && this.state.opacityArray[targetID-1] === 1 && this.state.opacityArray[targetID] !== 1) {
      this.state.opacityArray[targetID] = 1;
    }
    this.setState( { "opacityArray": this.state.opacityArray} );
  },
  hideElement: function(event) {
    event.preventDefault();
    var newArr = [];
    this.props.listElements.forEach( function(e) {
      newArr.push(0);
    });
    this.setState( { "opacityArray": newArr } );
  }
});

$(document).ready( function() {
  React.render(
    <ListElements/>,
    $('#container')[0]
  );
});

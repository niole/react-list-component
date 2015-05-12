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
    console.log("opacityArray");
    console.log(this.state.opacityArray);

    return (
      <div>
        <h1>I am an Unordered List</h1>
        <ul>
          {this.props.listElements.map( function(listElt, i) {
            console.log('this.stateofopacityarray[i]');
            console.log(this.state.opacityArray[i]);
            return( <li style={{"opacity":this.state.opacityArray[i]}} id={i} onMouseOver={this.showElement}>{listElt}</li>);
            }.bind(this))
          }
        </ul>
      </div>
    );
  },
  showElement: function(event) {
    event.preventDefault();
    var targetID = event.target.id;
    console.log("targetID");
    console.log(targetID);

    this.state.opacityArray[targetID] = 1;
    console.log("updated opacityArray");
    console.log(this.state.opacityArray);
    this.setState( { "opacityArray": this.state.opacityArray} );
  }
});

$(document).ready( function() {
  React.render(
    <ListElements/>,
    $('#container')[0]
  );
});

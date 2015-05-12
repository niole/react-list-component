"use strict";
/*global React*/

var Test = React.createClass({
  render: function() {
    return (<h1>Test</h1>);
    }
});

$(document).ready( function() {
  React.render(
    <Test/>,
    $('#container')[0]
  );
});

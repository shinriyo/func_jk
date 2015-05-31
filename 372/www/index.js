var timelineCapacity = moment.duration(1, 'seconds');

var ___mouseCursor = ___(timelineCapacity);
var ___mouseIsDown = ___(timelineCapacity);
var ___mouseDrag = ___(timelineCapacity);

Component1 = React.createClass(
{
  getInitialStage: function()
  {
    return {cursor: {x: 100, y: 100}};
  },
  onMouseMove: function(e)
  {
    ___mouseCursor.appear({x: 100, y: 100});
  },
  onMouseDown: function(e)
  {
    ___mouseIsDown.appear(true);
  },
  onMouseUp: function(e)
  {
    ___mouseIsDown.appear(false);
  },
  componentDidMount: function(e)
  {
    var component = this;

    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("mouseup", this.onMouseUp);

    ___mouseCursor.component(function()
    {
      if(___mouseIsDown.value(___('Now')))
        ___mouseDrag.appear(x);
    });


    ___mouseIsDown.component(function()
    {


    });


    ___mouseDrag.component(function()
    {
      component.setState({cursor: x});
    });
  },
  render: function()
  {
    return (<div><svg heght = "100%" width = "100%" >
    <circle cx = {this.state.cursor.x}>
    cy = {this.state.cursor.y} r="10" fill="blue" />
    </svg></div>);
  }
});

React.render(<Component1>, document.body);

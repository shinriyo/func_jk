var Timer = React.createClass({
    getInitialState: function()
    {
      return {secondsEleapsed: 0};
    },
    tick: function()
    {
      this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    },
    componentDidMount: function()
    {
      this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function()
    {
        clearInterval(this.setInterval);
    },
    render: function()
    {
      return (
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
      );
    }
});

var mount = React.render(<Timer />, document.body);

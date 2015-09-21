var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Ogenz</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a><font size="3">Login</font></a></li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Your Zip Code" />
              </div>
              <button type="submit" className="btn btn-default">Find</button>
            </form>
          </div>

        </div>
      </nav>
      <div className="jumbotron">
<iframe width="860" height="435" src="https://www.youtube.com/embed/y6Sxv-sUYtM" frameborder="0" allowfullscreen></iframe>
      </div>
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render: function() {
    return <h1>I'm child1</h1>
  }
});

var Child2 = React.createClass({
  render: function() {
    return <h1>I'm the other child, Child2.</h1>
  }
})

var routes = (
  <Router history={new HashHistory}>
    <Route path="/" component={Hello}>
      <Route path="1" component={Child1} />
      <Route path="2" component={Child2} />
    </Route>
  </Router>
)

// var element = React.createElement(Hello, {});
React.render(routes, document.querySelector('.container'));

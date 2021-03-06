import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div id="home-sale">
        <h2>Great Deal</h2>
        <div className="sale-container clear-fix">
          {this.props.data.map((item, index) => {
            return <div key={index} className="sale-item float-left">
              <a href={item.link} target="_blank">
                <img src={item.img} alt={item.title}/>
              </a>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default HomeAd

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    if (props[propName] < 80 && props[propName] < 300) {
      return new Error('Weight should be between 80-300!')
    } else if (props[propName] == undefined) {
      return new Error('Weight is required!')
    } else if (isNaN(props[propName])) {
      return new Error('Weight must be a number!')
    }
  }
}

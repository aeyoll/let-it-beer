import React, { Component } from 'react'
import Ripple from 'react-toolbox/lib/ripple';
import styles from './button.scss'

class Button extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    kind: React.PropTypes.string,
    label: React.PropTypes.string,
    large: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    ripple: React.PropTypes.bool
  }

  static defaultProps = {
    kind: 'primary',
    loading: false,
    large: false,
    ripple: true
  }

  constructor () {
    super()
  }

  handleMouseDown = (event) => {
    event.preventDefault()

    if (this.refs.ripple) {
      this.refs.ripple.start(event)
    }

    if (this.props.onMouseDown) {
      this.props.onMouseDown(event)
    }
  }

  render() {
    let className = styles[this.props.kind]

    const {kind, loading, large, label, ripple, ...others} = this.props;

    if (large) {
      className += ` ${styles.large}`;
    }

    return (
      <button
        {...others}
        className={className}
        disabled={this.props.disabled || this.props.loading}
        onMouseDown={this.handleMouseDown}
      >
        { ripple ? <Ripple ref='ripple' loading={loading}/> : null }
        { label ? <abbr className={styles.label}>{label}</abbr> : null }
      </button>
    )
  }
}

export default Button

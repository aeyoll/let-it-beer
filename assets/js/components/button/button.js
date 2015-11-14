import React, { Component } from 'react'
import styles from './button.scss'

class Button extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.string,
    large: React.PropTypes.bool,
    loading: React.PropTypes.bool
  }

  static defaultProps = {
    loading: false,
    large: false
  }

  render() {
    let className = ''

    const {loading, large, label, ...others} = this.props;

    if (large) {
      className += ` ${styles.large}`;
    }

    return (
      <button
        {...others}
        className={className}
        disabled={this.props.disabled || this.props.loading}
      >
        { label ? <abbr className={styles.label}>{label}</abbr> : null }
      </button>
    )
  }
}

export default Button

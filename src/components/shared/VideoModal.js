mport React from 'react'
import PropTypes from 'prop-types'
import CssModules from 'react-css-modules'
import { RemoveIcon } from '@components/Shared/Icons/Icons'
import Modal from './Modal'
import classes from './VideoModal.scss'

@CssModules(classes)
export default class VideoModal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func.isRequired
  }

  render() {
    return (
      <Modal>
        <div styleName="wrapper">
          <div styleName="inner">
            <button onClick={this.props.handleClose} styleName="close">
              <RemoveIcon />
            </button>
            {this.props.children}
          </div>
        </div>
      </Modal>
    )
  }
}

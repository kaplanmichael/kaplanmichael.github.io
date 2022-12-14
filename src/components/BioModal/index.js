import React from 'react';
import PropTypes from 'prop-types';

export default class BioModal extends React.Component {

  render() {
        return (
          <article className={`comp-bio-modal ${this.props.visible ? '' : 'hidden'}`} onClick={this.props.clickAction}>
            <div className="modal-wrapper">
              <div className="modal-content">
                <figure>
                  <img src={this.props.obj.imageurl} alt={`${this.props.obj.name}`}/>
                  <figcaption>
                    <h3>{this.props.obj.name}</h3>
                    <em>{this.props.obj.role}</em>
                  </figcaption>
                </figure>
                <div dangerouslySetInnerHTML={ { __html: this.props.obj.bio } } />
              </div>
            </div>
          </article>
        );
    }

}
BioModal.propTypes = {
    obj: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    clickAction: PropTypes.func.isRequired
};

// Specifies the default values for props:
BioModal.defaultProps = {
  visible: false
};

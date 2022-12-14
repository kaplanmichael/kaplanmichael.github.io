import React from 'react';
import BioModal from '../BioModal';
import ReactGA from 'react-ga';

export default class MemberCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    openModal() {
      ReactGA.modalview(`Bio — ${this.props.member.name}`);
      this.setState({
        visible: true
      });
    }

    hasBio() {
      return (this.props.member.bio && this.props.member.bio !== "" );
    }

    closeModal() {
      this.setState({
        visible: false
      });
    }

    render() {
        return (
          <>
            <figure className={`member-card ${ this.hasBio() ? '': 'no-bio' }` }>
              <div onClick={() => {
                if(this.hasBio()) {
                    this.openModal()
                }
              }}>
                <img src={this.props.member.thumburl} alt={`${this.props.member.name}`}/>
                <figcaption>
                  <strong>{this.props.member.name}</strong>
                  <em>{this.props.member.role}</em>
                </figcaption>
              </div>
              <BioModal obj={this.props.member} visible={this.state.visible} clickAction={() => this.closeModal()}/>
            </figure>
          </>
        );
    }
}

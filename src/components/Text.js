import React from 'react';
import styled from 'styled-components';

const TextLargeDiv = styled.h2`
  color: white;
  font-size: 16px;
  margin-bottom: 0px;
`;

const TextSmallDiv = styled.p`
  color: white;
  font-size: 13px;
  margin-bottom: 0px;
`;

const TextFadedDiv = styled.p`
  color: #b2b2b2;
  font-size: 13px;
  margin-bottom: 0px;
  margin-top: 4px;
`;

const TextLinkDiv = styled.a`
  color: #05b1d1;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const TextSmall = props => <TextSmallDiv> {props.children} </TextSmallDiv>;

export const TextLarge = props => <TextLargeDiv> {props.children} </TextLargeDiv>;

export const TextFaded = props => <TextFadedDiv> {props.children} </TextFadedDiv>;

export const TextLink = props => (
  <TextLinkDiv href={props.link || ''} target={'_blank'} rel={'noopener'}>
    {props.children}
  </TextLinkDiv>
);

export class TextTyping extends React.Component {
  state = {
    text: "",
  }

  constructor(props) {
    super(props);

    this.timeouts = [];
    this.CursorChar = styled.span`
      background-color: #05b1d1;
      color: #05b1d1;
    `;

    this.Cursor = () => (
      <this.CursorChar>_</this.CursorChar>
    );
  }

  componentDidMount = () => {
    this.typeSentences();
  }

  componentWillUnmount = () => {
    for (let timeout of this.timeouts) {
      clearTimeout(timeout);
    }
  }

  updateLetter = newText => {
    return new Promise(resolve => {
      this.timeouts.push(
        setTimeout(() => {
          this.setState({text: newText}, () => {
            resolve(newText);
          });
        }, this.props.typeSpeed || 40)
      );
    });
  }

  typeSentence = sentence => {
    return new Promise(resolve => {
      let current = 0;
      let isBackspacing = false;

      const next = (base = this.state.text) => {
        if (isBackspacing === false && current < sentence.length) {
          const letter = sentence[current++];
          this.updateLetter(base + letter).then(next);
        }

        else if (base.length > 0) {
          const backspacedBase = base.slice(0, base.length - 1);
          this.timeouts.push(
            setTimeout(() => {
              isBackspacing = true;
              this.updateLetter(backspacedBase).then(next);
            }, isBackspacing ? 0 : (this.props.pauseTime || 1200))
          );
        }

        else {
          resolve();
        }
      };

      if (sentence) next();
    });
  }

  typeSentences = () => {
    const phrases = this.props.toType || [];
    const loop = this.props.loop;

    let current = 0;
    const next = async () => {
      if (loop && current >= phrases.length) {
        current %= phrases.length;
      }

      else if (!loop && current >= phrases.length) {
        return;
      }

      this.typeSentence(phrases[current++]).then(() => {
        this.timeouts.push(setTimeout(next, 100))
      });
    };

    if (phrases.length > 0) next();
  }

  render = () => <span> {this.state.text}<this.Cursor /> </span>;
}


import React from 'react';

import PillGroup from './PillGroup';
import Firebase from './Firebase';

import '../styles/Page.scss';

export default class ProjectsPage extends React.Component {

  state = {
    canv: [],
    templates: {}
  }

  componentWillMount() {

    Firebase.zayz.bindToState('pixelme', {
      context: this,
      state: 'templates',
    });

    const data = 'NBBBBBBBBBBBBBBNBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSBBBBBBBBBSSSSSSSSBBBBBBBSSSSSSSSSSBBBBBBSSSSSSSSSSBBBBBSSSSSSSSSSSSBBBBSSSSSSSSSSSSBBBBBSSSSSSSSSSBBBBBBSSSSSSSSSSBBBBBBBSSSSSSSSBBBBBBBBBSSSSSSBBBBBBBBBBBBSSBBBBBBBBBBBBCCSSCCBBBBBNBBBCCCCCCCCBBBN';

    for (let i = 0; i < data.length; i++)
    this.state.canv.push(data[i]);
  }

  generateGrid = (canv) => {
    let grid = [];
    let counter = 0;
    for (let elem of canv) {
      let name = 'PixelEmpty';

      switch (elem) {
        case 'B':
          name = 'PixelBackground';
          break;
        case 'C':
          name = 'PixelClothes';
          break;
        case 'S':
          name = 'PixelSkin';
          break;
      }

      grid.push(<div className={name} key={counter++}></div>);
    }
    return grid;
  };

  render() {
    let canv = this.state.canv;

    let grid = this.generateGrid(canv);

    return (
      <div>
        <div className='PageItem'>
          <div className='Grid'>{grid}</div>
        </div>
      </div>
    );
  }
}


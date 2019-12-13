import React, { Component }  from 'react';
import AvatarGenerator from 'react-avatar-generator';

class Avatar extends Component {
    constructor(props) {
      super(props);
      this.avatarGenerator = null;
    }

    componentDidMount() {
        this.avatarGenerator.randomize();
    }
    
    render() {
      return (
        <div>
          <AvatarGenerator ref={(elem) => { this.avatarGenerator = elem;}}
            colors={['#ff3d00', '#00c853', '#00b0ff', '#673ab7']}
            backgroundColor="#fff"
          />
        </div>
      );
    }
  }

  export default Avatar;
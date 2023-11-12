import React, {Component} from 'react';
import Ad from "./Ad";

class AdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAd: true
        };
    }

handleToggleClick = () => {
    this.setState(prevState => ({
        showAd: !prevState.showAd
    }));
}
render() {
    return (
        <div>
            {this.state.showAd && <Ad />}

            <button onClick={this.handleToggleClick}>
                {this.state.showAd ? 'Hide Ad' : 'Show Ad'}
            </button>
            <Ad showAd={this.state.showAd} />
        </div>
    )
}
}
    

export default AdPage;
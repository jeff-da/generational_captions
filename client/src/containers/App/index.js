import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Sidebar from "react-sidebar";
import {Home, NotFound} from '../'
import ImageUploader from 'react-images-upload';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: true,
      pictures: [],
      display: false
    };
    this.onDrop = this.onDrop.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    });
	}

  render() {
    return (
      <div className="app">
        <Sidebar
          sidebar={
            <div>
            <p></p>
            <img src="http://jeffda.com/generational_captions/icons/album.png" style={{width:"30px", marginLeft:"9px", marginTop:"20px"}}></img><br></br><p></p>
            <ImageUploader
                style={{ maxWidth: '500px', margin: "20px auto" }}
                withIcon={true}
                withLabel={false}
                withPreview={false}
                buttonText=''
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /><p></p>
            <img src="http://jeffda.com/generational_captions/icons/turn-off.png" style={{width:"30px", marginLeft:"9px"}}></img><br></br><p></p>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          docked={this.state.sidebarDocked}
          styles={{ sidebar: { background: "#393c45" } }}
        >
        </Sidebar>

        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App

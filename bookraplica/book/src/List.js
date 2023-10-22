import React  from 'react'
import "./List.css"
import { Menu } from 'semantic-ui-react'

class List extends React.Component
{

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      
  
      return (
        <div  className="list">
        <Menu secondary >
        <ul>
<li><a href="#" onClick={this.handleItemClick}>Categories</a></li>
<li><a href="#" onClick={this.handleItemClick}>99Store</a></li>
<li><a href="#" onClick={this.handleItemClick}>Newly Added Books</a></li>
<li><a href="#" onClick={this.handleItemClick}>Hindi Novels</a></li>
<li><a href="#" onClick={this.handleItemClick}>Graphic Comics</a></li>
<li><a href="#" onClick={this.handleItemClick}>Merchandise</a></li>
<li><a href="#" onClick={this.handleItemClick}>Lock The Box</a></li>
<li><a href="#" onClick={this.handleItemClick}>Book Bundles</a></li>
<li><a href="#" onClick={this.handleItemClick}>Literature and Fiction</a></li>
<li><a href="#" onClick={this.handleItemClick}>India Top Read</a></li>
</ul>
            </Menu>
            </div>
      )
    }
}

    export default List;









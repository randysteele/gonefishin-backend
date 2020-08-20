import React from 'react'
import {Link} from 'react-router-dom'
// we need access to this so we can use Link tags. 

const Navbar = (props) => {
    // creating the component and passing it props. 

    return (
        <div>
            
            <Link to='/destinations' style={{paddingRight: '10px'}}>Destinations    </Link>
            <Link to='/destinations/new'>Add Destination    </Link>
            // linking to these routes (all destinations and add destinations. 
            
        </div>
    )
}
export default Navbar

import React, { useState } from 'react'

export default function SearchComponent(props){
    const {userItems, setSearchedUsers, setIsDataReady} = props;
    const [searchQuery, setSearchQuery] = useState('');

    function handleSearch(e){
        // Instead of 'onKeyDown', use 'onChange' for real-time updates
        setSearchQuery(e.target.value);

        // Split the search query into terms
        const searchTerms = e.target.value.toLowerCase().split(' ');

        // Filter the employeeItems based on multiple search terms
        const filteredUsers = userItems.filter(user =>
            searchTerms.every(term =>
                user.firstName.toLowerCase().includes(term) ||
                user.lastName.toLowerCase().includes(term) ||
                user.email.toLowerCase().includes(term) ||
                user.phoneNumber.toLowerCase().includes(term)
            )
        );

        
        if(e.target.value === " "){
            setIsDataReady(false);
        }
        else{
            setIsDataReady(true);
        }
        // Update the searched employees
        setSearchedUsers(filteredUsers);
        console.log(filteredUsers);
    }

    const containerStyle = {
        maxHeight: '500px', // Change this value to your desired maximum height
        overflowY: 'auto',
        marginTop: '70px',
        marginBottom: '20px'
      };
    
    return(
        <div style={containerStyle}>
            <label htmlFor="search">Search:</label>
            {/* Use 'value' prop to bind the input to the state */}
            <input className='mx-2'
                type="text"
                id="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch} // Use 'onChange' for real-time updates
            />
        </div>
    )
}
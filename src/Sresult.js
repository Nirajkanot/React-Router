import React from 'react';


const Sresult = (props) => {
    const pic = `https://source.unsplash.com/400x300/?${props.name}`
    return (
        <>
          <div>
              <img src={pic} alt='search' />
          </div>
        </>
    );
}

export default Sresult;
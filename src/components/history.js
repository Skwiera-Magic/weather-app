import React, {useState} from "react";

function History () {
    return (
        <div className='flex flex-col'>
                {history.map(city => {
                  if (city.trim() === '') {
                    return null;
                  }
                  return (
                    <button
                      className='bg-green-300 hover:bg-green-500 rounded border border-black m-1 p-1'
                      key={city}
                      onClick={handleSearch}
                    >
                      {city}
                    </button>
                  );
                })}
              </div>
    )
}

export default History;
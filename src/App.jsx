import React, { useEffect, useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState("available");
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coin, setCoin] = useState(0);
  useEffect(() => {
    fetch("players.json")
      .then(res => res.json())
      .then(data => {
        setPlayers(data)
      })
  }, []);
  // fetch complete 

  const handlePageChange = (value) => {
    setCurrentPage(value)
  }

  const handleChooseCoin = () => {
    const newCoin = coin + 30000;
    setCoin(newCoin)
  }

  const handleChoose = (player) => {
    const newPlayers = [...selectedPlayers, player];
    // const newCoin = coin + 300000;
    const playerPrice = player.price;
    if (coin > playerPrice) {
      // setCoin(newCoin)

      setCoin(coin - Number(playerPrice))
      setSelectedPlayers(newPlayers);
    }
    else {
      alert("sorry")
    }
  }

  return (

    <div>

      {/* heading start  */}
      <header className='flex justify-between mt-2 items-center px-10'>

        <img className='w-20 h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rhdG4HH5INMkPluShvNNVZS2lN3k7ydb0g&s" alt="" />
        <div className='hidden md:block'>
          <div className='flex gap-6 '>
            <a href="">Home</a>
            <a href="">Fixture</a>
            <a href="">Tearms</a>
            <a href="">Schedules</a>
            <button className='border px-4 py-1 rounded flex gap-2 bg-gray-100 hover:bg-gray-500 hover:text-white'>
              <span>
                {coin}
              </span>
              <span>
                coin
              </span>
              <span className='text-yellow-500 '>
                <i className="fa-solid fa-coins"></i>
              </span>
            </button>
          </div>
        </div>
        <div className='lg:hidden block'>
          <button>Menu</button>
        </div>



      </header>
      {/* heading end  */}
      {/* header start  */}
      <section className='lg:px-10 px-4'>
        <div className='lg:px-10 px-0  py-10 bg-purple-600 border rounded-2xl'>
          <img className='w-64 h-48 mx-auto mb-4 rounded-2xl' src="https://r2.erweima.ai/imgcompressed/compressed_7526b8ee7f680e6e9b0adc6925a09922.webp" alt="" />
          <h1 className='text-center font-bold text-4xl text-white'>
            Assemble Your Ultimate Dream 11 BPL Cricket Team
          </h1>
          <p className='text-center text-white mt-4 mb-4'>
            Beyond Boundaries Beyond Limits
          </p>
          <div className='text-center'>
            <button onClick={handleChooseCoin} className='font-bold border px-4 py-1 bg-yellow-500 hover:bg-black hover:text-yellow-500 rounded-xl mb-10'>
              Claim Free Cradit
            </button>
          </div>
        </div>

      </section>
      {/* header end  */}
      {/* hit point star  */}
      <div className='flex justify-between flex-wrap px-10 my-12'>
        <h1 className='font-bold '>
          Available Players.
        </h1>


        <div className='flex  gap-4'>

          <button
            onClick={() => handlePageChange("available")}
            className={`border px-4 py-1 bg-green-400 hover:bg-black text-black hover:text-green-400 font-bold rounded-lg ${handlePageChange === "available" && 'bg-yellow-500'}`}>
            Available
          </button>

          <button
            onClick={() => handlePageChange('selected')}
            className={`border px-4 py-1 bg-black text-yellow-500 hover:bg-yellow-600 hover:text-black  font-bold rounded-lg`}>
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      <div>
        {
          currentPage === "available" ?
            <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:px-10 px-4'>
              {/* this is available */}
              {
                players?.map(player => {
                  return (
                    <div key={player.id} className=' px-4 py-4 bg-black text-white   border rounded-lg mb-8 shadow-lg'>
                      <img className='mb-6 w-full mx-auto' src={player.image} alt="" />
                      <h3>Name:{player.name}</h3>
                      <h3>Country:{player.country}</h3>
                      <h3>{player.role}</h3>
                      <h3>Batting Style:{player.battingStyle}</h3>
                      <h3>Bowling Style:{player.bowlingStyle}</h3>
                      <div className='flex justify-between mt-2 '>
                        <h3>Price:${player.price}</h3>
                        <button onClick={() => handleChoose(player)} className='border px-2 py-1 text-white bg-blue-600 font-bold rounded-lg hover:text-blue-600 hover:bg-white '>
                          Choose
                        </button>
                      </div>
                    </div>

                  )
                })


              }
            </div>
            :
            <div>
              {/* selected page */}
              <div className='px-8 grid lg:grid-cols-4 grid-cols-1 gap-4 mb-2'>
                {
                  selectedPlayers?.map(player => {

                    return (
                      <div key={player.id} className=' border border-gray-400 px-4 py-4 rounded-lg bg-black text-white mt-2'>
                        <p>Name: {player?.name}</p>
                        <p>Country:{player?.country}</p>
                        <p>Price:{player?.price}</p>
                        {/* <button className='flex gap-2 mt-4 mx-auto items-center px-3 py-1 rounded-lg bg-red-700 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-red-700' >
                          <p> Rejected </p>
                          <img className='w-5 h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRr4ukiSS8laR-fot85JE6dBcz-61RqgkWQ&s" alt="" />
                        </button> */}
                      </div>
                    )
                  })
                }

              </div>
            </div>
        }
      </div>
      {/* hit point end  */}
      {/* midle footer start  */}
      <div className='bg-black '>
        <div className=' lg:px-10 px-4 py-4 rounded-xl '>
          <div className='px-4 lg:px-10 bg-gray-200 py-4 rounded-xl mb-2 mt-2'>
            <div className='bg-sky-50 lg:px-28 px-4 lg:py-12 py-4 mt-2 rounded-xl '>
              <div className='lg:mt-16 mt-3'>
                <h1 className='text-center font-bold text-4xl'>
                  Subscribe to our Newsletters
                </h1>
                <p className='text-center mt-6 mb-6'>
                  Get  the latest updates and news right in your inbox.
                </p>
                <div className='w-full flex gap-2 mb-12 '>
                  <input className='w-full rounded-lg' type="text" placeholder="Enter your email..............@" />

                  <button className='border px-4 py-1 rounded-lg bg-yellow-500 hover:bg-black hover:text-yellow-500 font-bold'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* midle footer end  */}
      {/* final footer start  */}
      {/* image logo start  */}

      <div className='bg-black'>
        <img className='w-20 h-20 mx-auto  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rhdG4HH5INMkPluShvNNVZS2lN3k7ydb0g&s" alt="" />
      </div>

      {/* image logo end  */}
      <div className='bg-black'>
        {/* all site start  */}

        <div className='mb-12 '>
          <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  px-10 border-b border-b-red-500 mb-4'>
            {/* first site  */}
            <div className='mb-6'>
              <h1 className='text-white font-bold text-lg mb-6'>
                About Us
              </h1>
              <p className='text-white'>
                We are a passionate team dedicated to <br /> providing the best  services  our <br /> customers.
              </p>
            </div>
            {/* first site end  */}
            {/* second site  */}
            <div className='mb-6'>
              <h1 className='text-white font-bold text-lg mb-6'>
                Quick Link
              </h1>
              <ul>
                <li className='text-white mb-2'>
                  <a href=""> Home</a>
                </li>
                <li className='text-white mb-2'>
                  <a href="">Services</a>
                </li>
                <li className='text-white mb-2'>
                  <a href="">About</a>
                </li>
                <li className='text-white'>
                  <a href=""> Contact</a>
                </li>
              </ul>
            </div>
            {/* second site end  */}
            {/* third site  */}
            <div className='mb-6'>
              <h1 className='text-white font-bold text-lg mb-6'>
                Subscribe
              </h1>
              <p className='text-white mb-4 mt-2'>
                Subscribe to our newsletter for the latest <br /> updates.
              </p>
              <div className='flex gap-1 w-full'>
                <input className='py-1 rounded w-full ' type="text" placeholder='Enter your email.........@' />
                <button className='bg-yellow-500 hover:text-blue-600 hover:bg-white font-bold px-4 py-1 rounded'>
                  Subscribe
                </button>
              </div>
            </div>
            {/* third site end  */}
          </div>
        </div>
        {/* all site end  */}
        <div className='text-white  mt-2 text-center py-6'>
          @ 2025 YourCompany.All rights reserved
        </div>
      </div>
      {/* final footer end  */}
    </div >
  );
};

export default App;
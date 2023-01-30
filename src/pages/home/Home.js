import React from 'react'
import './home.css'
import Player from './Player';


function Home(){

  return (
    <div className='home'>
      <div className='home-section' >

        <div className='player-section'>
          <Player />
        </div>

        <div className='event-section'>
            <h3 className='intro'>Live Performance</h3>
            <table>
              <tbody>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
                <tr>
                  <td>Dipesh & Rupa's Wedding</td>
                  <td>8 June 2022</td>
                </tr>
                <tr>
                  <td>Deusi Tihar Program</td>
                  <td>25 October 2022</td>
                </tr>
              </tbody>
            </table> 
            <h3>More to come...</h3>
          </div>
      </div>
    </div>
  )
}

export default Home;

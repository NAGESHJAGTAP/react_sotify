import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
    <div>
        <div className="spotify">
         {/* <div className="container">
            <div><img className="logo" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Spotify%20logo.png?raw=true" alt="" /></div>
            <div ><img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Home.png?raw=true" alt="" /><p className="text"> HOme</p></div>
            <div ><img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Search.png?raw=true" alt="" /><p className="text">Search</p></div>
            <div ><img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Your%20library.png?raw=true" alt="" /><p className="text">Your Library</p></div>
                       <div ><img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Create.png?raw=true" alt="" /><p className="text"> Create Playlist</p></div>
            <div ><img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Liked.png?raw=true" alt="" /><p className="text">Liked songs </p></div>
            <div ><img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/your%20episodes.png?raw=true" alt="" /><p className="text">Your Epiosodes </p></div><br />

            <div><p className="text1">FAV</p></div>
            <div><p className="text1">Daily Mix1</p></div>
            <div><p className="text1">Discover Weekly</p></div>
            <div><p className="text1">Malayalam</p></div>
            <div><p className="text1">Dance/ElectronixMix</p></div>
            <div><p className="text1">EDM PLayer</p></div>

            <div ><img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt="" /><p className="text">Install Apps</p></div>

             <div className="homearound"></div>
             </div>  */}


             <div className="container1">
             <div ><img  className="toparrow" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt="" /></div>
             <div ><img  className="toparrow1" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/User.png?raw=true" alt="" /></div>

             <p><h1 className="good">Good Morning</h1></p>
             </div>
            <div className="container2">
                 <div className="l">
                        <div className="l">  <div><img className="liked1" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Liked.png?raw=true" /><p className="liked2">Liked Songs</p></div></div>
                       <div className="l"> <div><img className="liked1" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image4.png?raw=true" /><p className="liked2">Neffex Playlist</p></div></div>
                       <div className="l"> <div><img className="liked1" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image3.png?raw=true" /><p className="liked2">K/DA</p></div></div>
                       <div className="l">  <div><img className="liked1" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image1.png?raw=true" /><p className="liked2">Liked Songs</p></div></div>
                       <div className="l"><div><img className="liked1"  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image2.png?raw=true" /><p className="liked2">Dance/Electronic Mix</p></div></div>
                </div>
            </div>
            <div><h1 className="h">Shows You might like </h1></div>
            <h4>See All</h4>
            <div className="png"> 
               
    <div className="jee" ><img className="border"  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image9.png?raw=true" />
        <p className="description">Weekly Motivation...</p>
    </div>
    <div className="jee" ><img className="border" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image8.png?raw=true" />
        <p className="description">MEDITATION SELF</p>
    </div>
    <div className="jee" ><img className="border" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image7.png?raw=true" />
        <p className="description">Words beyound act...</p>
    </div>
    <div className="jee"><img  className="border" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image6.png?raw=true" />
        <p className="description">The Alexa Show</p>
    </div>
    <div className="jee" ><img className="border" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image5.png?raw=true" />
        <p className="description">The Stories of Ma...</p>
    </div>
    <div className="jee" ><img className="border" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image10.png?raw=true" />
        <p className="description">Motivation Daily b...</p>
    </div>
          </div>
          <div className="g">
            <div className="S1"><img  className="kad"  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/image11.png?raw=true" /><p className="T1"> Dreaming On </p><br /><p className="z">NEEFEX</p> <img className="I" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/bx_bxs-heart.png?raw=true" alt="" /><img className="O" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true" /><img className="p" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/10.spotify-clone/assets/Right%20options.png?raw=true" alt="" /></div>
          </div>
        </div>
        </div>
    </>
  )
};

export default App;


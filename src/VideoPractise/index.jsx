// import React, { useEffect, useRef } from 'react';
// import Vimeo from '@vimeo/player';
// import { Height } from '@mui/icons-material';
// import { height } from '@mui/system';
// import { MuiBox } from '../Components/Mui-Component';

// const VimeoPlayer = ({ videoId,width,height,handleClose}) => {
//   const playerRef = useRef(null);
 

//   useEffect(() => {
//     // Initialize the Vimeo Player
//     const player = new Vimeo(playerRef.current, {
//       id: videoId,
//       autoplay: true, // Autoplay the video
//     // fullscreen: true, 
//     width:width,
//     height:height
//     });
 
//     // Example: Listen to play event
//     // player.on('play', () => {
//     //   console.log('Video is playing');
//     // });
//     player.on('ended', () => {
//       handleClose();
//       console.log('end')

//     });

//     player.setVolume(0);

  
    
//     return () => {
//       // Clean up the player when the component unmounts
//       player.destroy().then(() => {
//         console.log('Player destroyed');
//       });
//     };
//   }, [videoId,height,width,handleClose]);
// //   console.log('player ref',playerRef)

//   return <div id='id' ref={playerRef} />;
// };

// export default VimeoPlayer;
import React, { useEffect, useRef } from 'react';
import Vimeo from '@vimeo/player';

const VimeoPlayer = ({ videoId, handleClose }) => {
    const playerRef = useRef(null);

    useEffect(() => {
        const player = new Vimeo(playerRef.current, {
            id: videoId,
            autoplay: true, // Autoplay the video
            width:'1350px',
            height:'560px'
        });

        player.on('play', () => {
            console.log('Video is playing');
        });

        player.on('ended', () => {
          console.log('end')
            handleClose();
        });

        player.setVolume(0);

        return () => {
            player.destroy().then(() => {
                console.log('Player destroyed');
            });
        };
    }, [videoId]);

    return <div ref={playerRef} />;
};

export default VimeoPlayer;

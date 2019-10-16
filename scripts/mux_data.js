// Record the player init time
var playerInitTime = Date.now();
const DEV_KEY = 'ta6a2cbsbsuln277j8f951blf';

// EITHER initialize Mux Data monitoring like this
videojs('my-player', {
  plugins: {
    mux: {
      debug: true,
      data: {
        env_key: DEV_KEY, // required

        // Metadata
        player_name: 'Chiitan', // ex: 'My Main Player'
        player_init_time: playerInitTime // ex: 1451606400000

        // ... and other metadata
      }
    }
  }
});


// OR call the mux function on the player instance
// var player = videojs('my-player');
// player.mux({ 
//   debug: false,
//   data: { ... }
// });
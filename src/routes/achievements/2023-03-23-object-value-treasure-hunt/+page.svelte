<script>
  import {queenArianna} from './disney.js';

// Log the following values to the console

// Example: Queen Arianna's name
const queenName = queenArianna.name;
  console.log(queenArianna.name);

// 1. The ID of Queen Arianna (308)
const queenID = queenArianna._id;
  console.log(queenArianna._id);

// 2. An image of Queen Arianna
const imageUrl = queenArianna.imageUrl;
  console.log(queenArianna.imageUrl);

// 3. Queen Arianna's first film (Tangled)
const queenFirstFilm = queenArianna.films[0];
  console.log(queenArianna.films[0]);

// 4. Queen Arianna's last TV show (Tangled: The Series)
const queenLastTvShow = queenArianna.tvShows[1];
  console.log(queenArianna.tvShows[1]);

// 5. Queen Arianna's second video game (Hidden Worlds)
const queenSecondVideoGame = queenArianna.videoGames[1];
  console.log(queenArianna.videoGames[1]);

</script>

<div class="container">
  <div class="card">
    <img src={imageUrl} alt={queenName + ' from Disney'}>
    <div class="card-content">
      <h2>{queenName}</h2>
      <p>ID: {queenID}</p>
      <p>First Film: {queenFirstFilm}</p>
      <p>Last TV Show: {queenLastTvShow}</p>
      <p>Second Video Game: {queenSecondVideoGame}</p>
      <a href={queenArianna.url}>More Info</a>
    </div>
  </div>
</div>


<style>
  .container {
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
   flex-grow: 1;
   margin: 2rem;
 }
 
   .card {
     display: flex;
     flex-direction: column;
     width: 300px;
     height: 750px;
     background-color: #383838;
     border-radius: 8px;
     overflow: hidden;
     box-shadow: 0px 1px 1px rgba(0,0,0,0.1), 
              0px 2px 2px rgba(0,0,0,0.1), 
              0px 4px 4px rgba(0,0,0,0.1), 
              0px 8px 8px rgba(0,0,0,0.1);;
   }

   .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
 
   img {
     width: 100%;
     height: 350px;
     object-fit: cover;
   }
   
   .card-content {
     padding: 20px;
   }
   
   h2 {
     font-size: 1.5rem;
     margin-bottom: 10px;
     color: #FFC812;
   }
   
   p {
     font-size: 1rem;
     margin-bottom: 20px;
     color: #FFC812;
   }
   
   a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #FFC812;
    background-color: #0077cc;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    margin: 0.5rem;
  }
   
   a:hover {
     background-color: #005ea6;
    }
 
 </style> 

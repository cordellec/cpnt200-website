<div class="container">
  <div class="card">
    <img src="/assignment.png" alt="Card Image">
    <div class="card-content">
      <h2>262 ASSIGNMENT 7</h2>
      <a href="assignments/cpnt262-assignment7">Single Clickable Card</a>
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
       height: 400px;
       background-color: #383838;
       box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
       border-radius: 8px;
       overflow: hidden;
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
       height: 200px;
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
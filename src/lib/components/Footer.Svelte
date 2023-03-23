<script>
  let currentYear = new Date().getFullYear();
</script>

<style>
  .footer {
    background-color: #000000;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
                0px 2px 2px rgba(0,0,0,0.1),
                0px 4px 4px rgba(0,0,0,0.1),
                0px 8px 8px rgba(0,0,0,0.1);
    width: 100%;
  }
  .footer-text {
    color: #FFC812;
    font-size: 0.9rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
</style>

<footer class="footer">
  <p class="footer-text">&copy; {currentYear} All rights reserved.</p>
</footer>
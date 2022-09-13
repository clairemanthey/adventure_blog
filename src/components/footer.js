<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
<!--    <link rel="stylesheet" type="text/css" href="./styles.css" /> -->
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <script src="https://kit.fontawesome.com/13e90f422c.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Raleway:700&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,400&amp;display=swap" rel="stylesheet">   
    <title>Claire Makes a Portfolio</title>
    <script src="index.js" defer></script>
  </head>
    
  <body>
      
    <header class="primary-header">
      <div class="nav-display">
        <a href="index.html"><img src="images/icon_white.png" alt="home icon" class="icon" /></a>
      </div>
       <nav>
        <ul id="primary-navigation" data-visible="false" class="primary-navigation">
          <li class="nav-list-item"><a href="index.html"><i class="fa-solid fa-house nav-icon"></i><span class="nav-link">Home</span></a></li> 
          <li class="nav-list-item"><a href="#project"><i class="fa-solid fa-clipboard-list nav-icon"></i><span class="nav-link">Projects</span></a></li>
          <li class="nav-list-item"><a href="#contact"><i class="fa-regular fa-address-card nav-icon"></i><span class="nav-link">Contact</span></a></li>
          <li class="nav-list-item"><a href="resume.html"><i class="fa-solid fa-file-code nav-icon"></i><span class="nav-link">Resume</span></a></li>
        </ul>
      </nav>
    </header>

    
    <section id="welcome">
      <h1>Hey I'm Claire</h1>
      <p>a web designer</p>
    </section>

    <section class="skills">
      <h2 class="skills-main-title">Skills</h2>
      <div class="skills-container">
        <article class="skills-item">
          <h3 class="skills-heading center">Design + Development</h3>
          <p class="skills-para">Creating aesthetically pleasing websites to optimize user engagement, making information easy to find and sites simple to navigate. Clean, uncluttered design to make the site accessible and easy for all to use with design supporting functionality.</p>
        </article>
        <article class="skills-item">
          <h3 class="skills-heading center">Functionality</h3>
          <p class="skills-para">Adding JS functionality to sites to enhance user experience. Adding features to sites such as with simplicity to enhance user experience. Striking a balance between CSS and Javascript when adding design elements.</p>
        </article>
        <article class="skills-item">
          <h3 class="skills-heading center">Accessibility</h3>
          <p class="skills-para"w>As some with a visual impairment and dyslexia making the internet a more accessible place for those with disabilities is a passion of mine. I’ve come to enjoy using universal design to make website for people of all different abilities</p>
        </article>
      </div>
    </section>

    <section id="project">
      <h2 class="projects-main-title">Some of My Projects</h2>
      <div class="projects-grid">
        <div class="card">
          <a href="https://anna-atkins-biography.github.io/index.html" target="_blank">
          <img src="images/artist-biography-01.png" alt="Artist Biography" class="project-image">
          </a>          
          <div class="container">
            <a href="https://anna-atkins-biography.github.io/index.html" target="_blank"><h3 class="project-title">Artist Biography</h3></a>
            <p class="description"><a href="project_details/artists_bio.html">Description</a></p>
          </div>
        </div>  

        <div class="card">
          <a href="https://dashing-nasturtium-25bd0e.netlify.app/" target="_blank" class="project-tile">
          <img src="images/movie-database-01.png" alt="Movie Database" class="project-image">
          </a>
          <div class="container">
          <a href="https://dashing-nasturtium-25bd0e.netlify.app/" target="_blank" class="project-tile"><h3 class="project-title">Movie Database</h3></a>
            <p class="description"><a href="project_details/movie.html">Description</a></p>
          </div>
        </div>

        <div class="card">
          <a href="https://codepen.io/aglaea/full/popOyav/" target="_blank" class="project-tile">
          <img src="images/cards-01.png" alt="Cards" class="project-image">
          </a>
          <div class="container">
          <a href="https://codepen.io/aglaea/full/popOyav/" target="_blank" class="project-tile"><h3 class="project-title">Cards</h3></a>
            <p class="description"><a href="project_details/cards.html">Description</a></p>
          </div>
        </div>      
      
        <div class="card">
          <a href="https://scrimba.com/scrim/coe214849b4c162467f1423f7" target="_blank">
          <img src="images/travel_blog-01.png" alt="Travel Blog" class="project-image">
          </a>
          <div class="container">
            <a href="https://scrimba.com/scrim/coe214849b4c162467f1423f7" target="_blank"><h3 class="project-title">Travel Blog</h3></a>
            <p class="description"><a href="project_details/travel-blog.html">Description</a></p>
          </div>
        </div>  

        <div class="card">
          <a href="https://park-bench.github.io/" target="_blank">
          <img src="images/parkbench-02.png" alt="ParkBench project" class="project-image">
          </a>
          <div class="container">
          <a href="https://park-bench.github.io/" target="_blank"><h3 class="project-title">ParkBench</h3></a>
            <p class="description"><a href="project_details/parkbench.html">Description</a></p>
          </div>
        </div>   

        <div class="card">
          <a href="https://scrimba.com/scrim/ck6pEwtM" target="_blank">
          <img src="images/webdev-challenges.png" alt="Weekly WebDev project" class="project-image">
          </a>
          <div class="container">
          <a href="https://scrimba.com/scrim/ck6pEwtM" target="_blank"><h3 class="project-title">Weekly WebDev Challenges</h3></a>
          <p class="description"><a href="project_details/weekly_webdev.html">Description</a></p>
          </div>
        </div>      

      </div>


      <a href="more_projects.html" class="btn btn-projects">See More... <i class="fas fa-chevron-right"></i></a>
    </section>

    <section class="contact" id="contact">
      <h2 class="heading-two">Let's work together...</h2>
      <p>How do you take your coffee?</p>
      <div class="contact-links">
        <div class="profile-link">
          <a href="resume.html">
            <i class="fa-solid fa-file-code"></i>
            <p>Resume</p>
          </a>
        </div>
        <div class="profile-link">
          <a href="https://github.com/clairemanthey" target="_blank">
            <i class="fa-brands fa-github"></i>
            <p>Github</p>
          </a>
        </div>
        <div class="profile-link">
          <a href="https://twitter.com/claire_makes" target="_blank">
            <i class="fa-brands fa-twitter"></i>
            <p>Twitter</p>
          </a>
        </div>
        <div class="profile-link">
          <a href="https://codepen.io/aglaea" target="_blank">
            <i class="fa-brands fa-codepen"></i>
            <p>codepen</p>
          </a>
        </div>
        <div class="profile-link">
          <a href="https://www.linkedin.com/in/claire-manthey-4389a622/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            <p>LinkedIn</p>
          </a>
        </div>
        <div class="profile-link">
          <a href="https://webdesign-adventures.netlify.app/" target="_blank">
            <i class="fa-brands fa-blogger"></i>
            <p>Blog</p>
          </a>
        </div>
        <div class="profile-link">
          <a href="mailto:clairemakes@gmail.com" target="_blank">
            <i class="fa-solid fa-at"></i>
          </a>
          <div class="email-container">
            <p id="email" class="email"></p>
            <button id="copy" class="copy-btn"><i class="far fa-copy fa-xl"></i></button>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p></p>
      <p>© Claire Manthey </p>
    </footer>
  </body>
</html>

<!--  -->

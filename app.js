// Sample JSON data for featured jobs
const featuredJobs = [
    {
      "id": 1,
      "title": "Full Stack Developer",
      "company": "Acme Corporation",
      "location": "San Francisco, CA",
      "description": "Acme Corporation is seeking a full stack developer with experience in React and Node.js. The ideal candidate will have a strong background in web development and be able to work independently as well as part of a team."
    },
    {
      "id": 2,
      "title": "Front End Developer",
      "company": "XYZ Company",
      "location": "New York, NY",
      "description": "XYZ Company is seeking a front end developer with experience in HTML, CSS, and JavaScript. The ideal candidate will have a strong portfolio of web development projects and be able to work collaboratively with designers and back-end developers."
    },
    {
      "id": 3,
      "title": "Backend Engineer",
      "company": "ABC Industries",
      "location": "Seattle, WA",
      "description": "ABC Industries is seeking a backend engineer with experience in Python and database design. The ideal candidate will have a strong understanding of distributed systems and be able to design and implement scalable solutions."
    }
  ];
  
  // Function to generate HTML for a single job listing
  function generateJobListingHTML(job) {
    return `
      <li>
        <h3>${job.title}</h3>
        <p>${job.company} - ${job.location}</p>
        <p>${job.description}</p>
      </li>
    `;
  }
  
  // Function to generate HTML for all featured job listings
  function generateFeaturedJobsHTML(jobs) {
    const jobListingsHTML = jobs.map(job => generateJobListingHTML(job)).join("");
    return `
      <section id="featured-jobs">
        <h2>Featured Jobs</h2>
        <form>
          <label for="keywords">Keywords:</label>
          <input type="text" id="keywords" name="keywords">
          <label for="location">Location:</label>
          <input type="text" id="location" name="location">
          <button type="submit">Filter</button>
        </form>
        <ul>
          ${jobListingsHTML}
        </ul>
      </section>
    `;
  }
  
  // Function to filter jobs based on keywords and location
  function filterJobs(jobs, keywords, location) {
    return jobs.filter(job => {
      const title = job.title.toLowerCase();
      const company = job.company.toLowerCase();
      const jobKeywords = keywords.toLowerCase().split(" ");
      const jobLocation = location.toLowerCase();
      return jobKeywords.every(keyword => title.includes(keyword) || company.includes(keyword)) && job.location.toLowerCase().includes(jobLocation);
    });
  }
  
  // Get the parent element to insert the generated HTML
  const parentElement = document.getElementById("main");
  
  // Generate the HTML for the featured job listings and insert it into the parent element
  parentElement.insertAdjacentHTML("beforeend", generateFeaturedJobsHTML(featuredJobs));
  
  // Get the form and input elements
  const form = document.querySelector("#featured-jobs form");
  const keywordsInput = document.querySelector("#keywords");
  const locationInput = document.querySelector("#location");
  
  // Add event listener to the form for submit event
  form.addEventListener("submit", event => {
    event.preventDefault();
    const filteredJobs = filterJobs(featuredJobs, keywordsInput.value, locationInput.value);
    const jobListingsHTML = filteredJobs.map(job => generate
  
//list of my projects data in array to creat the projects with JS


/* Playrent */
const projects = [
  {
    id: "playrent",
    title: "Playrent",
    description: "An app that allows musicians to rent instruments instead of buying them.",
    category: "UX/UI",
    technologies: ["Figma", "UI Design"],
    image: "Image/playrent.png",
    link: "https://tarekdesign.se/playrent"
  },
/* An Honest Interfaces */
  {
    id: "honest-interfaces",
    title: "An Honest Interfaces",
    description: "A critical design project that shows the hidden ethical and environmental impact of driving.",
    category: "Critical Design",
    technologies: ["Critical Design", "Illustration"],
    image: "Image/polestar_ui.gif",
    link: "honest-interfaces.html"
  },
  /* Touch & Discover */
  {
  id: "touch-discover",
  title: "Touch & Discover",
  description: "An interactive museum console that lets visitors explore the story of Ingemar Johansson.",
  category: "UX/UI",
  technologies: ["Interaction Design", "UI"],
  image: "Image/touch_and_discover.png",
  link: "https://tarekdesign.se/touch-and-discover"
},
/* Skräphjältarna */
{
  id: "skraphjaltarna",
  title: "Skräphjältarna",
  description: "An educational children’s book that teaches recycling in a fun and visual way.",
  category: "Illustration",
  technologies: ["Illustration", "Book Design"],
  image: "Image/skraphjaltarna.png",
  link: "https://tarekalfutih.se/skraphjaltarna"
},
/* Game Background */
{
  id: "game-background",
  title: "Game Background",
  description: "A digital game background illustration created from scratch for a client.",
  category: "Illustration",
  technologies: ["Photoshop", "Digital Painting"],
  image: "image/background.jpg",
  link: "https://tarekalfutih.se/backgrounds"
},
/* Portfolio */
{
  id: "portfolio",
  title: "Portfolio",
  description: "My personal portfolio built with HTML, CSS, and JavaScript.",
  category: "Web Development",
  technologies: ["HTML", "CSS", "JavaScript"],
  image: "image/webDesign.jpg",
  link: "https://tarekdesign.se"
}
];


// create a set of categories
//A Set is like a list that doesn’t allow duplicates.
const categorySet = new Set();


// Fill the Set using a loop. That is mean for each project: take project.category, put it into the set
// and duplicates are automatically ignored.
projects.forEach(function (project) {
  categorySet.add(project.category);
});

// Convert the Set back into. an array
const categories = Array.from(categorySet);

//Add "All Projects" at the begining
categories.unshift("All Projects");

// get the container where projects will be shown
const projectsContainer = document.getElementById("projects_container");


// get the conter element from html
const projectsCounter = document.getElementById("projectsCounter");

// create cards for the projects and each card includes a title and description
function renderProjects(list) {
  // clear old projects before showing new ones
  projectsContainer.innerHTML = "";

  // update the counter text
  projectsCounter.textContent = `Showing ${list.length} of ${projects.length} projects`;

  // loop through the projects list
  list.forEach(function (project) {
    // create a card for one project
    const card = document.createElement("div");

    //creat  class for the the card
    card.classList.add("project-card");

    // create an image box for the project
    const imageBox = document.createElement("div");
    imageBox.style.backgroundImage = `url("${project.image}")`;
    // creat class for the image
    imageBox.classList.add("project-image");

    // create project title
    const title = document.createElement("h3");
    title.textContent = project.title;
    title.classList.add("title");
    

    // show project category
    const categoryText = document.createElement("p");
    categoryText.textContent = project.category;
    categoryText.classList.add("project-category");

    // create project description
    const description = document.createElement("p");
    description.textContent = project.description;

    // create link to the project
    const link = document.createElement("a");
    link.textContent = "View project";
    link.href = project.link;
    if (project.link.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    link.classList.add("project-link");

    // put image, title and description inside the card
    card.appendChild(imageBox);
    card.appendChild(title);
    card.appendChild(categoryText);
    card.appendChild(description);
    card.appendChild(link);

    // add the card to the page
    projectsContainer.appendChild(card);
  });
}



// Show all projects once
renderProjects(projects);




// Select the filter bar ID in html file
const filterBar = document.getElementById("filterBar");

// clear filter bar so buttons are not duplicated
filterBar.innerHTML = "";

// create a button for each category
categories.forEach(function (category) {
  const btn = document.createElement("button");

  // show the category name on the button
  btn.textContent = category;

  // store the category name inside the button
  btn.dataset.category = category;

  //Add a class to every button
  btn.classList.add("filter-btn");

  //Make "All Projects" active by default
  if (category === "All Projects") {
    btn.classList.add("active");
  }

  // when user clicks the button
  btn.addEventListener("click", function () {
    const selectedCategory = btn.dataset.category;

    // On click : remove active from all, then add to clicked
    document.querySelectorAll(".filter-btn").forEach(function (button) {
    button.classList.remove("active");
    });
    btn.classList.add("active");
    // if user chooses All Projects, show everything
    if (selectedCategory === "All Projects") {
      renderProjects(projects);
    } 
    // otherwise, show only projects that match the category
    else {
      const filteredProjects = projects.filter(function (project) {
        return project.category === selectedCategory;
      });

      renderProjects(filteredProjects);
    }
  });

  // add the button to the filter bar
  filterBar.appendChild(btn);
});

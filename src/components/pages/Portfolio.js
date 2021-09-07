import React from "react";

const Portfolio = () => {
  const sites = [
    {
      id: 0,
      name: "Dev-Me-Up",
      image: require("../../assets/images/siteImgs/devmeup.PNG").default,
      link: "https://mysterious-temple-90706.herokuapp.com/",
      GhLink: "https://github.com/NathanaelWhite/Dev-it-to-You"
    },
    {
      id: 1,
      name: "Jot it",
      image: require('../../assets/images/siteImgs/jot-it.PNG').default,
      link: "https://jotitgood.herokuapp.com/",
      GhLink: "https://github.com/NathanaelWhite/Jot-It"
    },
    {
      id: 2,
      name: "Food Festival",
      image: require('../../assets/images/siteImgs/food-festival.PNG').default,
      link: "https://nathanaelwhite.github.io/food-festival/",
      GhLink: "https://github.com/NathanaelWhite/food-festival"
    },
    {
      id: 3,
      name: "Note-taker",
      image: require("../../assets/images/siteImgs/note-taker.PNG").default,
      link: "https://challenge-note-taker.herokuapp.com/",
      GhLink: "https://github.com/NathanaelWhite/Challenge-Note-Taker"
    },
    {
      id: 4,
      name: "Photo-port",
      image: require("../../assets/images/siteImgs/photo-port.PNG").default,
      link: "https://nathanaelwhite.github.io/photo-port/",
      GhLink: "https://github.com/NathanaelWhite/photo-port"
    },
    {
      id: 5,
      name: "Pizza-hunt",
      image: require("../../assets/images/siteImgs/pizza-hunt.PNG").default,
      link: "https://nameless-forest-20765.herokuapp.com/",
      GhLink: "https://github.com/NathanaelWhite/pizza-hunt"
    },
    {
      id: 6,
      name: "Tech-blog",
      image: require("../../assets/images/siteImgs/tech-blog.PNG").default,
      link: "https://salty-mesa-11111.herokuapp.com/",
      GhLink: "https://github.com/NathanaelWhite/tech-blog-mvc"
    },
  ];
  return (
    <div className="my-work">
      <h1 className="my-5">My work</h1>
      {sites.map((site) => (
        <li className="container" key={site.id}>
          <h3>{site.name}</h3>
          <p>{site.GhLink}</p>
          <p>
            {" "}
            <a href={site.link}>
              <img className="img-thumbnail" src={site.image} alt={site.name} />
            </a>
          </p>
        </li>
      ))}
    </div>
  );
};

export default Portfolio;

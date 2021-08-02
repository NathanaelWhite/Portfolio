import React from "react";

const Portfolio = () => {
  const sites = [
    {
      id: 0,
      name: "Jot it",
      image: require('../../assets/images/siteImgs/0.png').default,
      link: "https://jotitgood.herokuapp.com/",
    },
    {
      id: 1,
      name: "NBA Alley-oop",
      image: require('../../assets/images/siteImgs/1.png').default,
      link: "https://sadractijerina.github.io/NBA-Alley-Oop/",
    },
    {
      id: 3,
      name: "Run Buddy",
      image: require('../../assets/images/siteImgs/2.jpg').default,
      link: "https://nathanaelwhite.github.io/run-buddy/",
    },
  ];
  return (
    <div>
      <h1>My work</h1>
      {sites.map((site) => (
        <li className="site" key={site.id}>
          <h3>{site.name}</h3>
          <p>
            {" "}
            <a href={site.link}>
              <img src={site.image} alt={site.name} />
            </a>
          </p>
        </li>
      ))}
    </div>
  );
};

export default Portfolio;

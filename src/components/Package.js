import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/Nainital_metro.jpeg";
import imgCard2 from "../img/ranikhet.jpeg";
import imgCard3 from "../img/pithoragarh.jpeg";
import imgCard4 from "../img/Harsil.jpeg";
import imgCard5 from "../img/rishikesh.jpeg";
import imgCard6 from "../img/auli.jpeg";
import imgCard7 from "../img/7Xnua7BM_400x400.jpeg";
import imgCard8 from "../img/pablo.jpeg";
import imgCard9 from "../img/belli.jpeg";
import imgBarobaybay from "../img/pindari.jpeg";

const tours = [
  {
    id: 1,
    category: ["resort", ],
    img: imgCard1,
    alt: "blah blah",
    title: "Nainital",
    subtitle: "The Lake City"
  },
  {
    id: 2,
    category: [ "mountain"],
    img: imgCard2,
    alt: "blah blah",
    title: "Ranikhet",
    subtitle: "The Queen's Meadow"
  },
  {
    id: 3,
    category: ["resort"],
    img: imgCard3,
    alt: "blah blah",
    title: "Pithoragarh ",
    subtitle: "City of Paradise"
  },
  {
    id: 4,
    category: ["climbing", "mountain","Treking"],
    img: imgCard4,
    alt: "blah blah",
    title: "Harshil Valley",
    subtitle: "Valley of Flowers"
  },
  {
    id: 5,
    category: ["camping"],
    img: imgCard5,
    alt: "blah blah",
    title: "Rishikesh ",
    subtitle: "Yoga Capital of the World"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Auli",
    subtitle: "Snow Skiing Destination"
  },
  {
    id: 7,
    category: ["climbing","tour guide"],
    img: imgCard7,
    alt: "blah blah",
    title: "Piyush Kumar",
    subtitle: "One year exp in Tourism"
  },
  {
    id: 8,
    category: ["beach", "resort","tour guide"],
    img: imgCard8,
    alt: "blah blah",
    title: "Ravi Yadav",
    subtitle: "4 year exp in Tourism"
  },
  {
    id: 9,
    category: ["beach", "resort","tour guide"],
    img: imgCard9,
    alt: "blah blah",
    title: "Madhur Pandey",
    subtitle: "2 year exp in Tourism"
  },
  {
    id: 10,
    category: ["camping", "beach","Treking"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "Pindari Glacier Trek",
    subtitle: "Adventure and More "
  }
];

const itemCategories = [
  "all",
  "tour guide",
  "mountain",
  "Treking",
  "camping",
  
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;

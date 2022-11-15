import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
// import tours from "../components/Package";
import imgCard1 from "../img/auli.jpeg";
import imgCard2 from "../img/ranikhet.jpeg";
import imgCard3 from "../img/Harsil.jpeg";
import imgCard4 from "../img/pindari.jpeg";

const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Uttrakhand Tourism</h1>
        <h4>Travel | Guide | Camps</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              Uttarakhand, a state in northern India crossed by the Himalayas, is known for its Hindu pilgrimage sites. Rishikesh, a major centre for yoga study, was made famous by the Beatles’ 1968 visit. The city hosts the evening Ganga Aarti, a spiritual gathering on the sacred Ganges River. The state's forested Jim Corbett National Park shelters Bengal tigers and other native wildlife.
              </p>
              <p>
              उत्तरखण्ड, उत्तर भारत में स्थित एक राज्य है जिसका निर्माण ९ नवम्बर २००० को कई वर्षों के आन्दोलन के पश्चात भारत गणराज्य के सत्ताईस वें राज्य के रूप में किया गया था। सन २००० से २००६ तक यह उत्तरांचल के नाम से जाना जाता था। जनवरी २००७ में स्थानीय लोगों की भावनाओं को ध्यान में रखते हुए राज्य का आधिकारिक नाम बदलकर उत्तरखण्ड कर दिया गया। राज्य की सीमाएँ उत्तर में तिब्बत और पूर्व में नेपाल से लगी हैं। पश्चिम में हिमाचल प्रदेश और दक्षिण में उत्तर प्रदेश इसकी सीमा से लगे राज्य हैं। सन २००० में अपने गठन से पूर्व यह उत्तर प्रदेश का एक भाग था। पारम्परिक हिन्दू ग्रन्थों और प्राचीन साहित्य में इस क्षेत्र का उल्लेख उत्तराखण्ड के रूप में किया गया है। हिन्दी और संस्कृत में उत्तरखण्ड का अर्थ उत्तरी क्षेत्र या भाग होता है। राज्य में हिन्दू धर्म की पवित्रतम और भारत की सबसे बड़ी नदियों गंगा और यमुना के उद्गम स्थल क्रमशः गंगोत्री और यमुनोत्री तथा इनके तटों पर बसे वैदिक संस्कृति के कई महत्त्वपूर्ण तीर्थस्थान हैं। देहरादून, उत्तरखण्ड की अन्तरिम राजधानी होने के साथ इस राज्य का सबसे बड़ा नगर है। गैरसैण नामक एक छोटे से कस्बे को इसकी भौगोलिक स्थिति को देखते हुए भविष्य की राजधानी के रूप में प्रस्तावित किया गया है किन्तु विवादों और संसाधनों के अभाव के चलते अभी भी देहरादून अस्थाई राजधानी बना हुआ है। 
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Reviews and Suggestions</h1>
          <p>We're glad to hear something from you.</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <Button outline color="secondary" className="float-right">
              Submit
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default Tour;

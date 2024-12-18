import SiteHeader from "./components/Header";
import Section from "./components/Section";
import "./App.css";
import SiteIntro from "./components/Intro";
import image from "./assets/images/designer_1.svg";
import img1 from "./assets/images/undraw_mobile_login_ikmv.png";
import img2 from "./assets/images/undraw_happy_news_hxmt.png";
import img3 from "./assets/images/undraw_social_influencer_sgsv.png";
import img4 from "./assets/images/undraw_mention_6k5d.png";
import icon from "./assets/images/textbook.svg";
import { useRef, useState, useEffect } from "react";
import Purchase from "./components/Purchase";
import Footer from "./components/Footer";

const sectionsInfo = [
  {
    heading: "Light, Fast & Powerful",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    subheading: "Title Goes Here",
    subtext:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
    image: img1,
    icon,
    class: "section--login",
  },
  {
    heading: "Light, Fast & Powerful",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: img2,
    class: "section--2",
    id: "home",
  },
  {
    heading: "Light, Fast & Powerful",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: img3,
    class: "section--3",
    id: "about",
  },
  {
    heading: "Light, Fast & Powerful",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: img4,
    class: "section--4",
    button: "Purchase Now",
    id: "contact",
  },
];

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "-180px" }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <div className="wrapper" ref={sectionRef}>
        <SiteHeader isSticky={isSticky} />
        <SiteIntro />
        <div className="wrapper-background">
          <img src={image} alt="background image" />
        </div>
      </div>
      <main>
        {sectionsInfo.map((item, index) => {
          return (
            <Section
              classname={item.class}
              image={item.image}
              id={item.id}
              button={item.button}
              key={index}
            >
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
              <div className="section-login__info--bottom">
                {!index && (
                  <div>
                    <img src={item.icon} alt="" />
                    <h3>{item.subheading}</h3> <p>{item.subtext}</p>
                  </div>
                )}
                {!index && (
                  <div>
                    <img src={item.icon} alt="" />
                    <h3>{item.subheading}</h3> <p>{item.subtext}</p>
                  </div>
                )}
              </div>
            </Section>
          );
        })}
        <Purchase />
        <Footer />
      </main>
    </>
  );
}

export default App;

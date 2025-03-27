import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../css/Dashboard.css";
import Scientist from "../assets/img/cards/MarieCurie.png";
import Sportmans from "../assets/img/cards/Virat Kohli.png";
import Teacher from "../assets/img/cards/Bob Talbert.png";
import Saints from "../assets/img/cards/Joan of Arc.png";
export interface ValueType {
  id: number;
  Name: string;
  Thought: string;
}
export interface ObjType {
  [key: string]: ValueType[];
}
const data: ObjType = {
  Scientist: [
    {
      id: 1,
      Name: "MarieCurie",
      Thought:
        "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less",
    },
    {
      id: 2,
      Name: "Neil deGrasse Tyson",
      Thought: "The Universe is under no obligation to make sense to you",
    },
    {
      id: 3,
      Name: "Stevee Irwin",
      Thought:
        "I have no fear of losing my life - if I have to save a koala or a crocodile or a kangaroo or a snake, mate, I will save it",
    },
    {
      id: 4,
      Name: "Galileo Galilei",
      Thought:
        "All truths are easy to understand once they are discovered; the point is to discover them",
    },
    {
      id: 5,
      Name: "Richard Dawkins",
      Thought:
        "The universe we observe has precisely the properties we should expect if there is, at bottom, no design, no purpose, no evil, no good, nothing but blind, pitiless indifference",
    },
  ],

  Sportmans: [
    {
      id: 1,
      Name: "Virat Kohli",
      Thought:
        "Irrespective of whether you have talent or not, one has to work hard. Just being talented doesn’t mean anything; you can end up wasting it before you realize.",
    },
    {
      id: 2,
      Name: "Kapil Dev",
      Thought:
        "If you want to do something, achieve something, you can’t be thinking all the time of what you don’t have",
    },
    {
      id: 3,
      Name: "Sachin Tenulkar",
      Thought: "When people throw stones at you, you turn them into milestones",
    },
    {
      id: 4,
      Name: "Saina Nehwal",
      Thought:
        "I want to be the best, it’s not about ranking, it’s about consistency",
    },
    {
      id: 5,
      Name: "Abinav Bindra",
      Thought: "I have only one talent. I can work harder than anyone else.",
    },
  ],

  Teachers: [
    {
      id: 1,
      Name: "Bob Talbert",
      Thought:
        "Teaching kids to count is fine, but teaching kids what counts is best.",
    },
    {
      id: 2,
      Name: "Christa McAuliffe.",
      Thought: "I touch the future. I teach.",
    },
    {
      id: 3,
      Name: "Unknown",
      Thought:
        "A good education can change anyone. A good teacher can change everything!",
    },
    {
      id: 4,
      Name: "Rainn Wilson",
      Thought:
        "Teachers can make such a profound impact on our lives and should be honored as heroes.",
    },
    {
      id: 5,
      Name: "Nelson Mandela",
      Thought:
        "Education is the most powerful weapon which you can use to change the world.",
    },
  ],

  Saints: [
    {
      id: 1,
      Name: "Joan of Arc",
      Thought: "I am not afraid... I was born to do this",
    },
    {
      id: 2,
      Name: "Mother Terasa",
      Thought:
        "Let us always meet each other with smile, for the smile is the beginning of love",
    },
    {
      id: 3,
      Name: "St.Jerome",
      Thought:
        "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
    },
    {
      id: 4,
      Name: "Saint Basil",
      Thought:
        "A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love",
    },
    {
      id: 5,
      Name: "Pope John Paul II",
      Thought:
        "Love is never defeated, and I could add, the history of Ireland proves it.",
    },
  ],
};
const images = [Scientist, Sportmans, Teacher, Saints];
const Dashboard = () => {
  let id = 1;
  const navigate = useNavigate();
  const tableShow = (key: string) => {
    navigate("/Table", {
      state: {
        TableData: data[key],
      },
    });
  };
  return (
    <>
      <Navbar />

      <div className="container">
        {Object.keys(data).map((key, i) => (
          <div
            className="card-container"
            key={++id}
            onClick={() => tableShow(key)}
          >
            <div className="card">
              <div className="cover">
                <img
                  src={images[i]} 
                  className="w-100"
                  alt="..."
                />
              </div>
              <div className="content">
                <h5 className="mt-0">
                  {key} : {data[key].length}
                </h5>
                <p>{data[key][0].Thought}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export { Dashboard };

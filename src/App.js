import "./App.css";
import Message from "./Components/Message";
import ProfileImage from "./Components/ProfileImage";
import Timestamp from "./Components/Timestamp";
import Actions from "./Components/Actions";
import Tweet from "./Components/Tweet";
import User from "./Components/User";
import TweetContainer from "./Components/TweetContainer";
import TweetContainerUser from "./Components/TweetContainerUser";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
  },
];
console.log(tweetsArray[0]);

function App() {
  return (
    <div className="App">
      {/* <Tweet
        tweet1dog={
          tweetsArray[0]
        }
      /> */}
      {/* <ProfileImage
        image={
          tweetsArray[0]
        }
      />
      <Timestamp
        time={
          tweetsArray[0]} />
      <Message
        message={
          tweetsArray[0]
        }
      />
      <Actions />
      <User
        user={
          tweetsArray[0]
        }
      /> */}
      <TweetContainer>
        <ProfileImage
          image={
            tweetsArray[0]
          }
        />
        <TweetContainerUser>
          <User
            user={
              tweetsArray[0]
            }

          />
          <Message
            message={
              tweetsArray[0]
            }
          />
          <Actions/>
        </TweetContainerUser>
        <i className="fas fa-ellipsis-h"></i>
      </TweetContainer>
{/* =================================2do================= */}

      <TweetContainer>
        <ProfileImage
          image={
            tweetsArray[1]
          }
        />
        <TweetContainerUser>
          <User
            user={
              tweetsArray[1]
            }

          />
          <Message
            message={
              tweetsArray[1]
            }
          />
          <Actions/>
        </TweetContainerUser>
        <i className="fas fa-ellipsis-h"></i>
      </TweetContainer>
{/* =================================3ro================= */}
      <TweetContainer>
        <ProfileImage
          image={
            tweetsArray[2]
          }
        />
        <TweetContainerUser>
          <User
            user={
              tweetsArray[2]
            }

          />
          <Message
            message={
              tweetsArray[2]
            }
          />
          <Actions/>
        </TweetContainerUser>
        <i className="fas fa-ellipsis-h"></i>
      </TweetContainer>
    </div>
  );
}

export default App;
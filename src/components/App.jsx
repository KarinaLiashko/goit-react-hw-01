import "./App.css";
import userData from "../userData.json";
import Profile from "./Profile";

export default function App() {
  return (
    <>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
    </>
  );
}

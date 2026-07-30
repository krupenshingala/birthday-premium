import { useEffect, useState } from "react";
import LoadingScreen from "./Loading/LoadingScreen";
import Hero from "./Hero/Hero";
import Story from "./Story/Story";
import BirthdayCard from "./Card/BirthdayCard";
import Gallery from "./Gallery/Gallery";
import Videos from "./Videos/Videos";
import GiftBox from "./Gift/Gift";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Hero />
      <BirthdayCard />
      <Gallery />
       <Videos />
       <GiftBox />
      <Story />
      
    </>
  );
}

export default App;
import Header from "./components/Header";
import ParallaxContainer from "./components/ParallaxContainer";
import kotw from "./assets/kotw.png";
import godlyshistory from "./assets/godlyshistory.png";
import repressingrage from "./assets/repressingrage.png";
import run from "./assets/run.png";
import sa from "./assets/sa.png";
import stack from "./assets/stack.png";
import faraway from "./assets/faraway.png";
import ruminations from "./assets/ruminations.png";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen">
      <Header />
      <div className="flex flex-wrap items-center gap-5 justify-center mt-20 py-20">
        <ParallaxContainer image={run} name="run.exe" />
        <ParallaxContainer image={faraway} name="Rhyme or a Reason" />
        <ParallaxContainer image={godlyshistory} name="Godly's History" />
        <ParallaxContainer image={kotw} name="King of the Wicked Remix" />
        <ParallaxContainer image={repressingrage} name="Repressing Rage" />
        <ParallaxContainer image={stack} name="$Stack" />
        <ParallaxContainer image={ruminations} name="Ruminations" />
        <ParallaxContainer image={sa} name="Seasonal Aggression: The Mixtape" />
      </div>
    </div>
  );
}

export default App;

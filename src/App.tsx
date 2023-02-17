import { createContext, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import Iphone14Page from "./pages/Iphone14Page";
import PhonePage from "./pages/PhonePage";
import WatchPage from "./pages/WatchPage";
import properties from "./properties";

export const LocationContext = createContext<string | null>(null);
export const SetLocationContext = createContext<any>(null);

export const WidthContext = createContext(0);

function App() {
  const [location, setLocation] = useState("/");

  interface Paths {
    [key: string]: JSX.Element;
  }

  const paths: Paths = {
    "/": <PhonePage />,
    // "/iphone-14-pro": <PhonePage />,
    // "/apple-website-clone/iphone-14-pro": <PhonePage />,
    // "/iphone-14": <Iphone14Page />,
    // "/apple-website-clone/iphone-14": <Iphone14Page />,
  };

  // Change location when the url changes
  useEffect(() => {
    setLocation(window.location.pathname.replace(properties.basePath, ""));
  }, [window.location.pathname]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WidthContext.Provider value={width}>
      <div className="App">
        <LocationContext.Provider value={location}>
          <SetLocationContext.Provider value={setLocation}>
            <Navbar />
            {/* {paths[location]} */}
            <PhonePage />
          </SetLocationContext.Provider>
        </LocationContext.Provider>
      </div>
    </WidthContext.Provider>
  );
}

export default App;

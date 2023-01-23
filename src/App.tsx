import { createContext, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import PhonePage from "./pages/PhonePage";
import properties from "./properties";

export const LocationContext = createContext<string | null>(null);
export const SetLocationContext = createContext<any>(null);

function App() {
  const [location, setLocation] = useState('/');

  interface Paths { [key: string]: JSX.Element }
  const paths:Paths = {
    '/': <HomePage />,
    '/iphone-14-pro': <PhonePage />,
    '/apple-website-clone/iphone-14-pro': <PhonePage />
  }
  // Change location when the url changes
  useEffect(() => {
    setLocation(window.location.pathname.replace(properties.basePath, ''))
  }, [window.location.pathname])

  console.log('location', location)

  return (
    <div className="App">
      <LocationContext.Provider value={location}>
        <SetLocationContext.Provider value={setLocation}>
          <Navbar />
          {paths[location]}
        </SetLocationContext.Provider>
      </LocationContext.Provider>
    </div>
  );
}

export default App;

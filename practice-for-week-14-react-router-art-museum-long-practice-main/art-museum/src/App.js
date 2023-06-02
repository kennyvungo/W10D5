import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  // console.log(harvardArt.records)
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records}/>
      </Route>
    </div>
  );
}

export default App;

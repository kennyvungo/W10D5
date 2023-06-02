import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App() {
  console.log(harvardArt.records)
  return (
    <GalleryNavigation galleries={harvardArt.records} />
  );
}

export default App;

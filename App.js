import {Route, Routes} from "react-router-dom"
import Layout from "./components/layouts/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import UserAuthUi from "./pages/Login";
import NewMeetupsPage from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<UserAuthUi/>}/>
        <Route path="/favorites" element={<FavoritesPage/>} />
        <Route path="/newmeetups" element={<NewMeetupsPage/>}/>
        <Route path="*" element={<p>not found page</p>}/>
      </Routes>
    </Layout>
  );
}

export default App;

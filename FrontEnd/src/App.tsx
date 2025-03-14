import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BuyerLogin from './Pages/BuyerLogin';
import SellerLogin from './Pages/SellerLogin';
import Explore from './Pages/Explore';
import BuyerLanding from './Pages/BuyerLanding';
import ExploreBuyer from './Pages/ExploreBuyer';
import Favourites from './Pages/Favourites';
import SellerLanding from './Pages/SellerLanding';
import RecentApproaches from './Pages/RecentApproaches';
import TerraLogs from './Pages/TerraLogs';
import UploadProperty from './Pages/UploadProperty';
import Property from './Pages/Property';
import Interested from './Pages/Interested';
import Loading from './Components/Loading';
function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/buyerLogin" element={<BuyerLogin/>}/>
        <Route path="/sellerLogin" element={<SellerLogin/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/buyerlanding" element={<BuyerLanding/>}/>
        <Route path="/explorebuyer" element={<ExploreBuyer/>}/>
        <Route path="/favorites" element={<Favourites/>}/>
        <Route path="/sellerlanding" element={<SellerLanding/>}/>
        <Route path="/recentapproaches" element={<RecentApproaches/>}/>
        <Route path="/terralogs" element={<TerraLogs/>}/>
        <Route path="/upload" element={<UploadProperty/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/interested" element={<Interested/>}/>
        <Route path="/loading" element={<Loading/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

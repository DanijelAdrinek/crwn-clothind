import { GlobalStyles } from './global.styles';

import { Routes, Route } from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./components/shop/shop.component";
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* shop/* tells us that that route has subsequent url parameters set */}
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;



import Header from './Component/BaiTapThucHanhLayout/Header';
import Body from './Component/BaiTapThucHanhLayout/Body';
import Banner from './Component/BaiTapThucHanhLayout/Banner';
import Item from './Component/BaiTapThucHanhLayout/Item';
import Footer from './Component/BaiTapThucHanhLayout/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Body />
      <div>
        <Banner />
        <Item />
      </div>
     
     <Footer />
    </div>
  );
}

export default App;

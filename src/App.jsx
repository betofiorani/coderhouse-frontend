import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Products from './pages/Products/Products';
import AbmProducto from './pages/AbmProducto/AbmProducto';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<Products />} />
          <Route path="/admin/productos" element={<AbmProducto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

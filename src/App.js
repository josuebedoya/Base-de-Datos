import React, { useEffect, useState } from 'react';
import supabase from './supabase';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('productos')
        .select('*');

      if (error) {
        setError(error);
      } else {
        console.log(data);
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="App">
      <h1>Productos</h1>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul>
          {products.map((product, i) => (
            <li key={i}>{product.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

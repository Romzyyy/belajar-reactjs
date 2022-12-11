import { useState } from 'react';
import Header from './components/Header';

function App() {
    const [products, setProducts] = useState([
        { id: 1, title: 'product 1', price: 898 },
        { id: 2, title: 'product 2', price: 794 },
        { id: 3, title: 'product 3', price: 592 },
        { id: 4, title: 'product 4', price: 696 },
        { id: 5, title: 'product 5', price: 291 },
    ]);

    return (
        <div>
            <Header />
            <ul>
                {products.map((produk) => (
                    <li key={produk.id}>
                        {produk.title} - {produk.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

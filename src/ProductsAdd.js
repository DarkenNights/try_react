import './ProductsAdd.css';
import { useState } from 'react';
import ProductsService from './services/productsService';

function ProductsAdd({ history }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      description,
      image,
    };
    try {
      const response = await ProductsService.add(newProduct);
      if (response.status === 201) {
        history.push('/products');
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  return (
    <div>
      <h1>Vous êtes sur la page d'ajout d'un produit</h1>
      {error && <div className="productsAdd-form-error">{error}</div>}
      <form>
        <input
          type="text"
          placeholder="Tapez le nom du produit"
          onChange={handleChangeName}
        />
        <input
          type="text"
          placeholder="Tapez la description du produit"
          onChange={handleChangeDescription}
        />
        <input
          type="text"
          placeholder="Tapez l'image du produit"
          onChange={handleChangeImage}
        />
        <button onClick={handleSubmit}>Ajouter un produit</button>
      </form>
    </div>
  );
}

export default ProductsAdd;

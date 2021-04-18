import { useState } from 'react';

function ProductsAdd() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        description,
        image,
      }),
    };
    const product = await fetch(
      'http://api.popcollection:4000/fr/products/add',
      requestOptions
    );
    const response = await product.json();
    console.log(response);
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

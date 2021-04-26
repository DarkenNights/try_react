import { useState } from 'react';
import ProductsService from './services/productsService';
import AwsHelper from './helpers/awsHelper';

import './ProductsAdd.css';

function ProductsAdd({ history }) {
  const [fields, setFields] = useState({
    name: '',
    description: '',
  });
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageS3Url = await AwsHelper.uploadFile(image, 'images');
    const newProduct = {
      name: fields.name,
      description: fields.description,
      image: imageS3Url,
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

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    readURL(event.target);
    setImage(event.target.files[0]);
  };

  function readURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        document
          .getElementById('imagePreview')
          .setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }

  return (
    <div>
      <h1>Vous êtes sur la page d'ajout d'un produit</h1>
      {error && <div className="productsAdd-form-error">{error}</div>}
      <form>
        <input
          type="text"
          placeholder="Tapez le nom du produit"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Tapez la description du produit"
          onChange={handleChange}
          name="description"
        />
        <input
          id="image"
          name="image"
          type="file"
          onChange={handleImageChange}
        />
        <img src="" id="imagePreview" />
        <button onClick={handleSubmit}>Ajouter un produit</button>
      </form>
    </div>
  );
}

export default ProductsAdd;

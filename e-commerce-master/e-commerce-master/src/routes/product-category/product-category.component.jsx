import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, Title } from './product-category.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { Spinner } from '../../components/spinner/spinner.components';

const ProductCategory = () => {
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      
      {
      isLoading ? <Spinner/> : <CategoryContainer>
        {products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
      }
      
    </Fragment>
  );
};

export default ProductCategory;
import Posts from '../layout/Posts';
import Header from '../layout/Header';
import CreateProduct from '../layout/CreateProduct';


function HomePage() {
  return (
    <div>
      <Header component={CreateProduct} />
      <Posts />
    </div>
  )
}

export default HomePage

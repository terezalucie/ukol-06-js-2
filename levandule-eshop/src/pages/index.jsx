import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Product } from '../components/Product/product';

const response = await fetch("http://localhost:4000/api/levandule")
const json = await response.json()
const produkt = json.data

const Homepage = () => (
  <>
    <Header />
    <h2 className='heading'>Naše nabídka levandulí</h2>
    <div className="container">
      {produkt.map(item => <Product key={item.id} src={`detail.html?id=${item.id}`} name={item.name} img={item.img} price={item.price} />)}
    </div>
  </>
)

document.querySelector('#root').innerHTML = render(
  <>
    <Homepage />
  </>
);

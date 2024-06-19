import { render } from '@czechitas/render';
import "./detail.css"
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';


const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/levandule/${id}`)
const json = await response.json()
const product = json.data


const ProductPage = ({img, name, use, size, price }) => (
    <div className="product">
        <div className="left">
            <img  className="img-product" src={img} alt="" />
        </div>
        <div className="right">
            <h2>{name}</h2>
            <p className='info'>{use}</p>
            <p className='info bold'>dorůstá: {size}</p>
            <p className='info bold'>cena: {price} Kč <span>za 3 letou rostlinu</span></p>
            <button className='btn'>Přidat do košíku</button>
        </div>
    </div>
)

document.querySelector('#root').innerHTML = render(
    <>  
        <Header />
        <ProductPage img={product.img} name={product.name} use={product.use} size={product.size} price={product.price} />
    </>
  );
import logo from './logo.svg';
import './App.css';

const products = [
  { title: "potato", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
function ShoppingList({ products }) {
  return (
    <ol>
      {products.map(product => (
        <li
          key={product.id}
          style={{ color: product.isFruit ? 'red' : 'green' }}
        >
          {product.title}
        </li>
      ))}
    </ol>
  );
}
/*function SimplePage(props) {
  return (
    <>
      <h1> Hello, {props.name}</h1>
      <h3>Welcome To Learning React, We Will Learn: </h3>
      <ol>
        {

          props.items ?
            props.items.map(item => {
              return (
                <li>{item}</li>
              )

            }) :
            "no items"

        }

        <li>{props.item}</li>
      <li>CSS</li>
      <li>JS</li>
      <li>REACT</li>*//*}
      </ol>
      <MyButton text="Submit" />
    </>
  );


}
function MyButton(props) {
  return (
    <button>{props.text}</button>
  );
}
*/
function App() {
  const arr = ['HTML', 'CSS', 'JS', 'REACT'];
  return (
    <>
      {/*<SimplePage name="Thabet" item="Python" items={arr} />
      <SimplePage name="Thabet" item="C++" items={arr} />
      <SimplePage name="Thabet" item="Java" />}
      <h1>Shopping List</h1>*/}
      <ShoppingList products={products} />
    </>


  );

}

export default App;

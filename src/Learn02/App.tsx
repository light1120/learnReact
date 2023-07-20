//https://react.dev/learn/thinking-in-react
/**
 * 实现一个列表，想下面的数据渲染，并提高一个输入框，可以根据输入过滤。
 * 组件的划分最外层是 FilterableProductTable 组件，包含SearchBar ，ProductTable
 * ProductTable包含 ProductCategoryRow ProductRow
 */

import { useState } from 'react';

/* 
FilterableProductTable
    SearchBar
    ProductTable
        ProductCategoryRow
        ProductRow
        ProductCategoryRow
        ProductRow
*/
interface IProduct {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const Products: IProduct[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function ProductRow(props: { product: IProduct }) {
  return (
    <tr>
      <td>
        <span
          style={{
            color: props.product.stocked ? '' : 'red',
          }}
        >
          {props.product.name}
        </span>
      </td>
      <td>{props.product.price}</td>
    </tr>
  );
}

function ProductCategoryRow(props: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{props.category}</th>
    </tr>
  );
}

function ProductTable(props: { products: IProduct[]; filterText: string; isStockedOnly: boolean }) {
  const rows: JSX.Element[] = [];
  let category = '';
  props.products.forEach((product) => {
    if (props.isStockedOnly && !product.stocked) {
      return;
    }
    if (!product.name.toLocaleLowerCase().includes(props.filterText)) {
      return;
    }
    if (category !== product.category) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
    category = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Prise</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      {/* {rows} 左右不要有多余的空格 */}
    </table>
  );
}
function SearchBar(props: {
  filterText: string;
  setFilterText: (e: string) => void;
  isStockedOnly: boolean;
  setIsStockedOnly: (value: boolean) => void;
}) {
  return (
    <form action="">
      <input
        type="text"
        value={props.filterText}
        onChange={(e) => props.setFilterText(e.target.value)}
        placeholder="type the key for your search"
      />
      <div>
        <input
          type="checkbox"
          checked={props.isStockedOnly}
          onChange={(e) => props.setIsStockedOnly(e.target.checked)}
        />
        Only show product in stocked
      </div>
    </form>
  );
}

function FilterableProductTable(props: { products: IProduct[] }) {
  const [filterText, setFilterText] = useState('');
  const [isStockedOnly, setIsStockedOnly] = useState(false);
  return (
    <div>
      <h1 className="text-3xl font-bold underline"> Hello taiwindcss</h1>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        isStockedOnly={isStockedOnly}
        setIsStockedOnly={setIsStockedOnly}
      />
      <ProductTable products={props.products} filterText={filterText} isStockedOnly={isStockedOnly} />
    </div>
  );
}

export default function App() {
  // 有根标签无需 <></>
  return <FilterableProductTable products={Products} />;
}

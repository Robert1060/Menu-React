import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item)=>item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (categoryStr) => {
    if(categoryStr === 'all'){
      setMenuItems(items)
      return 
    }
    const newItems = items.filter((item)=>item.category === categoryStr)
    setMenuItems(newItems)
  }

  return (
  <main>
    <section className="menu section">
      <div className="title">
        <h2>our items</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menuItems={menuItems}/>
    </section>
  </main>
  )
}

export default App;

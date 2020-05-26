import React from 'react';
import {List} from 'antd';

interface Recipe {
  id: string;
  fields: {
    recipeIngredients: string[];
    name: string;
    mealType: string[];
    'Name (from mealType)': string[];
    createdTime: string;
  };
}

export default function RecipeList() {
  const [recipes, setRecipes] = React.useState([]);
  const fetchRecipes = async () => setRecipes((await (await fetch('http://localhost:3399/recipes')).json()).records);
  React.useEffect(() => {
    fetchRecipes();
  }, []);
  return <List style={{marginBottom: '1em'}}
  bordered
  dataSource={recipes}
  renderItem={(item: Recipe) => (
    <List.Item>
      {item.fields.name}
    </List.Item>
  )}
/>
}

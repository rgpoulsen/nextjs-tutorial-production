import React from "react";
import DrinksList from "../components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  //throw error
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};

const DrinksLayout = async ({ children }) => {
  const data = await fetchDrinks();

  return (
    <div className="max-w-6xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>
      <div className="flex">
        <div className="h-96 w-96 mr-8 overflow-y-auto">
          <DrinksList drinks={data.drinks} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DrinksLayout;

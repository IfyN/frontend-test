//sort alphabetically
export const sortByAlphabet = (state) => {
    return [...state].sort((a, b) => a.name.localeCompare(b.name));
  };
  
  //sort by price
  export const sortByPrice = (state) => {
    return [...state].sort(
      (a, b) =>
        parseFloat(a.price.replace("£", "")) -
        parseFloat(b.price.replace("£", ""))
    );
  };
  
  //sort by star rating
 export const sortByRating = (state) => {
    return [...state].sort((a, b) => b.rating - a.rating);
  };
  
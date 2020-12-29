Welcome,

Im using Code Institute's template for this tester Project. 
I will be Accessing API data, retrieving them, I will parse them into JSON if necessary

I will also generate a table that can contain this data using JavaScript.

### - Problem: 
Problem is films doesn’t have the key ‘name’, it has ‘title’ instead 
What we want to do is use this kind of approach to iterate over the keys to build 
ourselves a table full of data without actually specifying a property

### - Code Solution: 
1. create new function that takes in a single object, within the function, start off as an empty array
2. take our object and iterate over the keys 
3. it will iterate over each key and push it to our tableHeaders array, use <td> to create a new table cell 
4. once we have data results - we need to invoke the getTableHeaders function, pass through the first array object 
5. once we have data results - we need to invoke the function - pass through the first object - var tableHeaders used to contain the data 
6. create an empty array for each individual row 
7. get the key and its data value as well
8. when the row is created after it has been iterated over - push that row into tableRows array

### Display: 

- We need to have everything appearing on a separate row 
- Need to shorten information placed in <td> elements - take up less space and display better 
- Not to worry too much about presentation - just display the JSON data as best as possible

### Paginations: 

- Pagination to view data being returned 
- If they exist, generate pagination buttons ie. if next and previous exist, create next/previous URL buttons accordingly
- Adding pagination at the end of the table
- Issue with the URL we want being appended to the base URL -> get rid of the base URL constant `const baseURL = "https://ci-swapi.herokuapp.com/api/` and pass in full URL's in its place
- Change the ` type ` parameters used to ` url `
 


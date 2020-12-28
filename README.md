<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">


Welcome,

Im using Code Institute's template for this tester Project. 
I will be Accessing API data, retrieving them, I will parse them into JSON if necessary

I will also generate a table that can contain this data using JavaScript.

- Problem: * Problem is films doesn’t have the key ‘name’, it has ‘title’ instead 
What we want to do is use this kind of approach to iterate over the keys to build 
ourselves a table full of data without actually specifying a property

- Solution: 
1. create new function that takes in a single object, within the function, start off as an empty array
2. take our object and iterate over the keys 
3. it will iterate over each key and push it to our tableHeaders array, use <td> to create a new table cell 
4. once we have data results - we need to invoke the getTableHeaders function, pass through the first array object 
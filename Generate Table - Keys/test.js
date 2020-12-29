// JSON data
function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

/* Problem is films doesn’t have the key ‘name’, it has ‘title’ instead 
What we want to do is use this kind of approach to iterate over the keys to build 
ourselves a table full of data without actually specifying a property
*/

// create new function that takes in a single object 
    // start off as an empty array
	function getTableHeaders(obj) {
		var tableHeaders = [];

// take our object and iterate over the keys 
		Object.keys(obj).forEach(function(key) {
// it will iterate over each key and push it to our tableHeaders array
    // use <td> to create a new table cell 
			tableHeaders.push( `<td> ${key} </td>` );
		});

    // we then add each to a row hence, <tr></tr>
		return `<tr>${tableHeaders}</tr>`;
    }

    // if next and previous exist, create next/previous URL buttons accordingly
    function generatePaginationButtons(next, prev){
        if (next && prev) {
            return `<button onclick="writeToDocument('${prev}')">Previous</button>
                    <button onclick="writeToDocument('${next}')">Next</button>`
        } else if (next && !prev) {
            return `<button onclick="writeToDocument('${next}')">Next</button>`;
        } else if(!next && prev) {
            return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
        }
    }

    function writeToDocument(url) { 
            var tableRows = [];
            var el = document.getElementById("data");

    	getData(url, function(data) {

            // pagination to view data being returned - if they exist, generate pagin... buttons
            var pagination = "";  

            if (data.next || data.previous){
                pagination = generatePaginationButtons(data.next, data.previous) 
            }
            data = data.results;

        // once we have data results - we need to invoke the function
        // pass through the first object 
            // var used to contain the data 
            var tableHeaders = getTableHeaders(data[0]);

        	data.forEach(function(item) {
                // create an empty array for each individual row 
                var dataRow = [];
                
            // get the key and its data value as well
                Object.keys(item).forEach(function(key) {
                // set to the value of the key
                    var rowData = item[key].toString();
                    // shortened data is a substring of the main string data - first 15 characters
                    var truncatedData = rowData.substring(0, 15);
                    dataRow.push(`<td>${truncatedData}</td>`); 
                });
                // when the row is created after it has been iterated over - push that row into tableRows array
                tableRows.push(`<tr>${dataRow}</tr>`);
            });
                // adding pagination at the end of the table
            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;
        });
    }

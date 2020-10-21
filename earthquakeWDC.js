(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {

    };

    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);

    window.addEventListener('load', () => {
	const submitButton = document.querySelector('#submitButton');
	submitButton.addEventListener('click', () => {
	    tableau.connectionName = "USGS Earthquake Feed";
            tableau.submit();
	});
    });
})();

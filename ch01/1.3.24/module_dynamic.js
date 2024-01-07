import('../1.3.17/App.js').then(app => {
	console.log(app.getTriangle(10, 5)) ;

	const a = new app.Article() ;
	console.log(a.getAppTitle()) ;
}) ;

let siteurl = 'https://www.classicbarber.co.uk/';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		siteurl = 'http://localhost:8080/';
	break;
}

module.exports = {
	siteurl: siteurl
	,title: 'The Classic Barber of Hertford'
	,environment: process.env.ELEVENTY_ENV
};

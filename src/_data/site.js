let siteurl = 'https://www.classicbarber.co.uk/';

require( 'dotenv' ).config( { path: '../.env' } );

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		siteurl = '/';
	break;
}

module.exports = {
	siteurl: siteurl
	,test1: process.env.TEST1
	,test2: process.env.NODE_ENV
	,title: 'The Classic Barber of Hertford'
	,environment: process.env.ELEVENTY_ENV
	,mapAPIKey: process.env.GOOGLE_MAPS_API_KEY
};

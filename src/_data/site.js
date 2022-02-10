let siteurl = 'https://www.classicbarber.co.uk/';

require( 'dotenv' ).config();

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		siteurl = '/';
	break;
}

module.exports = {
	siteurl: siteurl
	,test1: process.env.FTP_CONNECTION
	,test2: process.env.secrets.FTP_CONNECTION
	,title: 'The Classic Barber of Hertford'
	,environment: process.env.ELEVENTY_ENV
	,mapAPIKey: process.env.GOOGLE_MAPS_API_KEY
};

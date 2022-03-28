module.exports = function( eleventyConfig ) {
	eleventyConfig.setQuietMode( true );
	eleventyConfig.setTemplateFormats( 'html,md' );

	eleventyConfig.addPassthroughCopy( './src/css' );
	eleventyConfig.addPassthroughCopy( './src/fonts' );
	eleventyConfig.addPassthroughCopy( './src/image' );
	eleventyConfig.addPassthroughCopy( './src/js' );

	eleventyConfig.addPassthroughCopy( './src/robots.txt' );
	// eleventyConfig.addPassthroughCopy( './src/sitemap.xml' );
	eleventyConfig.addPassthroughCopy( './src/.htaccess' );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addShortcode( 'debug', (value) =>
		`<pre style="padding: 10px; font-size: 14px; font-family: monospace;">debug: ${ JSON.stringify( value, null, 2 ) }</pre>`
	);

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};

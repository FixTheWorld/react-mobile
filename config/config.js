const config = {
    env:process.env.NODE_ENV||'development',
    basename:'/static/',
    port:613,
    devScriptName:"devServer",
	dbHost:'localhost',
	dbPort:'27017',
	dbName:'products'
};
module.exports=config;

'use strict'

// for redis session
module.exports = function(rdb) {
	return rdb.createClient({db: 7});
}
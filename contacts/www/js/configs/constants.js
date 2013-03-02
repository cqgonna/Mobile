var ENVIRONMENT = 'local';	//local, live
var MOBILE_SITE_URL;
if (ENVIRONMENT == 'local') {
	MOBILE_SITE_URL	= 'http://127.0.0.1/j1/index.php/mobile/';
} else if (ENVIRONMENT == 'live')  {
	MOBILE_SITE_URL = 'http://192.168.1.88/tiansheng/index.php/mobile/';
}

var BARCODE_FORMAT = 'UPC_A';
/**
 * 
 * @param {[type]}
 */
function numberFormat(nStr){

	nStr += '';

	var numberArr = nStr.split('.');
	var x1 = numberArr[0];

	var x2 = numberArr.length > 1 ? '.' + numberArr[1] : '';
	var reg = /(\d+)(\d{3})/;

	while (reg.test(x1)) {
		x1 = x1.replace(reg, '$1' + ',' + '$2');
	}

	return x1 + x2;
}

numberFormat(42424234.32);
/* Ryan Postma
 * CMP344
 * Chater 13 homework
 * 4/12/15
 */

function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] == data) {
			return i;
		}
	}
	return -1;
}

function dispArr(arr) {
	for (var i = 0; i < arr.length; ++i) {
		write(arr[i] + " ");
		if (i % 10 == 9) {
			write("\n");
		}
	}
	if (i % 10 != 0) {
		write("\n");
	}
}

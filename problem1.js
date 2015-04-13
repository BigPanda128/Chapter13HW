/* Ryan Postma
 * CMP344
 * Chater 13 homework
 * 4/12/15
 */

//this will get the last occurance of the number you are searching for
function seqSearch(arr, data) {
	for (var i = arr.length; i > 0; --i) {
		if (arr[i] == data) {
			return i;
		}
	}
	return -1;
}

//prints out the array of numbers so it is readable
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

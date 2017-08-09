module.exports = function qsort(arr, lo, hi) {
	if (lo > hi) {
		return;
	}
	let index = partition(arr, lo, hi);
	qsort(arr, lo, hi - 1);
	qsort(arr, index + 1, hi);
}

function partition(arr, lo, hi) {
	var storeIndex = lo;
	var pivot = array[hi];
	for (var i = lo; i < hi; i++) {
		if (array[i] < pivot) {
			swap(array, storeIndex, i);
			storeIndex++;
		}
	}
	swap(array, hi, storeIndex);
	return storeIndex;
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
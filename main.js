function diffArray(arr1, arr2) {
  // Get values only in arr1
  const uniqueFromArr1 = arr1.filter(item => !arr2.includes(item));

  // Get values only in arr2
  const uniqueFromArr2 = arr2.filter(item => !arr1.includes(item));

  // Combine both unique arrays
  return uniqueFromArr1.concat(uniqueFromArr2);
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));

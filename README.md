# 🔀 Symmetric Difference Function

A lightweight JavaScript utility that returns the **symmetric difference** of two arrays — the elements that appear in one array but **not** the other.

---

## 📖 What Is Symmetric Difference?

Given two sets **A** and **B**, the symmetric difference is every element that belongs to **A** or **B**, but **not both**.

```
A = ["pen", "book"]
B = ["book", "pencil", "notebook"]

A △ B = ["pen", "pencil", "notebook"]
```

---

## 🚀 Usage

```js
function diffArray(arr1, arr2) {
  const uniqueFromArr1 = arr1.filter(item => !arr2.includes(item));
  const uniqueFromArr2 = arr2.filter(item => !arr1.includes(item));
  return uniqueFromArr1.concat(uniqueFromArr2);
}
```

### Example

```js
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
// Output: ["pen", "pencil", "notebook"]
```

---

## ⚙️ How It Works

| Step | Description |
|------|-------------|
| 1️⃣  | Filter `arr1` to keep only elements **not present** in `arr2` |
| 2️⃣  | Filter `arr2` to keep only elements **not present** in `arr1` |
| 3️⃣  | Concatenate both filtered arrays into a single result |

---

## 📥 Parameters

| Parameter | Type    | Description              |
|-----------|---------|--------------------------|
| `arr1`    | `Array` | The first input array    |
| `arr2`    | `Array` | The second input array   |

**Returns:** `Array` — Elements unique to either array, in the order they were found.

---

## 🧪 More Examples

```js
diffArray([1, 2, 3], [1, 2, 4]);
// → [3, 4]

diffArray([], ["a", "b"]);
// → ["a", "b"]

diffArray(["x", "y"], ["x", "y"]);
// → []

diffArray([true, false], [false, null]);
// → [true, null]
```

---

## ⚠️ Notes

- Uses **strict equality** (`===`) via `Array.includes()`, so `1` and `"1"` are treated as different values.
- Does **not** deduplicate values within the same input array.
- Order of results follows: unique elements from `arr1` first, then unique elements from `arr2`.

---

## 🛠️ Built With

- Vanilla JavaScript (ES6+)
- No dependencies

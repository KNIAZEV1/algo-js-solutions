## Hash Table (HT)

`HT` is used to store a `key-value` pairs. They're like arrays, but the `keys` are `not ordered`.

Unlike arrays, `HT` are fast for all the following operations:

- remove values
- finding values
- adding new values

`Separate chaining` and `linear probing` are two stratagies used to deal with two keys that hash to the same index.

#### Big O

- `insertion` - O(1)
- `access(search)` - O(1)
- `removing` - O(1)

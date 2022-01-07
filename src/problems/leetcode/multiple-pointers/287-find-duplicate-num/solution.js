/**
 * @param {number[]} nums
 * @return {number}
 */
// using Floyd's algo, time: O(n), space: O(1)
export function findDuplicate(nums) {
	let slow = nums[0];
	let fast = nums[nums[0]];

	while (slow != fast) {
		slow = nums[slow];
		fast = nums[nums[fast]];
	}

	slow = 0;

	while (slow != fast) {
		slow = nums[slow];
		fast = nums[fast];
	}

	return slow;
}

// using Set, time: O(n), space: O(n)
export function findDuplicate2(nums) {
	const set = new Set();

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		if (set.has(curr)) {
			return curr;
		} else {
			set.add(curr);
		}
	}
}

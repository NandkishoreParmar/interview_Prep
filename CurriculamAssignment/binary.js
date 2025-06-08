/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}

// Explanation:
// Binary search to find target or position to insert
// If target found, return index immediately
// If not found, left will point to insertion position
// Time: O(log n), Space: O(1)
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    };
}

// Explanation:
// Binary search to find the first occurrence where isBadVersion returns true
// If mid is bad, first bad version is mid or before mid
// If mid is not bad, first bad version is after mid
// Time: O(log n), Space: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

// Explanation:
// Binary search approach where we compare mid element with its right neighbor
// If nums[mid] > nums[mid+1], peak is in left half (including mid)
// Otherwise, peak is in right half (excluding mid)
// Time: O(log n), Space: O(1)
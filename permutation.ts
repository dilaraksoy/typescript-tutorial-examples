function permute(nums: number[]): number[][] {
    const result: number[][] = [];
  
    function backtrack(start: number): void {
      if (start === nums.length) {
        result.push([...nums]);
        return;
      }
  
      for (let i = start; i < nums.length; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];
        backtrack(start + 1);
        [nums[start], nums[i]] = [nums[i], nums[start]];
      }
    }
  
    backtrack(0);
    return result;
  }
  
  // Example
  const nums = [1, 2, 3];
  const permutations = permute(nums);
  console.log(permutations); // outputs [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
  
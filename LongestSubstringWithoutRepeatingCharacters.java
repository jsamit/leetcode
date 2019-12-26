/* using set */
// complexity O(2n)

class Solution {
    public int lengthOfLongestSubstring(String s) {
        
       Set<Character> set = new HashSet<>();
        
       int i = 0;
       int j = 0;
        
       int n = s.length();
        int max = 0;
        
        while(i<n && j<n) {
            if(!set.contains(s.charAt(j))) {
                set.add(s.charAt(j++));
                max = Math.max(j-i,max);
            } else {
                set.remove(s.charAt(i++));
            }
        }
        return max;
        
        
    }
}

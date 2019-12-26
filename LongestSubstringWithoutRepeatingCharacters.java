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
        
        
        // using map

Map<Character,Integer> map = new HashMap<>();
        
        int max = 0;
        for(int i=0,j=0; j<s.length(); j++) {
            if(map.containsKey(s.charAt(j))) 
                i = Math.max(map.get(s.charAt(j)),i);
            
                max = Math.max(max,j-i+1);
                map.put(s.charAt(j),j+1);
            
        }
    }
}

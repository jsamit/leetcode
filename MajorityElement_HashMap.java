class Solution {
    public int majorityElement(int[] nums) {
        int majorityLen = nums.length/2;
        
        Map<Integer,Integer> map = new HashMap<>();
        
        for(int num:nums) {
            if(map.containsKey(num))
                map.put(num,map.get(num)+1);
            else
                map.put(num,1);
        }
        
        Map.Entry<Integer,Integer> majorityElem = null;
        
        for(Map.Entry<Integer,Integer> entry:map.entrySet()) {
            if(majorityElem == null || entry.getValue() > majorityElem.getValue())
                majorityElem = entry;
        }
        
        return majorityElem.getKey();
    }
}

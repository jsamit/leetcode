class TestClass {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int d = sc.nextInt();
        
        Deque<Integer> deq = new ArrayDeque<>();
        
        for(int i=0; i<n; i++)
            deq.offerLast(sc.nextInt());
        
        
        int sum = 0;
        int time = 0;
        int countZeros = 0;
        
        while(!deq.isEmpty()) {
            int temp = deq.pollFirst();
            sum += temp;
            
            if(sum > d) {
                sum -= d;
            } else
                time++;
                
                
            if(temp == 0)
                countZeros++;
            else
                countZeros = 0;
        }
        
        if(countZeros > 0)
            time -= countZeros;
            
        System.out.println(time);
    }
}

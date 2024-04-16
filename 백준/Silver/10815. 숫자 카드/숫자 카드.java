import java.util.Scanner;
import java.util.HashSet;

// 2024.04.16 15:17

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        int n = sc.nextInt();
        HashSet<Integer> set = new HashSet<>();
        for(int i = 0; i < n; i++) {
            set.add(sc.nextInt());
        }
    
        int m = sc.nextInt();
        for (int j = 0; j < m; j++) {
            if(set.contains(sc.nextInt())) {
                System.out.print("1 ");
            } else {
                System.out.print("0 ");
            }
        }
        sc.close();
    }
}
import java.util.Scanner;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        int tc = sc.nextInt();
        while (tc-- > 0) {
            int sum = 0;
            int avg = 0;
            int cnt = 0;
            double per = 0;
            int tc2 = sc.nextInt();
            int[] arr = new int[tc2];

            for (int i = 0; i < tc2; i++) {
                arr[i] = sc.nextInt();
                sum += arr[i];
            }
            avg = (sum/tc2);
            
            for (int j = 0; j < tc2; j++) {
                if (arr[j] > avg) cnt++;
            }
            
            per = ((double)cnt/(double)tc2)*100;

            System.out.printf("%.3f%%%n", per);
        }
        sc.close();
    }
}

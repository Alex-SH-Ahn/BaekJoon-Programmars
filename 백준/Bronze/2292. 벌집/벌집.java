import java.util.Scanner;
import java.util.Arrays;

// 2023.11.26 16:08

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int cnt = 1;
        int ran = 2;

        if (N == 1) System.out.print(1);
        else {
            while (ran <= N) {
                ran = ran + (6 * cnt);
                cnt++;
            }
            System.out.print(cnt);
        }

        sc.close();
    }
}
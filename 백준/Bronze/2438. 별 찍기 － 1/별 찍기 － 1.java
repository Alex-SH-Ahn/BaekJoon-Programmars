import java.util.Scanner;
import java.util.Arrays;

// 2023.11.26 13:12

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.println("*".repeat(i));
        }

        sc.close();
    }
}
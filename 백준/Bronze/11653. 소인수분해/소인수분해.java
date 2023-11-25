import java.util.Scanner;
import java.util.Arrays;

// 2023.11.25 17:33

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        for (int i = 2; i <= num; i++) {
            while (num % i == 0) {
                num /= i;
                System.out.println(i);
            }
        }

        sc.close();
    }
}
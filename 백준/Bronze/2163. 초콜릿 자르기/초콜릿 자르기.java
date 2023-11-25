import java.util.Scanner;
import java.util.Arrays;

// 2023.11.25 22:26

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();

        System.out.println((n*m)-1);
        sc.close();
    }
}
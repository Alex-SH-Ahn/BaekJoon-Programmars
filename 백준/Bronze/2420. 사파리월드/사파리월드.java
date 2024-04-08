import java.util.Scanner;
import java.util.Arrays;

// 2024.04.08 17:04

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long n = sc.nextLong();
        long m = sc.nextLong();

        System.out.println(Math.abs(n-m));

        sc.close();
    }
}
import java.util.Scanner;
import java.util.Arrays;

// 2023.11.26 13:46

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            if (a == 0) break;

            boolean tri = rightTri(a, b, c);

            if (tri) System.out.println("right");
            else System.out.println("wrong");
        }

        sc.close();
    }

    static boolean rightTri(int a, int b, int c) {
        return (((a*a) == (b*b) + (c*c)) || ((b*b) == (a*a) + (c*c)) || ((c*c) == (b*b) + (a*a)));
    }
}
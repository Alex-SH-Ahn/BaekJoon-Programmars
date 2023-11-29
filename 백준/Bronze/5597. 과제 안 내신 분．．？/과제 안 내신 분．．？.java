import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;

// 2023.11.29 09:08

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Integer>full = new ArrayList<>();
        for (int i = 1; i <= 30; i++) {
            full.add(i);
        }
        
        ArrayList<Integer>in = new ArrayList<>();
        for (int i = 0; i < 28; i++) {
            int b = sc.nextInt();
            in.add(b);
        }

        for (int score : full) {
            if (!in.contains(score)) System.out.println(score);;
        }

        sc.close();
    }
}
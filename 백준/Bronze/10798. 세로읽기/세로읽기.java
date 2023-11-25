import java.util.Scanner;
import java.util.Arrays;

// 2023.11.25 22:39

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[][] arr = new char[5][15];

        for (int i = 0; i < 5; i++) {
            String word = sc.next();
            for (int j = 0; j < word.length(); j++) {
                arr[i][j] = (char) word.charAt(j);
            }
        }

        for (int i = 0; i < arr[0].length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[j][i] != '\0') System.out.print(arr[j][i]);
            }
        }
        sc.close();
    }
}
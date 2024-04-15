import java.util.Scanner;
import java.util.Arrays;
import java.util.List;

// 2024.04.15 10:51

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int tc = sc.nextInt();
        sc.nextLine(); // consume nextLine Left-over
        for (int i = 0; i < tc; i++) {

            String sentence = sc.nextLine();
            List<String> words = Arrays.asList(sentence.split(" "));

            String[] reversed = new String[words.size()];

            for (int j = words.size(); j > 0; j--) {
                reversed[words.size() - j] = words.get(j - 1);
            }

            for (int n = 0; n < reversed.length; n++) {
                if (n == 0) {
                    System.out.print("Case #" + (i + 1) + ": ");
                }
                System.out.print(reversed[n] + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}
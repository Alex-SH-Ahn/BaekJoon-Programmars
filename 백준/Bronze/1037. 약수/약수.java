import java.util.Scanner;
import java.util.Arrays;

// 2023.11.25 22:33

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr);
        //System.out.println(Arrays.toString(arr));

        System.out.println(arr[0] * arr[n-1]);

        sc.close();
    }
}
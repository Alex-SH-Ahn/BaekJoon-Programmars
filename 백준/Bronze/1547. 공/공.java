import java.util.Scanner;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        int m = sc.nextInt(); // 공을 옮길 M번

        int[] arr = new int[] {1, 2, 3}; // 컵 세개

        while (m-- > 0) {
            int x = sc.nextInt(); //x
            int y = sc.nextInt(); //y

            int indexX = findIndex(arr, x);
            int indexY = findIndex(arr, y);
            
            int tempA = arr[indexX];
            arr[indexX] = arr[indexY];
            arr[indexY] = tempA; //x에 y가 들어감
        }

        System.out.println(arr[0]);

        sc.close();
    }

    static int findIndex(int[] arr, int target) {
        for (int j = 0; j < 3; j++) {
            if (arr[j] == target) {
                return j; //해당 인덱스 반환
            }
        }
        return -1;
    }
}
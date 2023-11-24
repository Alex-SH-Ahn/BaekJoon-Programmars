import java.util.Scanner;
import java.util.Arrays;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int test = 10;
        int[] left = new int[10];
        int cnt = 10;

        for (int i = 0; i < test; i++) {
            int n = sc.nextInt();
            int remain = n % 42;
            left[i] = remain;
        }

        //System.out.println(Arrays.toString(left));

        for (int j = 0; j < test - 1; j++) { //배열에 나머지 갯수 세기
            for (int k = j + 1; k < test; k++) {
                if (left[j] == left[k]){
                    cnt--;
                    break;
                }
            }
        }

        //System.out.println(Arrays.toString(left));
        System.out.println(cnt);
        sc.close();
    }
}

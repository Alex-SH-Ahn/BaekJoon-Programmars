import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        int tc = sc.nextInt();
        int cnt = 0;

        while (tc-- > 0) {
            int n = sc.nextInt();

            if (n != 1) {
                cnt++;
                for (int i = 2; i < n; i++) {
                    if(n % i == 0) {
                        cnt--;
                        break;
                    }
                }
            }
        }

        System.out.println(cnt);
        sc.close();
    }
}

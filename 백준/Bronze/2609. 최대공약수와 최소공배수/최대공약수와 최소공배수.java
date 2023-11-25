import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        int gcd = -1;
        int small = -1;

        if (num1 > num2) small = num2;
        else small = num1;

        for (int i = 1; i <= small; i++) { //최소공약수 구하기
            if ((num1 % i == 0) && (num2 % i == 0)) gcd = i;
        }
        //최소공배수 (num1 * num2) / gcd

        int lcm = (num1 * num2) / gcd;
        System.out.printf("%d%n%d%n",gcd, lcm);
        sc.close(); 
    }
}

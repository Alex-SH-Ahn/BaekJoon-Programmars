import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        int num = sc.nextInt();

        if (num < 10) num *= 10;
        
        int cnt = 0;
        int a;
        int newNum = num;
        for (int i = 0; i < 101; i++) {
            a = (newNum / 10) + (newNum % 10); //첫째자리수+둘째자리수 = a
            if (a >= 10) a %= 10; //a가 10이 넘으면 둘째자리수만 취함
            newNum = ((newNum%10)*10) + a;
            cnt++;
            if (newNum == num) break;
        }
        System.out.println(cnt);
        sc.close();
    }
}

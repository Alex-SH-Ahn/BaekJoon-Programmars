import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        while (true) {
            int n = sc.nextInt(); //숫자를 입력받음
            String nStr = String.valueOf(n); //숫자를 문자열로 변환
            int w = 0;

            if (n == 0) break; // 0이면 무한루프를 종료
            
            for (int j = 0; j < nStr.length(); j++) {
                //nStr의 인덱스 0부터 nStr.length()까지 돌면서 
                if (nStr.charAt(j) == '0') { // 0이면 4센치
                    w += 4;
                } else if (nStr.charAt(j) == '1') { // 1이면 2센치
                    w += 2;
                } else { // 나머지 숫자들은 3센치를 더함
                    w += 3;
                }
            }

            w += 2; // 호수판과 숫자 경계 2를 너비 w에 더함
            w += (nStr.length() - 1); // 숫자와 숫자 사이의 여백

            System.out.println(w);
        }

        sc.close();
    }
}

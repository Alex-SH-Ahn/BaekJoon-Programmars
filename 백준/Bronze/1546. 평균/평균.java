import java.util.Scanner;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        int tc = sc.nextInt();
        double[] scores = new double[tc];
        for (int i = 0; i < tc; i++) { //scores에 점수를 넣는 루프
            scores[i] = sc.nextDouble();
        }

        double max = scores[0];

        for (int j = 1; j < tc; j++) { //최고점을 구하는 루프
            if (max < scores[j]) {
                max = scores[j];
            }
        }

        for (int k = 0; k < tc; k++) { //점수조작루프
            scores[k] = ((scores[k]/max)*100);
        }

        double avg = 0;
        for (int x = 0; x < tc; x++) { //평균 구하는 루프
            avg += scores[x];
        }

        avg = (avg/tc);
        System.out.println(avg);
        sc.close();
    }
}

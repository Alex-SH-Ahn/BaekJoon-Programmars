import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        int d = sc.nextInt();
        int h = sc.nextInt();
        int w = sc.nextInt();

        double x = (double) Math.sqrt((double) (d*d) / ((h*h)+(w*w)));

        h = (int) (x*h);
        w = (int) (x*w);
        System.out.printf("%d %d%n", h, w);
        sc.close();
    }
}

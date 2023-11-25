import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int up = sc.nextInt(); //A
        int down = sc.nextInt(); //B
        int length = sc.nextInt(); //C

        int day = (length - down) / (up - down);

        if ((length - down) % (up - down) != 0) {
            day++;
        }
        System.out.println(day);
    }
}
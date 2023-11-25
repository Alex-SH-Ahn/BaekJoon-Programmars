import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        String hex = sc.next();
        int hexBi = Integer.valueOf(hex, 16);

        System.out.println(hexBi);
        sc.close();
    }
}

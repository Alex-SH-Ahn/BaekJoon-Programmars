import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            String res = "yes";
            String num = sc.next();
            if ("0".equals(num)) {
                break;
            }

            boolean a = true;
            for (int i = 0; i < num.length()/2; i++) {
                if (num.charAt(i) != num.charAt(num.length() - 1 - i)) {
                    a = false;
                    break;
                }
            }

            System.out.println(a ? "yes":"no");
        }

        sc.close();
    }
}

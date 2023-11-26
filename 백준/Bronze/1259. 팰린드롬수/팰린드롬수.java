import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        boolean a = true;
        while (a) {
            String res = "yes";
            String num = sc.next();
            int leng = num.length();
            if (num.equals("0")) {
                a = false;
                break;
            }
            //System.out.println("num: "+num);
            if (num.charAt(0) == num.charAt(leng-1)) {
                if (leng > 3) {
                    for (int i = 1; i <= (leng/2); i++) {
                        if (num.charAt(i) == num.charAt(leng-1-i)) {
                            //System.out.println("num.charAt(i): "+num.charAt(i));
                            //System.out.println("num.charAt(leng-1-i): "+num.charAt(leng-1-i));
                            continue;
                        } else {
                            res = "no";
                            break;
                        }
                    }
                    System.out.println(res);
                } else {
                    System.out.println(res);
                }
            } else System.out.println("no");
        }

        sc.close();
    }
}
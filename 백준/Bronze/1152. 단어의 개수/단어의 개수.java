import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String sen = sc.nextLine();

        if (!sen.trim().equals("")) {
            String[] words = sen.trim().split("\\s+");
            int cnt = 0;
            
            for (String word : words) {
                cnt++;
            }
            System.out.println(cnt);
        } else System.out.println(0);

        sc.close();
    }
}

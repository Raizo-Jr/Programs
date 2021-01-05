import java.util.Scanner;

class PalindromeNumber {
    public static void main(String args[]) {
        int n, r, m, sum = 0;
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number : ");
        n = input.nextInt();
        m = n;
        while (m > 0) {
            r = m % 10;
            sum = (sum * 10) + r;
            m = m / 10;
        }
        if (n == sum) {
            System.out.print(n + " is a palindrome number.");
        } else {
            System.out.print(n + " is not a palindrome number.");
        }
        input.close();
    }
}

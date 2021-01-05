#include <iostream>
using namespace std;
int main()
{
    int n, r, sum, m;
    sum = 0;
    cout << "Enter a number : ";
    cin >> n;
    m = n;
    while (m)
    {
        r = m % 10;
        sum = sum * 10 + r;
        m = m / 10;
    }
    if (n == sum)
        cout << n << " is palindrome.";
    else
    {
        cout << n << " is not palindrome.";
    }
    return 0;
}
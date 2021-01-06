#include <iostream>
#include <string.h>

using namespace std;

int main()
{
    char str[20];
    int i, length, flag = 0;

    cout << "Enter the string : ";
    cin >> str;

    length = strlen(str);

    for (i = 0; i < length; i++)
    {
        if (str[i] != str[length - i - 1])
        {
            flag = 1;
            break;
        }
    }

    if (flag)
    {
        cout << str << " is not palindrome.";
    }
    else
    {
        cout << str << " is not palindrome.";
    }

    return 0;
}
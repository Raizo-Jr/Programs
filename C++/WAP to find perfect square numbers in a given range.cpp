#include <iostream>
#include <cmath>

using namespace std;

int perSqrNum(int a, int b)
{
    int i;

    for (i = a; i <= b; i++)
        if (sqrt(i) == sqrt(i))
            cout << i << " ";

    return 0;
}
int main()
{
    int a = 1, b = 1000;
    perSqrNum(a, b);
    return 0;
}
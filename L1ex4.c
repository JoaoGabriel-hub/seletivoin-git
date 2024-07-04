#include <stdio.h>

double media(double a, double b, double c)
{
    return (a + b + c)/ 3.0;
}


int main()
{
    double n1, n2, n3;
    double r;

    do {
        printf("digite as 3 notas: ");
        scanf("%lf %lf %lf", &n1, &n2, &n3);
    }  while((n1 < 0 || n1 > 10 ) || (n2 < 0 || n2 > 10 ) || (n3 < 0 || n3 > 10 ));

    r = media(n1, n2, n3);

    if (r >= 6) printf("Aprovado, media = %.2f", r);
    else if ( 6 > r && r >= 4 ) printf("VS, media = %.2f", r);
    else printf("Reprovado, media = %.2f", r);

    return 0;
}



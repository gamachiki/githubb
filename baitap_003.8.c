#include <stdio.h>
#include <conio.h>
int main(){
	int a , s=0, sotach;
	printf("nhap vao so nguyen duong num<co 5 chu so>: ");
	scanf("%d", &a);
	for( ;a!=0;){
		sotach = a % 10 ;
		s += sotach;
		a /= 10;
	} 
	printf("tong cac chu so cua num: %d ", s);
	getchar();
	return 0;
	
}
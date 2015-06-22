#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const int MAX = 256;

char* reverse (char*);

int main(int argc, char *argv[]) {
    FILE * file;
    char* line;
    size_t length = 0;
    size_t read;

    if ( argc != 2 ) {
        printf( "usage: %s filename", argv[0] );
        exit(1);
    }

    file = fopen(argv[1], "r");

    if (file == NULL) {
        printf("Failed to open file at %s: ", argv[1]);
        exit(1);
    }

    while ((read = getline(&line, &length, file)) != -1) {
        char target[length];
        strcpy(target, line);
        printf("\nsoruce %s", line);
        printf("reversed %s", reverse(target));
    }

    free(line);
    fclose(file);
    exit(0);
};

char* reverse (char source[]) {
    int length = strlen(source);
    int c, i, j;

    for (i = 0, j = length-1; i < j; ++i, j--) {
        c = source[i];
        source[i] = source[j];
        source[j] = c;
    }

    return source;
};
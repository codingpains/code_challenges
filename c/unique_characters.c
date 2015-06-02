#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int is_unique(char *str)
{
    int c;
    int table[128];

    for (int i = 0; i < 128; i++) {
        table[i] = 0;
    }

    for (int i = 0; i < strlen(str); i++) {
        if (str[i] != ' ') {
            c = (int) str[i];
            table[c]++;

            if (table[c] > 1) {
                return 0;
            }   
        }        
    }

    return 1;
}

int main(void)
{
    FILE * file;
    char file_name[128];
    char * line = NULL;
    size_t length = 0;
    ssize_t read;

    printf("Provide input file: ");
    
    fgets(file_name, 128, stdin);
    strtok(file_name, "\n");
    
    file = fopen(file_name, "r");

    if (file == NULL) {
        printf("Failed to open file at %s: ", file_name);
        exit(1);
    }

    while ((read = getline(&line, &length, file)) != -1) {
        strtok(line, "\n");
        if (is_unique(line) == 1) {
            printf("%s is unique\n", line);
        } else {
            printf("%s is not unique\n", line);
        }
    }

    free(line);
    fclose(file);
    exit(0);
}
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int is_unique(char *str)
{
    char current_char;
    size_t size = strlen(str) + 1;
    char * working_string = malloc(size);
    char * temporal_string = NULL;
    char * search_chars = NULL;
    char * search_result = NULL;

    strcpy(working_string, str);

    for (int i = 0; i < strlen(str); i++) {
        current_char = working_string[0];
        search_chars = malloc(2);
        strcpy(search_chars, &current_char);

        temporal_string = malloc(strlen(working_string));
        memmove(&temporal_string[0], &working_string[1], strlen(working_string) - 1);
        
        free(working_string);
        working_string = malloc(strlen(temporal_string) + 1);
        strcpy(working_string, temporal_string);

        if (current_char != ' ') {
            search_result = strpbrk(working_string, search_chars);
            if (search_result != NULL) {
                return 0;
            }
        }
        
        free(temporal_string);
    }

    free(working_string);
    free(search_chars);

    return 1;
}

int main(void)
{
    FILE * file;
    char * line = NULL;
    char file_name[128];
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
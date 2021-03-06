#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const int MAX = 128;

int hash(char *val)
{
    int checksum;
    int index;

    for (int i = 0; i < strlen(val); i++) {
        checksum += (int) val[i];
    }
    index = (checksum * strlen(val)) % MAX;

    return index;
}

int main(void)
{
    FILE * file;
    char file_name[MAX];
    char * line = NULL;
    char * cmd;
    char * val;
    char delimiter[2] = "=";
    char push_cmd[5] = "push";
    char get_cmd[4] = "get";
    char *hash_table[MAX] = {0};
    size_t length = 0;
    size_t read;
    int index;

    printf("Provide input file: ");
    
    fgets(file_name, MAX, stdin);
    strtok(file_name, "\n");

    file = fopen(file_name, "r");

    if (file == NULL) {
        printf("Failed to open file at %s: ", file_name);
        exit(1);
    }

    while ((read = getline(&line, &length, file)) != -1) {
        strtok(line, "\n");
        cmd = strtok(line, delimiter);
        val = strtok(NULL, delimiter);

        if (strcmp(cmd, push_cmd) == 0) {
            printf("Command: push; Value: %s\n", val);
            index = hash(val);
            printf("Storing %s in index %i\n", val, index);
            hash_table[index] = malloc(strlen(val) + 1);
            strcpy(hash_table[index], val);
        } else if (strcmp(cmd, get_cmd) == 0) {
            printf("Command: get; Value: %s\n", val);
            index = hash(val);
            if (hash_table[index]!= '\0' && strcmp(hash_table[index], val) == 0) {
                printf("Value %s found in %i\n", val, index);
            } else {
                printf("Value %s is not in hash table\n", val);
            }
        } else {
            printf("Bad Command\n");
        }
    }

    free(line);
    fclose(file);
    exit(0);
}
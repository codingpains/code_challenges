#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "bst.h"

const int MAX = 128;

int main(void)
{
    FILE* file;
    char file_name[MAX];
    char* line = NULL;
    char* cmd;
    int    val;
    char delimiter[2] = "=";
    char insertCmd[7] = "insert";
    char lookupCmd[7] = "lookup";
    size_t length = 0;
    size_t read;
    struct node* root  = NULL;
    struct node* found = malloc(sizeof(Node));
    int maxDepth = 0;

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
        val = atoi(strtok(NULL, delimiter));

        if (strcmp(cmd, insertCmd) == 0) {
            printf("Command: insert; Value: %i\n", val);
            if (root == NULL) {
                root = new_node(val);
            }
            else {
                insert_node(val, root);
            }
        } else if (strcmp(cmd, lookupCmd) == 0) {
            printf("Command: lookup; Value: %i\n", val);
            found = lookup(val, root);
            if (found == NULL) {
                printf("Cant find this dude %i\n", val);
            }
            else {
                printf("Found this dude %i\n", found->data);
            }
        } else {
            printf("Bad Command\n");
        }
    }

    max_depth_of_tree(&maxDepth, root, 0);
    printf("The MAX DEPTH of this tree is %i\n", maxDepth);
    printf("The tree SIZE is %i\n", size_of_tree(root));
    printf("The tree MIN value is %i\n", min_value_of_tree(root));
    printf("The tree MAX value is %i\n", max_value_of_tree(root));
    printf("Printing the complete tree\n");
    print_tree(root, "r");
    printf("Printing the tree bottom-up\n");
    print_postorder_tree(root);

    free(line);
    fclose(file);
    exit(0);
}
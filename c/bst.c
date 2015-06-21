#include <stdio.h>
#include <stdlib.h>
#include "bst.h"

struct node* new_node (int data) {
    struct node* ret = malloc(sizeof(Node));

    ret->left  = NULL;
    ret->right = NULL;
    ret->data  = data;

    return ret;
};

struct node* insert_node (int data, struct node* currentNode) {
    if (currentNode == NULL) {
        return new_node(data);
    }
    else {
        if (data <= currentNode->data) {
            if (currentNode->left == NULL) {
                currentNode->left = new_node(data);
                return currentNode->left;
            }
            else {
                return insert_node(data, currentNode->left);
            }
        }
        else {
            if (currentNode->right == NULL) {
                currentNode->right = new_node(data);
                return currentNode->right;
            }
            else {
                return insert_node(data, currentNode->right);
            }
        }
    }
};

struct node* lookup (int data, struct node* currentNode) {
    printf("Looking for %i\n", data);
    if (currentNode == NULL) {
        printf("Current node is already null %i, can not be found\n", data);
        return NULL;
    }
    else if (currentNode->data == data) {
        printf("Found %i\n", currentNode->data);
        return currentNode;
    }
    else {
        if (data <= currentNode->data) {
            printf("%i is smaller than current node (%i) so go left\n", data, currentNode->data);
            return lookup(data, currentNode->left);
        }
        else {
            printf("%i is bigger than current node (%i) so go right\n", data, currentNode->data);
            return lookup(data, currentNode->right);
        }
    }
};

int size_of_tree (struct node* currentNode) {
    int count = 0;

    if (currentNode == NULL ) {
        return count;
    }
    else {
        count++;
        if (currentNode->left != NULL) {
            count += size_of_tree(currentNode->left);
        }
        if (currentNode->right != NULL) {
            count += size_of_tree(currentNode->right);
        }
    }
    return count;
};

int max_depth_of_tree (int** maxDepth, struct node* currentNode, int currentDepth) {
    if (currentNode == NULL && **maxDepth < currentDepth) {
        **maxDepth = currentDepth;
    }
    else {
        currentDepth++;
    }
};
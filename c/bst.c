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
        return NULL;
    }
    else if (currentNode->data == data) {
        return currentNode;
    }
    else {
        if (data <= currentNode->data) {
            return lookup(data, currentNode->left);
        }
        else {
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

void max_depth_of_tree (int* maxDepth, struct node* currentNode, int currentDepth) {
    if (currentNode == NULL) {
        if (*maxDepth < currentDepth) {
            *maxDepth = currentDepth;
        }
    }
    else {
        currentDepth++;
        max_depth_of_tree(maxDepth, currentNode->left, currentDepth);
        max_depth_of_tree(maxDepth, currentNode->right, currentDepth);
    }
};

int min_value_of_tree (struct node* currentNode) {
    if (currentNode->left == NULL) {
        return currentNode->data;
    }
    else {
        return min_value_of_tree(currentNode->left);
    }
};

int max_value_of_tree (struct node* currentNode) {
    if (currentNode->right == NULL) {
        return currentNode->data;
    }
    else {
        return max_value_of_tree(currentNode->right);
    }
};

void print_tree (struct node* currentNode, char* prefix) {
    if (currentNode != NULL) {
        printf("%s %i\n", prefix, currentNode->data);
        print_tree(currentNode->left, "/");
        print_tree(currentNode->right, "\\");
    }
};

void print_postorder_tree (struct node* currentNode) {
    if (currentNode != NULL) {
        print_postorder_tree(currentNode->left);
        print_postorder_tree(currentNode->right);
        printf("%i\n", currentNode->data);
    }
};

int has_path_sum (int sum, struct node* currentNode) {
    int subSum = 0;
    if (currentNode == NULL) {
        return sum == 0;
    }
    else {
        subSum = sum - currentNode->data;
        return (has_path_sum(subSum, currentNode->left) || has_path_sum(subSum, currentNode->right));
    }
}
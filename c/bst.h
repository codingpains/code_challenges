#ifndef BST_H
#define BST_H

struct node {
    int data;

    struct node* left;
    struct node* right;
};

typedef struct node Node;

struct node* new_node (int);

struct node* insert_node(int, struct node*);

struct node* lookup (int, struct node*);

int size_of_tree (struct node*);

int max_depth_of_tree (struct node*);

#endif
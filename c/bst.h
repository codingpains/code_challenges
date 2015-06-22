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

void max_depth_of_tree (int*, struct node*, int);

int min_value_of_tree(struct node*);

int max_value_of_tree(struct node*);

void print_tree(struct node*, char[2]);

void print_postorder_tree (struct node*);

#endif
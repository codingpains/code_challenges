# ifndef LINKEDLIST_H
# define LINKEDLIST_H

struct node {
    size_t length;
    char*  value;
    struct node* next;
};

typedef struct node Node;

/*
 * create a new empty list of strings
 *   RETURN VALUE: NULL if allocation fails
 */
struct node* linked_list_new (void);

/*
 * pushes a value into the list
 *  RETURN VALUE: 0 upon success
 *               -1 upon failure (to allocate enough memory)
 */
int linked_list_push (struct node**, char*);

/*
 * Looks value inside the linked list
 *  RETURN VALUE: node found
 */
struct node* linked_list_search (struct node*, char*);

# endif
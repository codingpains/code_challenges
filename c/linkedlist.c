#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "linkedlist.h"

struct node* linked_list_new (void) {
    struct node* head = malloc(sizeof(struct node));

    head->length = 0;
    head->value  = NULL;
    head->next   = NULL;

    return head;
};

/*
 * pushes a value into the list
 *  RETURN VALUE: 0 upon success
 *               -1 upon failure (to allocate enough memory)
 */
int linked_list_push (struct node** head, char* value) {
    struct node* newNode = malloc(sizeof(Node));

    newNode->length = strlen(value);
    newNode->value = malloc(sizeof(value));
    strcpy(newNode->value, value);

    newNode->next = *head;
    *head = newNode;

    return 0;
};

/*
 * Looks value inside the linked list
 *  RETURN VALUE: node found
 */
struct node* linked_list_search (struct node* head, char* value) {
    struct node* current = head;

    while (current->next != NULL && strcmp(current->value, value) != 0) {
        current = current->next;
    }

    return current;
}
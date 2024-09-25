export type Nullable<T> = T | null;

export interface Comparable<T> {
    greaterThan(arg: T): boolean;
    lessThan(arg: T): boolean;
}

export interface Node<T extends Comparable<T>> {
    left: Nullable<Node<T>>;
    right: Nullable<Node<T>>;
    value: T;
}

export function insert<T extends Comparable<T>>(node: Node<T>, value: T): void {
    if (node.value == null) {
        node.value = value;
        return;
    }
    if (node.value == value) {
        return;
    }
    if (value.lessThan(node.value)) {
        if (node.left) {
            insert(node.left, value);
            return;
        }
        node.left = { left: null, right: null, value };
        return;
    }
    if (node.right) {
        insert(node.right, value);
        return;
    }
    node.right = { left: null, right: null, value };
}

export class Point implements Comparable<Point> {
    constructor(public x: number, public y: number) {}
    
    greaterThan(point: Point): boolean {
        return this.y > point.y || this.x > point.x;
    }
    
    lessThan(point: Point): boolean {
        return this.y < point.y || this.x < point.x;
    }
}

export function remove<T extends Comparable<T>>(
    node: Nullable<Node<T>>, value: T): Nullable<Node<T>> {
    if (node == null) {
        return node;
    }
    if (value.lessThan(node.value)) {
        node.left = remove(node.left, value);
        return node;
    }
    if (value.greaterThan(node.value)) {
        node.right = remove(node.right, value);
        return node;
    }
    if (node.left == null) {
        return node.right;
    }
    if (node.right == null) {
        return node.left;
    }
    // The node's new value should be the minimum value in the right tree.
    let min = node.right;
    while (min.left) {
        min = min.left;
    }
    // Set the new value and remove the new value from the right tree.
    node.value = min.value;
    node.right = remove(node.right, min.value);
    return node;
}

export function inorder<T extends Comparable<T>>(
    node: Node<T>, values: T[]): T[] {
    if (node.left) {
        inorder(node.left, values);
    }
    values.push(node.value);
    if (node.right) {
        inorder(node.right, values)
    }
    return values;
}
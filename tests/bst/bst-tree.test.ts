import { insert, inorder, remove, Node, Point } from '../../src/bst/bst-tree';

describe('bst tree tests', () => {
    test('insert', () => {
        const n = 5;
        const node: Node<Point> =
            { left: null, right: null, value: new Point(1, 2) };
        for (let i = 1; i < n; i++) {
            const j = i % 2 ? -1 : 1;
            insert(node, new Point((i + 1) * j, (i + 2) * j));
        }
        const values = inorder(node, []);
        expect(values.length).toBe(n);
        for (let i = 1; i < values.length; i++) {
            expect(values[i - 1].lessThan(values[i])).toBe(true);
        }
    });

    test('remove', () => {
        let root: Node<Point> | null =
            { left: null, right: null, value: new Point(1, 2) };
        let node = remove(root, new Point(1, 2));
        expect(node).toBeNull();
        const n = 5;
        for (let i = 1; i < n; i++) {
            const j = i % 2 ? -1 : 1;
            insert(root, new Point((i + 1) * j, (i + 2) * j));
        }
        node = remove(root, new Point(1, 2));
        expect(node?.value.x).toBe(3);
        expect(node?.value.y).toBe(4);
        const values = inorder(node as Node<Point>, []);
        expect(values.length).toBe(n - 1);
        for (let i = 1; i < values.length; i++) {
            expect(values[i - 1].lessThan(values[i])).toBe(true);
        }
    });
});
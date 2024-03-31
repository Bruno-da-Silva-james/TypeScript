var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var list3 = new ListNode(5);
var list2 = new ListNode(3, list3);
var list = new ListNode(1, list2);
//function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {};
console.log(list.val, list.next);

var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var list = new ListNode(1);
//function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {};
console.log(list.val + list.val);

 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
      }
}

    const list = new ListNode(1);

//function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {};
console.log(list.val + list.val);

const L1: Array<number> = [2,4,3]
const L2: Array<number> = [5,6,4]

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}



function addTwoNumbers(l1: ListNode ,l2: ListNode ): ListNode | null {
  let newList: ListNode = [l1.val,l1.next = l2,l2.val]
  
  return newList;
}


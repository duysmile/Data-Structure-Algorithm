// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem

function checkHasCycle(head) {
    if (!head) {
        return false;
    }

    const tortoise = head;
    const hare = head;

    while(hare && hare.next) {
        hare = hare.next.next;
        tortoise = tortoise.next;
        if (hare === tortoise) {
            return true;
        }
    }

    return false;
}

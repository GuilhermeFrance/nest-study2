export function add(x, y){
    return x+y;
}

describe('Initial test', () => {
    it('add function', () => {
        expect(add(1,2)).toEqual(3)
    })
})
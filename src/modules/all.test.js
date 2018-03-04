import all, { INIT, fetchSuccess, fetchFail } from './all';

test('incrementa pokémon na lista', () => {
    expect(
        all(
            { pokemon: [{ id: 1 }, { id: 2 }, { id: 3 }], next: '' },
            fetchSuccess({
                results: [{ id: 4 }, { id: 5 }, { id: 6 }],
                next: 'next_link'
            })
        ).pokemon
    ).toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ]);
});

test('muda o link para a próxima requisição', () => {
    expect(
        all(
            { pokemon: [], next: '' },
            fetchSuccess({
                results: [{ id: 1 }, { id: 2 }, { id: 3 }],
                next: 'next_link'
            })
        ).next
    ).toBe('next_link');
});

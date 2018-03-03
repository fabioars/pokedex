import all, { INIT, fetchSuccess, fetchFail } from './all';

it('All pokémon', () => {
    describe('incrementa pokémon na lista', () => {
        expect(
            all(
                { ...INIT },
                fetchSuccess({
                    results: [{ id: 1 }, { id: 2 }, { id: 3 }],
                    next: 'next_link'
                }).pokemon
            ).toEquals([{ id: 1 }, { id: 2 }, { id: 3 }])
        );
    });

    describe('muda o link para a próxima requisição', () => {
        expect(
            all(
                { ...INIT },
                fetchSuccess({
                    results: [{ id: 1 }, { id: 2 }, { id: 3 }],
                    next: 'next_link'
                }).next
            ).toBe('next_link')
        );
    });
});

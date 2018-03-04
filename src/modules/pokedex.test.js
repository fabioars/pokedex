import reducer, { INIT, addPokemon, removePokemon } from './pokedex';

test('adiciona pokémon a pokédex', () => {
    expect(reducer({ ...INIT }, addPokemon({ id: 1 })).list[0].id).toBe(1);
});

test('tenta adicionar pokémon repetido', () => {
    expect(
        reducer(
            { ...INIT, list: [{ id: 1 }, { id: 2 }, { id: 3 }] },
            addPokemon({ id: 2 })
        ).list
    ).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
});

test('adiciona pokémon no começo da lista', () => {
    expect(
        reducer(
            { ...INIT, list: [{ id: 5 }, { id: 10 }, { id: 16 }] },
            addPokemon({ id: 2 })
        ).list
    ).toEqual([{ id: 2 }, { id: 5 }, { id: 10 }, { id: 16 }]);
});

test('adiciona pokémon no meio da lista', () => {
    expect(
        reducer(
            { ...INIT, list: [{ id: 2 }, { id: 10 }, { id: 16 }] },
            addPokemon({ id: 5 })
        ).list
    ).toEqual([{ id: 2 }, { id: 5 }, { id: 10 }, { id: 16 }]);
});

test('adiciona pokémon no final da lista', () => {
    expect(
        reducer(
            { ...INIT, list: [{ id: 2 }, { id: 10 }, { id: 16 }] },
            addPokemon({ id: 20 })
        ).list
    ).toEqual([{ id: 2 }, { id: 10 }, { id: 16 }, { id: 20 }]);
});

test('remove pokémon a pokédex', () => {
    expect(
        reducer(
            { ...INIT, list: [{ id: 3 }, { id: 4 }, { id: 8 }] },
            removePokemon(4)
        ).list
    ).toEqual([{ id: 3 }, { id: 8 }]);
});

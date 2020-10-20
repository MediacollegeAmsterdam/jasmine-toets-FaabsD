describe('Pagina moet de juiste titel hebben', function() {
    it('should have the correct title', function () {
        expect(document.title).toBe('Verbeteringen');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Testje 2', function () {
    it('item moet gelijk zijn aan item', function () {
        expect(unitTest.item).toBe('item');
    });
    it('nummer moet gelijk zijn aan 2', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});

describe('Testje 3', function () {
    it('beschrijving moet kloppen', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});

describe('Testje 4', function () {
    it('de boodschap moet Hallo zijn', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});

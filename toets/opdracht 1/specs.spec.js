describe('Pagina moet de juiste titel hebben en de juiste UTF', function() {
    it('should have the correct title', function () {
        expect(document.title).toBe('Verbeteringen');
    });
    it('should have the correct UTF', function () {
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Het item en nummer moeten aantal kloppen', function () {
    it('item moet gelijk zijn aan item', function () {
        expect(unitTest.item).toBe('item');
    });
    it('nummer moet gelijk zijn aan 2', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});

describe('Moet de juiste beschrijving hebben.', function () {
    it('beschrijving moet kloppen', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});

describe('de boodschap moet kloppen', function () {
    it('de boodschap moet Hallo zijn', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});

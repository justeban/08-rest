'use strict';

const router = require('../../../src/lib/router.js');

describe('Router', () => {

  it('Registers routes of many types', () => {
    router.get('/', () => true);
    router.put('/', () => true);
    router.post('/', () => true);
    router.patch('/', () => true);
    router.delete('/', () => true);
    expect(router.routes.GET['/']).toBeDefined();
    expect(router.routes.PUT['/']).toBeDefined();
    expect(router.routes.POST['/']).toBeDefined();
    expect(router.routes.PATCH['/']).toBeDefined();
    expect(router.routes.DELETE['/']).toBeDefined();
  });

});
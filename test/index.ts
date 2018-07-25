import * as c from 'chai';
import * as m from 'mocha';
import RpsDate from '../src/index';
import {RpsContext} from 'rpscript-interface';

m.describe('Date', () => {
  m.it('should format correct date', async function() {
    let d = new RpsDate();
    let ctx = new RpsContext();

    let r1 = await d.of(ctx,{},[1990,0,31]);
    let r2 = await d.addDate(ctx,{},'years',1,r1);
    let r3 = await d.format(ctx,{},'DD/MM/YY');

    //@ts-ignore
    let result = r3(r2);

    c.expect(result).to.be.deep.equals('31/01/91');

  });

})

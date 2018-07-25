import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import Date from 'date-fp';

/** Module for Date-FP
 * @namespace Date
 * 
 * @see {@link https://www.npmjs.com/package/date-fp}
*/
@RpsModule("date")
export default class RpsDate {

/**
 * @function date-of
 * @memberof Date
 * 
*/
@rpsAction({verbName:'date-of'})
async of (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.of.apply(this,param);
}

 /**
 * @function from-time
 * @memberof Date
 * 
*/
@rpsAction({verbName:'from-time'})
async fromTime (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.fromTime.apply(this,param);
}

 /**
 * @function add-date
 * @memberof Date
 * 
*/
@rpsAction({verbName:'add-date'})
async addDate (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date|Function> {
  return Date.add.apply(this,param);
}

 /**
 * @function clone-date
 * @memberof Date
 * 
*/
@rpsAction({verbName:'clone-date'})
async cloneDate (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.clone.apply(this,param);
}

 /**
 * @function date-convert-to
 * @memberof Date
 * 
*/
@rpsAction({verbName:'date-convert-to'})
async convertTo (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date|Function> {
  return Date.convertTo.apply(this,param);
}

 /**
 * @function date-convert-to
 * @memberof Date
 * 
*/
@rpsAction({verbName:'date-diff'})
async diff (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date|Function> {
  return Date.diff.apply(this,param);
}

 /**
 * @function date-equals
 * @memberof Date
 * 
*/
@rpsAction({verbName:'date-equals'})
async equals (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Boolean|Function> {
  return Date.equals.apply(this,param);
}

 /**
 * @function date-format
 * @memberof Date
 * 
*/
@rpsAction({verbName:'date-format'})
async format (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<String|Function> {
  return Date.format.apply(this,param);
}

 /**
 * @function date-get
 * @memberof Date
 * 
*/
@rpsAction({verbName:'date-get'})
async get (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date|Function> {
  return Date.get.apply(this,param);
}

 /**
 * @function is-leap-year
 * @memberof Date
 * 
*/
@rpsAction({verbName:'is-leap-year'})
async isLeapYear (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Boolean> {
  return Date.isLeapYear.apply(this,param);
}

 /**
 * @function is-date-valid
 * @memberof Date
 * 
*/
@rpsAction({verbName:'is-date-valid'})
async isValid (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Boolean> {
  return Date.isValid.apply(this,param);
}

 /**
 * @function max-date
 * @memberof Date
 * 
*/
@rpsAction({verbName:'max-date'})
async max (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.max.apply(this,param);
}

 /**
 * @function is-leap-year
 * @memberof Date
 * 
*/
@rpsAction({verbName:'min-date'})
async min (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.min.apply(this,param);
}

 /**
 * @function parse-date
 * @memberof Date
 * 
*/
@rpsAction({verbName:'parse-date'})
async parse (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.parse.apply(this,param);
}

 /**
 * @function set-date
 * @memberof Date
 * 
*/
@rpsAction({verbName:'set-date'})
async set (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.set.apply(this,param);
}

 /**
 * @function subtract-date
 * @memberof Date
 * 
*/
@rpsAction({verbName:'subtract-date'})
async sub (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.sub.apply(this,param);
}

 /**
 * @function unix-time
 * @memberof Date
 * 
*/
@rpsAction({verbName:'unix-time'})
async unixTime (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.unixTime.apply(this,param);
}

}


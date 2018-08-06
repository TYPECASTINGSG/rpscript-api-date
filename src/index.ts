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
 * @example
 * date-of [1970, 0, 1]
 * 
 * @param {Array} array 
 * 
 * @returns {Date} 
 * @summary date-of :: [Number] -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/of.html}
 * 
*/
@rpsAction({verbName:'date-of'})
async of (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.of.apply(this,param);
}

/**
 * @function from-time
 * @memberof Date
 * @example
 * from-time 1488374854000
 * 
 * @param {Array} array 
 * 
 * @returns {Date}
 * @summary from-time :: Number -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/fromTime.html}
 * 
*/
@rpsAction({verbName:'from-time'})
async fromTime (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.fromTime.apply(this,param);
}

/**
 * @function add-date
 * @memberof Date
 * @example
 * add-date 'milliseconds' 1 date
 * 
 * 
 * @returns {Date}
 * @summary add-date :: String -> Number -> Date -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/add.html}
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
 * 
 * @returns {Date}
 * @summary clone-date :: Date -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/clone.html}
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
 * 
 * @summary date-convert-to :: String -> Date -> Number
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/convert-to.html}
 * 
*/
@rpsAction({verbName:'date-convert-to'})
async convertTo (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date|Function> {
  return Date.convertTo.apply(this,param);
}

/**
 * @function date-diff
 * @memberof Date
 * 
 * 
 * @summary date-diff :: String -> Date -> Date -> Number
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/diff.html}
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
 * 
 * @summary date-equals :: Date -> Date -> Boolean
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/equals.html}
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
 * 
 * @summary date-format :: String -> Date -> String
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/format.html}
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
 * @summary get :: String -> Date -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/get.html}
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
 * @summary is-leap-year :: Date -> Boolean
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/is-leap-year.html}
 * 
*/
@rpsAction({verbName:'is-leap-year'})
async isLeapYear (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Boolean> {
  return Date.isLeapYear.apply(this,param);
}

 /**
 * @function date-is-valid
 * @memberof Date
 * 
 * @summary date-is-valid :: Date -> Boolean
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/is-valid.html}
 * 
*/
@rpsAction({verbName:'date-is-valid'})
async isValid (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Boolean> {
  return Date.isValid.apply(this,param);
}

 /**
 * @function max-date
 * @memberof Date
 * 
 * @summary max-date :: [Date] -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/max.html}
 * 
*/
@rpsAction({verbName:'max-date'})
async max (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.max.apply(this,param);
}

 /**
 * @function min-date
 * @memberof Date
 * 
 * @summary min-date :: [Date] -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/min.html}
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
 * @summary parse-date :: String -> String -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/parse.html}
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
 * @summary set-date :: String -> Number -> Date -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/set.html}
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
 * @summary subtract-date :: String -> Number -> Date -> Date
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/sub.html}
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
 * @summary unix-time :: Date -> Number
 * 
 * @see {@link https://cullophid.github.io/date-fp/docs/functions/unix-time.html}
 * 
*/
@rpsAction({verbName:'unix-time'})
async unixTime (ctx:RpsContext,opts:{}, ...param:any[]) : Promise<Date> {
  return Date.unixTime.apply(this,param);
}

}


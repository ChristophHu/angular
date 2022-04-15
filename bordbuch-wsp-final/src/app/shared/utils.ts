export function checkStateForEmptyArrays(value: any): any[] {
    if (isArray(value)) {
        return value
    } else {
        return []
    }
}

export function dateToLocalISOString(dt: Date): string {
    dt.setHours(new Date().getHours()+1)
    return dt.toISOString().substring(0,16)
}

export function isUndefined(value: any): value is undefined {
    return typeof value === 'undefined'
}
  
export function isNull(value: any): value is null {
    return value === null
}

export function isNumber(value: any): value is number {
    return typeof value === 'number'
}

export function isNumberFinite(value: any): value is number {
    return isNumber(value) && isFinite(value)
}

// Not strict positive
export function isPositive(value: number): boolean {
    return value >= 0
}

export function isInteger(value: number): boolean {
    // No rest, is an integer
    return value % 1 === 0
}

export function isNil(value: any): value is null | undefined {
    return value === null || typeof value === 'undefined'
}

export function isString(value: any): value is string {
    return typeof value === 'string'
}

export function isObject(value: any): boolean {
    return value !== null && typeof value === 'object'
}

export function isArray(value: any): boolean {
    return Array.isArray(value)
}

export function isFunction(value: any): boolean {
    return typeof value === 'function'
}

export function toDecimal(value: number, decimal: number): number {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal)
}

export function testFunction(cb: any) {
    console.time('duration')
    for (var i = 0; i < 1000; i++) {
        // this.funcToTest()
        cb // callbackFunction
    };
    console.timeEnd('duration')
}

// time
export function diff() {
    const n = new Date(now() - timezoneoffset())
}

export function getLocalISO(val: string = ''): string {
    let date: Date | string
    switch(val) {
    case 'lastyear':
        date = new Date(lastyear() - timezoneoffset())
        break

    case 'year':
        date = new Date(year() - timezoneoffset())
        break

    case 'lastmonth':
        date = new Date(lastmonth() - timezoneoffset())
        break

    case 'month':
        date = new Date(month() - timezoneoffset())
        break

    case 'lastweek':
        date = new Date(lastweek() - timezoneoffset())
        break

    case 'week':
        date = new Date(week() - timezoneoffset())
        break

    case 'yesterday':
        date = new Date(yesterday() - timezoneoffset())
        break

    case 'today':
        date = new Date(today() - timezoneoffset())
        break

    case 'tomorrow':
        date = new Date(tomorrow() - timezoneoffset())
        break

    case 'now':
        date = new Date(now() - timezoneoffset())
        break

    default:
        date = new Date()
    }
    const result: string = date.toISOString().slice(0, -1)

    return result
}

export function timezoneoffset(): any {
    return new Date().getTimezoneOffset() * 60000
}
function lastyear(): any {
    return new Date(new Date().getFullYear()-1, 0, 1)
}
function year(): any {
    return new Date(new Date().getFullYear(), 0, 1)
}
function lastmonth(): any {
    return new Date(new Date().getFullYear(), new Date().getMonth()-1, 1)
}
function month(): any {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1)
}
function lastweek(): any {
    // Sunday - Saturday : 0 - 6
    let d = new Date()
    const diff = d.getDate() - d.getDay() + (d.getDay() == 0 ? -6:1) - 7
    d.setDate(diff)
    d.setHours(0,0,0,0)
    return d
}
function week(): any {
    // Sunday - Saturday : 0 - 6
    let d = new Date()
    const diff = d.getDate() - d.getDay() + (d.getDay() == 0 ? -6:1)
    d.setDate(diff)
    d.setHours(0,0,0,0)
    return d
}
function yesterday(): number {
    return new Date().setHours(-24,0,0,0)
}
function today(): number {
    return new Date().setHours(0,0,0,0)
}
function now(): number {
    return new Date().getTime()
}
function tomorrow(): number {
    return new Date().setHours(24,0,0,0)
}